/**
 * 具体的项目信息弹窗
 */
import {
  Form,
  Input,
  Select,
  DatePicker,
  Radio,
  Card,
  Table,
  Space,
  Button,
  Modal,
  Row,
  Col,
} from 'antd';
import Mock from 'mockjs';
import dayjs from 'dayjs';
import { useBoolean } from 'ahooks';

import Verify from 'inner-page/teacher-manager-apply-check/verify';

const { Column, ColumnGroup } = Table;

const { teacherData }: { teacherData: PT.SchoolTeacher[] } = Mock.mock({
  'teacherData|2': [
    {
      'key|+1': 1,
      'id|+1': 1,
      'name|+1': ['郑威', '张永泉'],
      'schoolName|+1': ['哈尔滨理工大学'],
      'tel|+1': ['13945072055', '18846077959'],
      'applyDoctorNums|0-5': 1,
      'applyPostgraduateNums|0-5': 1,
      'checkDoctorNums|0-5': 1,
      'checkPostgraduateNums|0-5': 1,
      'FirstDoctorNums|0-5': 1,
      'FirstPostgraduateNums|0-5': 1,
      'secondDoctorNums|0-5': 1,
      'secondPostgraduateNums|0-5': 1,
      description: '',
      state: '未审批',
    },
  ],
});
const options = [
  { value: '计算机' },
  { value: '化学' },
  { value: '数学' },
  { value: '生物制药' },
];
const Check = () => {
  const [isShow, { setTrue, setFalse }] = useBoolean(false);
  const tailLayout = {
    wrapperCol: { offset: 1 },
  };
  return (
    <>
      <Card title="项目信息">
        <Form layout="horizontal" title="项目信息">
          <Form.Item label="项目名称">
            <Input
              placeholder="请输入项目名称"
              value="退役锂电材料短程循环与过程污染控制技术与评价方法研究"
            />
          </Form.Item>
          <Row justify="space-between" gutter={[{ lg: 40, md: 16 }, 0]}>
            <Col flex={1}>
              <Form.Item label="项目年份">
                <Input addonAfter={'年'}></Input>
              </Form.Item>
            </Col>
            <Col flex={1}></Col>
          </Row>
          <Row justify="space-between" gutter={[{ lg: 40, md: 16 }, 0]}>
            <Col flex={1}>
              <Form.Item label="开始时间">
                <DatePicker disabledDate={() => true} open={false} />
              </Form.Item>
            </Col>
            <Col flex={1}>
              <Form.Item label="结束时间">
                <DatePicker
                  disabledDate={() => true}
                  open={false}
                  defaultValue={dayjs()}
                />
              </Form.Item>
            </Col>
          </Row>
          <Row justify="space-between" gutter={[{ lg: 32, md: 16 }, 0]}>
            <Col flex={1}>
              <Form.Item label="硕士生" {...tailLayout}>
                <Input placeholder="硕士生个数" value="1" addonAfter={'个'} />
              </Form.Item>
            </Col>
            <Col flex={1}>
              <Form.Item label="博士生" {...tailLayout}>
                <Input placeholder="博士生个数" value="1" addonAfter={'个'} />
              </Form.Item>
            </Col>
          </Row>
          <Form.Item label="需求专业">
            <Select mode="multiple" options={options} />
          </Form.Item>
          <Row justify="space-between" gutter={[{ lg: 40, md: 16 }, 0]}>
            <Col flex={1}>
              <Form.Item label="项目投资">
                <Input placeholder="项目投资" addonAfter={'万元'} />
              </Form.Item>
            </Col>
            <Col flex={1.8}>
              <Form.Item label="是否公开">
                <Radio.Group>
                  <Radio value="public">是</Radio>
                  <Radio value="private">否</Radio>
                </Radio.Group>
              </Form.Item>
            </Col>
          </Row>
          <Form.Item label="项目简介">
            <Input.TextArea
              style={{ resize: 'none' }}
              placeholder="项目简介"
              value={''}
            />
          </Form.Item>
        </Form>
      </Card>
      <Card title="指标审核">
        <Table dataSource={teacherData} size="middle">
          <Column title="序号" dataIndex="id" key="id" />
          <Column title="导师名称" dataIndex="name" key="name" />
          <Column title="所属高校" dataIndex="schoolName" key="schoolName" />
          <Column title="联系电话" dataIndex="tel" key="tel" />
          <ColumnGroup title="高校导师申请对接数">
            <Column
              title="博士生"
              dataIndex="applyDoctorNums"
              key="applyDoctorNums"
            />
            <Column
              title="硕士生"
              dataIndex="applyPostgraduateNums"
              key="applyPostgraduateNums"
            />
          </ColumnGroup>
          <Column title="备注" dataIndex="description" key="description" />
          <Column title="高校审批" dataIndex="state" key="state" />
          <Column
            title="操作"
            dataIndex="operation"
            key="operation"
            render={() => (
              <Space size="middle">
                <Button type="primary" onClick={setTrue}>
                  审核
                </Button>
              </Space>
            )}
          />
        </Table>
        <Modal
          title="高校导师指标资格审核"
          visible={isShow}
          onCancel={setFalse}
          width={'60vw'}
          footer={
            <div>
              <Button type="primary" onClick={setFalse}>
                提交
              </Button>
              <Button key="back" onClick={setFalse}>
                取消
              </Button>
            </div>
          }
        >
          <Verify />
        </Modal>
      </Card>
    </>
  );
};

export default Check;
