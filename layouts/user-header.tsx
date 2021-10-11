import React from 'react';
import { useRouter } from 'next/router';

import { Avatar, Button, Space } from 'antd';
import { UserOutlined, LogoutOutlined } from '@ant-design/icons';

const UserHeader = () => {
  const router = useRouter();
  return (
    <div style={{ width: '300px' }}>
      <Space>
        <Avatar
          style={{ backgroundColor: '#87d068' }}
          icon={<UserOutlined />}
        />
        <Button type="text" style={{ fontSize: '14px' }}>
          admin
        </Button>
        <Button
          type="text"
          icon={<LogoutOutlined />}
          style={{ fontSize: '14px' }}
          onClick={() => {
            // TODO: 还需清空Storage
            localStorage.clear();
            router.push('/');
          }}
        >
          退出登录
        </Button>
      </Space>
    </div>
  );
};

export default UserHeader;
