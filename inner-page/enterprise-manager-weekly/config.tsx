import { DatePicker, Popover, Space, Button, Checkbox } from 'antd';
import { UnorderedListOutlined } from '@ant-design/icons';
import Search from 'antd/lib/input/Search';

const Config = () => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'row-reverse',
    }}
  >
    <Space size={600}>
      <div></div>
      <Space>
        <Search placeholder="搜索" style={{ width: '200px' }} />
        <DatePicker picker="month" />
        <Popover
          placement="bottomRight"
          content={
            <Checkbox.Group
              defaultValue={[
                'key',
                'projectName',
                'name',
                'date',
                'status',
                'level',
                'action',
              ]}
              onChange={() => {}}
            >
              <Space direction="vertical">
                <Checkbox value="key">序号</Checkbox>
                <Checkbox value="name">学生名称</Checkbox>
                <Checkbox value="projectName">项目名称</Checkbox>
                <Checkbox value="date">日期</Checkbox>
                <Checkbox value="status">完成情况</Checkbox>
                <Checkbox value="level">评价</Checkbox>
                <Checkbox value="action">操作</Checkbox>
              </Space>
            </Checkbox.Group>
          }
          trigger="click"
        >
          <Button icon={<UnorderedListOutlined />} />
        </Popover>
      </Space>
    </Space>
  </div>
);

export default Config;
