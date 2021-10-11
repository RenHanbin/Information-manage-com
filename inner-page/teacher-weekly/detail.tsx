import React from 'react';

import {
  Button,
  Divider,
  Form,
  Input,
  Modal,
  Radio,
  Space,
  DatePicker,
} from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import dayjs from 'dayjs';

interface IncreaseProps {
  showModel: boolean;
  setFalse: () => void;
  selectData: PT.Weekly;
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
      title="查看周志"
      visible={showModel}
      onCancel={setFalse}
      footer={
        <Button type="primary" htmlType="submit">
          提交
        </Button>
      }
      width={'60vw'}
    >
      {/*详情页面的表单结构*/}
      <Form
        initialValues={selectData}
        labelCol={{ span: 2 }}
        wrapperCol={{ span: 25 }}
        layout="horizontal"
      >
        <Form.Item name="name" label="姓名">
          <Input disabled />
        </Form.Item>
        <Form.Item name="projectName" label="项目名称">
          <Input disabled />
        </Form.Item>
        <Form.Item name="dates" label="项目年份">
          <DatePicker defaultValue={dayjs(data.date)} disabled picker="month" />
        </Form.Item>
        <Form.Item label="第一周">
          <Space>
            <Input value="社会实践报告.docx" />
            <Button type="primary" danger={true}>
              下载
            </Button>
          </Space>
        </Form.Item>
        <Form.Item label="第二周">
          <Space>
            <Input value="社会实践报告.docx" />
            <Button type="primary" danger={true}>
              下载
            </Button>
          </Space>
        </Form.Item>
        <Form.Item label="第三周">
          <Space>
            <Input value="社会实践报告.docx" />
            <Button type="primary" danger={true}>
              下载
            </Button>
          </Space>
        </Form.Item>
        <Form.Item label="第四周">
          <Space>
            <Input value="社会实践报告.docx" />
            <Button type="primary" danger={true}>
              下载
            </Button>
          </Space>
        </Form.Item>
        <Divider orientation="left">填写评论</Divider>
        <Form.Item name="level">
          <Radio.Group>
            <Radio value={1}>优秀</Radio>
            <Radio value={2}>合格</Radio>
            <Radio value={3}>不合格</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="周志评测" name="textAdvice">
          <TextArea rows={1} cols={8} />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default Increase;
