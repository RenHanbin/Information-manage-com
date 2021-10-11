import { Button, Modal, Row, Col, Form, Input } from 'antd';
import React, { useState } from 'react';
import { FolderAddOutlined } from '@ant-design/icons';
interface IncreaseProps {
  setInformationVisible: (visable: boolean) => void;
  informationVisible: boolean;
}
const Detail = ({
  setInformationVisible,
  informationVisible,
}: IncreaseProps) => {
  const [userModalVisable, setUserModalVisable] = useState(false);
  const [confirmVisible, setConfirmVisible] = useState(false);

  return (
    <>
      <Modal
        footer={null}
        mask={false}
        title="个人信息维护"
        centered
        visible={informationVisible}
        onOk={() => setInformationVisible(false)}
        onCancel={() => setInformationVisible(false)}
        width={'60vw'}
      >
        <Form title="用户信息" labelCol={{ span: 3 }}>
          <Form.Item label="用户姓名">
            <Input placeholder="请输入姓名" disabled={true} />
          </Form.Item>
        </Form>
        <Form labelCol={{ span: 6 }}>
          <Row>
            <Col span={12}>
              <Form.Item label="联系电话">
                <Input placeholder="请输入手机号码" disabled={true} />
              </Form.Item>
            </Col>

            <Col span={12}>
              <Form.Item label="所属高校" labelCol={{ span: 5 }}>
                <Input placeholder="请输入高校名称" disabled={true} />
              </Form.Item>
            </Col>
          </Row>
        </Form>
        <Form labelCol={{ span: 3 }}>
          <Form.Item label="学科专业">
            <Input placeholder="请填写学科专业" disabled={true} />
          </Form.Item>
          <Form.Item label="联系地址">
            <Input placeholder="请填写您的住址" disabled={true} />
          </Form.Item>
          <Form.Item label="资格证书">
            <Input placeholder="请填写获得的证书" disabled={true} />
          </Form.Item>
          <Form.Item label="个人简介">
            <Input.TextArea placeholder="请填写个人简介" disabled={true} />
          </Form.Item>
          <Form.Item label="成果简介">
            <Input.TextArea
              placeholder="请填写获得的项目成果"
              disabled={true}
            />
          </Form.Item>
          <Form.Item label="作证材料">
            <Row>
              <Col span={20}>
                <Input
                  placeholder="可把相关的作证材料（证书或成果）照片或扫描文件压缩为rar，zip文件后上传"
                  disabled={true}
                />
              </Col>
              <Col span={3}>
                <Button
                  icon={<FolderAddOutlined />}
                  type={'primary'}
                  size="middle"
                  disabled={true}
                >
                  选择
                </Button>
              </Col>
            </Row>
          </Form.Item>
        </Form>
        <Row justify="end">
          <Col>
            <Button type="primary" onClick={() => setUserModalVisable(true)}>
              通过
            </Button>
          </Col>
          <Col>
            <Button
              type="primary"
              onClick={() => setUserModalVisable(true)}
              danger
            >
              不通过
            </Button>
          </Col>
        </Row>
      </Modal>
      <Modal
        mask={false}
        title="审核意见"
        centered
        visible={userModalVisable}
        onOk={() => {
          setUserModalVisable(false);
          setConfirmVisible(true);
        }}
        onCancel={() => setUserModalVisable(false)}
        width={'60vw'}
        okText="确定"
        cancelText="取消"
      >
        <Form title="填写审核意见">
          <Form.Item>
            <Input.TextArea />
          </Form.Item>
        </Form>
      </Modal>
      <Modal
        closable={false}
        footer={null}
        mask={false}
        title="信息"
        centered
        visible={confirmVisible}
        width={'60vw'}
      >
        <div>审批成功</div>
        <Row justify="end">
          <Col>
            <Button
              type="primary"
              onClick={() => {
                setConfirmVisible(false);
                setInformationVisible(false);
              }}
            >
              确定
            </Button>
          </Col>
        </Row>
      </Modal>
    </>
  );
};
export default Detail;
