import {
  Button,
  DatePicker,
  Popover,
  Space,
  Checkbox,
  Row,
  Col,
  Input,
} from 'antd';
import { UnorderedListOutlined } from '@ant-design/icons';
const { Search } = Input;
// 组件
const Increase = () => {
  return (
    <Row justify="end">
      <Col>
        <Space>
          <span style={{ width: '40px' }}>日期：</span>
          <DatePicker picker="month" placeholder="选择日期" />
          <Search placeholder="搜索" style={{ width: '200px' }} />
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
