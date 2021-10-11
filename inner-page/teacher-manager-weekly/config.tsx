import { DatePicker, Popconfirm, Popover, Space, Button, Checkbox } from 'antd';
import {
  MinusOutlined,
  UnorderedListOutlined,
  WarningOutlined,
} from '@ant-design/icons';
import Search from 'antd/lib/input/Search';
import { Key } from 'antd/es/table/interface';
interface configProps {
  selectedRowKeys: Key[];
}
const Config = ({ selectedRowKeys }: configProps) => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'space-between',
    }}
  >
    {/*数据展示及操作模板*/}
    {/*左侧删除按钮及提示框*/}
    <Popconfirm
      title="一经删除将无法恢复数据,请确认是否进行删除"
      onConfirm={() => {
        // TODO 向后端发送数据
        console.log(selectedRowKeys);
      }}
      okText="确定删除"
      cancelText="取消"
      icon={<WarningOutlined style={{ color: 'red' }} />}
    >
      <Button type="primary" danger={true}>
        <MinusOutlined />
        删除
      </Button>
    </Popconfirm>
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
