import { useRouter } from 'next/router';

import { Button, Form, Input, message } from 'antd';

const Detail = () => {
  const router = useRouter();

  const onFinish = (values: { username: string; password: string }) => {
    switch (values.username) {
      case 'test1':
        localStorage.setItem('Role', '1');
        router.push('/home');
        break;
      case 'test2':
        localStorage.setItem('Role', '2');
        router.push('/home');
        break;
      case 'test3':
        localStorage.setItem('Role', '3');
        router.push('/home');
        break;
      default:
        message.error('账号输入错误');
    }
  };

  return (
    <Form title="登录" onFinish={onFinish}>
      <Form.Item
        label="用户账号"
        name="username"
        rules={[{ required: true, message: '请输入您的用户账号!' }]}
      >
        <Input placeholder="请输入用户账号" />
      </Form.Item>
      <Form.Item
        label="用户密码"
        name="password"
        rules={[{ required: true, message: '请输入您的密码!' }]}
      >
        <Input type="password" placeholder="请输入用户密码" />
      </Form.Item>
      <Form.Item wrapperCol={{ span: 12 }}>
        <Button size="large" type="primary" htmlType="submit" block>
          登录
        </Button>
      </Form.Item>
    </Form>
  );
};
export default Detail;
