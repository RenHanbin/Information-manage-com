import {
  Button,
  DatePicker,
  Popover,
  Space,
  Checkbox,
  Popconfirm,
  message,
  Row,
  Col,
} from 'antd';
import { MinusOutlined, UnorderedListOutlined } from '@ant-design/icons';

// 组件
const Increase = () => {
  const confirm = () => {
    message.success('删除成功');
  };

  const cancel = () => {};

  return (
    <Row justify="space-between">
      <Col>
        <Popconfirm
          title="你确定要删除这些信息么?"
          onConfirm={confirm}
          onCancel={cancel}
          okText="是"
          cancelText="否"
        >
          <Button icon={<MinusOutlined />} danger type="primary">
            删除
          </Button>
        </Popconfirm>
      </Col>

      <Col>
        <Space>
          <span style={{ width: '40px' }}>日期：</span>
          <DatePicker picker="month" placeholder="选择日期" />

          <Popover
            placement="bottomRight"
            content={
              <Checkbox.Group
                defaultValue={['id', 'name', 'projectName', 'date', 'status']}
              >
                <Space direction="vertical">
                  <Checkbox value="id">序号</Checkbox>
                  <Checkbox value="name">学生名称</Checkbox>
                  <Checkbox value="projectName">项目名称</Checkbox>
                  <Checkbox value="date">日期</Checkbox>
                  <Checkbox value="status">考勤状况</Checkbox>
                </Space>
              </Checkbox.Group>
            }
            trigger="click"
          >
            <Button icon={<UnorderedListOutlined />} />
          </Popover>
        </Space>
      </Col>
    </Row>
  );
};

export default Increase;
