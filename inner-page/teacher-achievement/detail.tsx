/**
 * 具体的项目信息弹窗
 */
import {
  Col,
  Row,
  Table,
  Divider,
  Form,
  Input,
  DatePicker,
  Button,
  Radio,
} from 'antd';
import dayjs from 'dayjs';
import Mock from 'mockjs';
import React from 'react';

interface AuditData {
  organization: string;
  status: string;
  advice: string;
}
const { Column } = Table;

const { auditData }: { auditData: AuditData[] } = Mock.mock({
  'auditData|2': [
    {
      'key|+1': 1,
      'organization|+1': ['示范点', '基地'],
      'status|+1': ['审核中', '通过'],
      'advice|+1': [''],
    },
  ],
});

const Detail = () => {
  const layout1 = {
    labelCol: { span: 3 },
    wrapperCol: { span: 24 },
  };
  const layout2 = {
    labelCol: { span: 9 },
    wrapperCol: { span: 24 },
  };
  return (
    <div>
      <Form labelAlign="right" layout="horizontal" colon>
        <Form.Item {...layout1} label="论文题目">
          <Input value="探析嵌入式Web服务器的设计与实现" />
        </Form.Item>
        <Row justify={'space-between'}>
          <Col span={8}>
            <Form.Item {...layout2} label="论文类型">
              <Input value="文章" />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item {...layout2} label="第一作者">
              <Input value="林星星" />
            </Form.Item>
          </Col>
        </Row>
        <Form.Item {...layout1} label="发表刊物/论文集">
          <Input value="发表刊物/论文集" disabled />
        </Form.Item>

        <Row justify={'space-between'}>
          <Col span={8}>
            <Form.Item {...layout2} label="刊物类型">
              <Input value="SSCI" />
            </Form.Item>
          </Col>

          <Col span={8}>
            <Form.Item {...layout2} label="发表/出版时间">
              <DatePicker defaultValue={dayjs()} />
            </Form.Item>
          </Col>
        </Row>
        <Row justify={'space-between'}>
          <Col span={8}>
            <Form.Item {...layout2} label="期号">
              <Input value="58-41" />
            </Form.Item>
          </Col>

          <Col span={8}>
            <Form.Item {...layout2} label="署名单位">
              <Input value="中山大学" />
            </Form.Item>
          </Col>
        </Row>
        <Row justify={'space-between'}>
          <Col span={8}>
            <Form.Item {...layout2} label="版面">
              <Input value="专刊" />
            </Form.Item>
          </Col>

          <Col span={8}>
            <Form.Item {...layout2} label="学科门类">
              <Input value="科技类" />
            </Form.Item>
          </Col>
        </Row>
        <Row justify={'space-between'}>
          <Col span={8}>
            <Form.Item {...layout2} label="ISSN号">
              <Input value="ISSN1000-0097" />
            </Form.Item>
          </Col>

          <Col span={8}>
            <Form.Item {...layout2} label="C N 号">
              <Input value="CN-11-1340/G2" />
            </Form.Item>
          </Col>
        </Row>
        <Form.Item labelCol={{ span: 3 }} label="支撑材料">
          <Row gutter={[15, 0]}>
            <Col span={21}>
              <Input value="附件1.zip;附件2.jpg" disabled />
            </Col>
            <Col span={3}>
              <Button type="primary">下载附件</Button>
            </Col>
          </Row>
        </Form.Item>
        <Row justify={'space-between'}>
          <Col span={8}>
            <Form.Item {...layout2} label="所属项目">
              <Input value="(测试)新药创新与成果转化平台" />
            </Form.Item>
          </Col>

          <Col span={8}>
            <Form.Item {...layout2} label="是否公开">
              <Radio.Group value="public">
                <Radio value="public">是</Radio>
                <Radio value="private">否</Radio>
              </Radio.Group>
            </Form.Item>
          </Col>
        </Row>
      </Form>
      <h3 style={{ margin: 15 }}>审核列表</h3>
      <Divider style={{ margin: 15 }} />
      <Table dataSource={auditData} size="middle" bordered>
        <Column title="机构" dataIndex="organization" key="organization" />
        <Column title="审核状态" dataIndex="status" key="status" />
        <Column title="审核意见" dataIndex="advice" key="advice" />
      </Table>
    </div>
  );
};

export default Detail;
