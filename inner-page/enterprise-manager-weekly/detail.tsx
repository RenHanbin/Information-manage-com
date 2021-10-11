import React, { useState } from 'react';
import { FolderAddOutlined } from '@ant-design/icons';
import { ColumnsType } from 'antd/es/table';
import {
  Button,
  Divider,
  Form,
  Input,
  Modal,
  Table,
  Space,
  DatePicker,
  Row,
  Col,
} from 'antd';

interface scoreEvaluate {
  key: number;
  name: String;
  score: String;
}
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
  const leveldata = [
    {
      key: 1,
      name: '超级管理员',
      score: '合格',
    },
  ];
  const [column] = useState<ColumnsType<scoreEvaluate>>([
    {
      title: '#',
      dataIndex: 'key',
      key: 'key',
    },
    {
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '成绩',
      dataIndex: 'score',
      key: 'score',
    },
    {
      title: '评价',
      key: 'evaluate',
      dataIndex: 'evaluate',
    },
  ]);
  return (
    <Modal
      centered={true}
      key={data.key}
      title="查看周志"
      visible={showModel}
      onCancel={setFalse}
      footer={
        <Button type="primary" htmlType="submit">
          取消
        </Button>
      }
      width={'60vw'}
    >
      {/*详情页面的表单结构*/}
      <Form
        initialValues={selectData}
        labelCol={{ span: 3 }}
        wrapperCol={{ span: 25 }}
        layout="horizontal"
      >
        <Form.Item name="name" label="姓名">
          <Input disabled />
        </Form.Item>
        <Form.Item name="projectName" label="项目名称">
          <Input
            value="退役锂电材料短程循环与过程污染控制技术与评价方法研究"
            disabled
          />
        </Form.Item>
      </Form>
      <Form labelCol={{ span: 6 }}>
        <Row>
          <Col span={6}>
            <Form.Item name="dates" label="年份" labelCol={{ span: 12 }}>
              <DatePicker defaultValue={undefined} disabled picker="year" />
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item name="dates" label="月份" labelCol={{ span: 6 }}>
              <DatePicker defaultValue={undefined} disabled picker="month" />
            </Form.Item>
          </Col>
        </Row>
      </Form>
      <Form labelCol={{ span: 3 }}>
        <Form.Item label="第一周">
          <Space>
            <Input value="社会实践报告.docx" />
            <Button
              icon={<FolderAddOutlined />}
              type={'primary'}
              size="small"
              disabled={true}
            >
              选择
            </Button>
            <Button type="primary" danger={true}>
              下载
            </Button>
          </Space>
        </Form.Item>
        <Form.Item label="第二周">
          <Space>
            <Input value="社会实践报告.docx" />
            <Button
              icon={<FolderAddOutlined />}
              type={'primary'}
              size="small"
              disabled={true}
            >
              选择
            </Button>
            <Button type="primary" danger={true}>
              下载
            </Button>
          </Space>
        </Form.Item>
        <Form.Item label="第三周">
          <Space>
            <Input value="社会实践报告.docx" />
            <Button
              icon={<FolderAddOutlined />}
              type={'primary'}
              size="small"
              disabled={true}
            >
              选择
            </Button>
            <Button type="primary" danger={true}>
              下载
            </Button>
          </Space>
        </Form.Item>
        <Form.Item label="第四周">
          <Space>
            <Input value="社会实践报告.docx" />
            <Button
              icon={<FolderAddOutlined />}
              type={'primary'}
              size="small"
              disabled={true}
            >
              选择
            </Button>
            <Button type="primary" danger={true}>
              下载
            </Button>
          </Space>
        </Form.Item>
      </Form>
      <Divider orientation="left">成绩评价</Divider>
      <Table dataSource={leveldata} columns={column} />
    </Modal>
  );
};

export default Increase;
