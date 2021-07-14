import React from 'react';
import { useRouter } from 'next/router';

import { Avatar, Button, Space } from 'antd';
import { UserOutlined, LogoutOutlined } from '@ant-design/icons';

const checkRole = (role: number) => {
  switch (role) {
    case 1:
      return '高校管理员';
    case 2:
      return '高校导师';
    default:
      return '企业管理员';
  }
};
const UserHeader = () => {
  const router = useRouter();
  return (
    <div>
      <Space>
        <Avatar
          style={{ backgroundColor: '#87d068' }}
          icon={<UserOutlined />}
        />
        <Button type="text" style={{ fontSize: '14px' }}>
          {checkRole(Number(localStorage.getItem('Role')))}
        </Button>
        <Button
          type="text"
          icon={<LogoutOutlined />}
          style={{ fontSize: '14px' }}
          onClick={() => {
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
