import { DatePicker, Popover, Space, Button, Checkbox } from 'antd';
import { UnorderedListOutlined } from '@ant-design/icons';
import Search from 'antd/lib/input/Search';
const Config = () => (
  <div
    style={{
      float: 'right',
      marginBottom: '15px',
    }}
  >
    {/*右侧搜索栏目前只实现了搜索属性name也就是项目名称*/}
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
  </div>
);

export default Config;
