import { Space, Menu } from 'antd';
import {
  PlusOutlined,
  UnorderedListOutlined,
  DownOutlined,
  SyncOutlined,
  UserOutlined,
} from '@ant-design/icons';
import Search from 'antd/lib/input/Search';
import React from 'react';
import { useBoolean } from 'ahooks';
import { Button, Form, Input, Modal, Dropdown, Col, Row } from 'antd';
import TextArea from 'antd/lib/input/TextArea';

const Config = () => {
  const [isShowAddModal, { setFalse, setTrue }] = useBoolean(false);
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
        justifyContent: 'space-between',
      }}
    >
      <Button
        type="primary"
        onClick={() => {
          setTrue();
        }}
      >
        <PlusOutlined />
        新增
      </Button>
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
      <Modal
        centered={true}
        title="终止培养申请"
        visible={isShowAddModal}
        onCancel={setFalse}
        footer={
          <div>
            <Button type="primary">保存</Button>
            <Button type="primary">暂存</Button>
            <Button onClick={setFalse}>取消</Button>
          </div>
        }
        width={'60vw'}
      >
        {/*详情页面的表单结构*/}
        <Form
          labelCol={{ span: 3 }}
          wrapperCol={{ span: 25 }}
          layout="horizontal"
          name="新增终止培养申请"
        >
          <Form.Item name="name" label="学生姓名">
            <Input />
          </Form.Item>
        </Form>
        <Form labelCol={{ span: 6 }}>
          <Row>
            <Col span={12}>
              <Form.Item label="手机号码">
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="所属学校" labelCol={{ span: 5 }}>
                <Input disabled />
              </Form.Item>
            </Col>
          </Row>
        </Form>
        <Form labelCol={{ span: 3 }}>
          <Form.Item label="所属示范点">
            <Input disabled />
          </Form.Item>
          <Form.Item label="所属项目">
            <Input disabled />
          </Form.Item>
          <Form.Item label="申请原因">
            <Input />
          </Form.Item>

          <Form.Item label="备注说明">
            <TextArea />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default Config;
