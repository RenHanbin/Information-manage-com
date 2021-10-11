import { Modal, Input, Row, Col, Divider, Select, DatePicker } from 'antd';
import dayjs, { Dayjs } from 'dayjs';
import { useState, useEffect } from 'react';

const { Option } = Select;

interface DetailProps {
  modalVisible: boolean;
  setModalHidden: () => void;
  currentAttendanceShow: PT.AttendanceShow;
}

interface DateRenderStyle {
  border?: string;
  borderRadius?: string;
  borderColor?: string;
  background?: string;
}

const Detail: React.FC<DetailProps> = ({
  modalVisible,
  setModalHidden,
  currentAttendanceShow,
}) => {
  // 储存dayjs对象，默认为父组件传入的日期，可通过选择框事件修改
  // TODO 增加选择框修改年和月的事件
  const [_year] = useState<number>(dayjs(currentAttendanceShow.date).year());
  // @ts-ignore
  const [_month] = useState<number>(dayjs(currentAttendanceShow.date).month());

  // TODO 用月份和年份，从后端获取该月的出勤数据, 或许不是boolean数组类型, 可能就是一个unix时间戳数组
  const [attendedDays, setAttendedDays] = useState<boolean[]>([]);

  useEffect(() => {
    // FIXME 设置假的出勤数据,当后台有数据后要把此处删掉
    const mockAttendedDays: boolean[] = [];
    for (let i = 0; i < currentAttendanceShow.dayInMonth; i++) {
      mockAttendedDays.push(Math.random() < 0.7 ? true : false);
    }
    setAttendedDays(mockAttendedDays);
  }, []);

  return (
    <Modal
      title="考勤管理"
      centered
      visible={modalVisible}
      onOk={() => {
        // TODO 向后端提交数据
        setModalHidden();
      }}
      onCancel={() => setModalHidden()}
      width={'60vw'}
    >
      <Row align={'middle'} gutter={[0, 16]} style={{ marginBottom: '16px' }}>
        <Col span={2}>
          <span>姓名:</span>
        </Col>
        <Col span={22}>
          <Input disabled value={currentAttendanceShow?.name ?? '-'}></Input>
        </Col>

        <Col span={2}>
          <span>项目:</span>
        </Col>
        <Col span={22}>
          <Input
            disabled
            value={currentAttendanceShow?.projectName ?? '-'}
          ></Input>
        </Col>
        <Col span={2}>
          <span>考勤:</span>
        </Col>
        <Col span={22}>
          <DatePicker
            style={{ width: '100%' }}
            placeholder="选择要查看的月份"
            inputReadOnly
            format="YYYY-MM"
            onPanelChange={(value, mode) => {
              console.log(value, mode);
            }}
            disabledDate={() => {
              // FIXME 目前设置所有日期不可选后续根据需求做更改
              return true;
            }}
            dateRender={(current: Dayjs) => {
              const style: DateRenderStyle = {};
              // 学生出勤就加一个圆圈代表出勤
              if (
                attendedDays &&
                current.isBefore(dayjs()) &&
                attendedDays[current.date()]
              ) {
                style.background = '#a0d911';
              }
              return (
                <div className="ant-picker-cell-inner" style={style}>
                  {current.date()}
                </div>
              );
            }}
            showTime={false}
          />
        </Col>
      </Row>

      <Divider />
      <Row>
        <Col span={2}>
          <span>是否通过:</span>
        </Col>
        <Col span={22}>
          <Select style={{ width: '100%' }} defaultValue={'通过'}>
            <Option value="通过">通过</Option>
            <Option value="不通过">不通过</Option>
          </Select>
        </Col>
      </Row>
    </Modal>
  );
};

export default Detail;
