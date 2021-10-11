import React from 'react';

import { Button, Divider, Form, Input, Modal, Radio, Row, Col } from 'antd';
import TextArea from 'antd/lib/input/TextArea';

interface IncreaseProps {
  showModel: boolean;
  setFalse: () => void;
  selectData: PT.Abantion;
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
      title="终止培养申请"
      visible={showModel}
      onCancel={setFalse}
      width={'60vw'}
      footer={
        <div>
          <Button type="primary">提交</Button>
          <Button onClick={setFalse}>取消</Button>
        </div>
      }
    >
      {/*详情页面的表单结构*/}
      <Form
        initialValues={selectData}
        labelCol={{ span: 6 }}
        layout="horizontal"
        name="终止培养申请"
      >
        <Row justify="space-between">
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
        <Row justify="space-between">
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
      </Form>
      <Form labelCol={{ span: 3 }}>
        <Form.Item label="所属示范点">
          <Input disabled />
        </Form.Item>
        <Form.Item label="所属项目">
          <Input disabled />
        </Form.Item>
        <Form.Item label="申请原因">
          <Input disabled />
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
          <TextArea rows={2} />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default Increase;
