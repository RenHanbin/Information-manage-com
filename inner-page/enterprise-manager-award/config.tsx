import { Space, Button, Dropdown, Menu } from 'antd';
import {
  UnorderedListOutlined,
  DownOutlined,
  UserOutlined,
  SyncOutlined,
} from '@ant-design/icons';
import Search from 'antd/lib/input/Search';

const Config = () => {
  const menu = (
    <Menu>
      <Menu.Item key="1" icon={<UserOutlined />}>
        未通过
      </Menu.Item>
      <Menu.Item key="2" icon={<UserOutlined />}>
        通过
      </Menu.Item>
      <Menu.Item key="3" icon={<UserOutlined />}>
        全部
      </Menu.Item>
    </Menu>
  );

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row-reverse',
      }}
    >
      <Space size={570}>
        <div></div>
        <Space>
          <div>审批状态：</div>
          <Dropdown overlay={menu}>
            <Button>
              <DownOutlined />
            </Button>
          </Dropdown>
          <Search placeholder="搜索" style={{ width: '200px' }} />
          <Button icon={<SyncOutlined />} />
          <Button icon={<UnorderedListOutlined />} />
        </Space>
      </Space>
    </div>
  );
};

export default Config;
