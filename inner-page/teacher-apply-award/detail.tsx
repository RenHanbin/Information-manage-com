import React from 'react';
import { FolderAddOutlined } from '@ant-design/icons';
import { Button, Divider, Form, Input, Modal, Radio, Col, Row } from 'antd';
import TextArea from 'antd/lib/input/TextArea';

interface IncreaseProps {
  showModel: boolean;
  setFalse: () => void;
  selectData: PT.Award;
}

const Increase = ({ showModel, setFalse, selectData }: IncreaseProps) => {
  let data = selectData;
  // data 做了类似类组件的生命周期的处理所以这里判断一下data是否为空
  if (!data) {
    return <></>;
  }
  return (
    <Modal
      centered={true}
      key={data.key}
      title="奖励申请管理"
      visible={showModel}
      onCancel={setFalse}
      footer={
        <div>
          <Button type="primary">提交</Button>
          <Button onClick={setFalse}>取消</Button>
        </div>
      }
      width={'60vw'}
    >
      {/*详情页面的表单结构*/}
      <Form
        initialValues={selectData}
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 25 }}
        layout="horizontal"
        name="奖励申请管理"
      >
        <Row>
          <Col span={12}>
            <Form.Item name="name" label="学生姓名">
              <Input disabled />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="手机号码" labelCol={{ span: 5 }}>
              <Input disabled />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={12}>
            <Form.Item label="所属学校">
              <Input disabled />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="所属导师" labelCol={{ span: 5 }}>
              <Input disabled />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={12}>
            <Form.Item label="身份证号">
              <Input disabled />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="电子邮箱" labelCol={{ span: 5 }}>
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
      </Form>
      <Form labelCol={{ span: 6 }}>
        <Row>
          <Col span={12}>
            <Form.Item label="奖励选项">
              <Input disabled />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="奖励金额" labelCol={{ span: 5 }}>
              <Input />
            </Form.Item>
          </Col>
        </Row>
      </Form>

      <Form labelCol={{ span: 3 }}>
        <Form.Item label="作证材料">
          <Row>
            <Col span={15}>
              <Input
                placeholder="请您上传一个填写好的申请表，文件格式为doc.或zip."
                disabled
              />
            </Col>
            <Col span={6}>
              <Button icon={<FolderAddOutlined />} type={'primary'}>
                选择
              </Button>
              <Button type="primary" danger={true}>
                下载
              </Button>
            </Col>
          </Row>
        </Form.Item>
        <Form.Item label="备注说明">
          <TextArea disabled />
        </Form.Item>

        <Divider orientation="left">填写评价</Divider>
        <Form.Item name="level" wrapperCol={{ offset: 1 }}>
          <Radio.Group>
            <Radio value={1}>同意</Radio>
            <Radio value={2}>不同意</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="评语" name="textAdvice">
          <TextArea rows={1} cols={8} />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default Increase;
