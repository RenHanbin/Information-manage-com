import { Button, Checkbox, Input, Popover, Row, Select, Space } from 'antd';
import { UnorderedListOutlined } from '@ant-design/icons';

const { Search } = Input;
const { Option } = Select;

const Config = () => {
  return (
    <>
      <Row justify={'end'}>
        <Space>
          项目状态：
          <Select
            defaultValue="全部"
            style={{ width: 120 }}
            onChange={() => {}}
          >
            <Option value="全部">全部</Option>
            <Option value="审稿">审稿</Option>
            <Option value="审批中">审批中</Option>
            <Option value="未通过">未通过</Option>
          </Select>
          <Search placeholder="搜索" style={{ width: 200 }} />
        </Space>
        <Popover
          placement="bottomRight"
          content={
            <Checkbox.Group
              defaultValue={[
                'key',
                'projectName',
                'name',
                'school',
                'achievementType',
                'date',
                'operation',
              ]}
              onChange={() => {}}
            >
              <Space direction="vertical">
                <Checkbox value="key">序号</Checkbox>
                <Checkbox value="name">学生名称</Checkbox>
                <Checkbox value="projectName">项目名称</Checkbox>
                <Checkbox value="date">日期</Checkbox>
                <Checkbox value="school">学校</Checkbox>
                <Checkbox value="achievementType">论文类型</Checkbox>
                <Checkbox value="operation">操作</Checkbox>
              </Space>
            </Checkbox.Group>
          }
          trigger="click"
        >
          <Button icon={<UnorderedListOutlined />} />
        </Popover>
      </Row>
    </>
  );
};

export default Config;
