import { useRouter } from 'next/router';
import { useRequest, useUnmount } from 'ahooks';
import { Button, Form, Input, Radio, message } from 'antd';
import axios from 'axios';
import md5 from 'md5';

import * as APIS from '../../../constants/api-constants';

const Detail = () => {
  const router = useRouter();

  let { loading, run, cancel } = useRequest(
    data => {
      console.log('登录信息：', data);
      let { role, username, password } = data;
      return axios.post(APIS.AUTHORTION, {
        role,
        username,
        password: md5(password),
      });
    },
    {
      manual: true,
      onSuccess: result => {
        console.log(result);
        const { token, role } = result.data.mainData;
        console.log('获取后台返回的登录信息', token, role);
        if (token) {
          // 添加全局请求头token
          localStorage.setItem('Authorization', token);
          localStorage.setItem('Role', role);
          axios.defaults.headers.common['Authorization'] = token;
          router.push('/home');
        }
      },
      onError: () => {
        console.log('onError');
        message.error('用户信息错误');
      },
    }
  );
  useUnmount(() => {
    cancel();
  });

  return (
    <Form title="登录" onFinish={values => run(values)}>
      <Form.Item label="选择类型" name="role">
        <Radio.Group defaultValue={1} buttonStyle="solid">
          <Radio value={1}>高校管理员</Radio>
          <Radio value={2}>高校导师</Radio>
          <Radio value={3}>企业管理员</Radio>
        </Radio.Group>
      </Form.Item>
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
        <Button
          loading={loading}
          size="large"
          type="primary"
          htmlType="submit"
          block
        >
          登录
        </Button>
      </Form.Item>
    </Form>
  );
};
export default Detail;
