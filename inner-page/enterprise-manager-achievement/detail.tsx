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
  return (
    <div>
      <Form labelAlign="right" layout="horizontal" colon>
        <Row>
          <Col span={24}>
            <Form.Item label="论文题目">
              <Input value="探析嵌入式Web服务器的设计与实现"></Input>
            </Form.Item>
          </Col>

          <Col span={10}>
            <Form.Item label="论文类型">
              <Input value="文章"></Input>
            </Form.Item>
          </Col>

          <Col offset={4} span={10}>
            <Form.Item label="第一作者">
              <Input value="林星星"></Input>
            </Form.Item>
          </Col>

          <Col span={24}>
            <Form.Item label="发表刊物/论文集">
              <Input value="发表刊物/论文集" disabled></Input>
            </Form.Item>
          </Col>

          <Col span={10}>
            <Form.Item label="刊物类型">
              <Input value="SSCI"></Input>
            </Form.Item>
          </Col>

          <Col offset={4} span={10}>
            <Form.Item label="发表/出版时间">
              <DatePicker defaultValue={dayjs()}></DatePicker>
            </Form.Item>
          </Col>

          <Col span={10}>
            <Form.Item label="期号" labelCol={{ offset: 2 }}>
              <Input value="58-41"></Input>
            </Form.Item>
          </Col>

          <Col offset={4} span={10}>
            <Form.Item label="署名单位">
              <Input value="中山大学"></Input>
            </Form.Item>
          </Col>

          <Col span={10}>
            <Form.Item label="版面" labelCol={{ offset: 2 }}>
              <Input value="专刊"></Input>
            </Form.Item>
          </Col>

          <Col offset={4} span={10}>
            <Form.Item label="学科门类">
              <Input value="科技类"></Input>
            </Form.Item>
          </Col>

          <Col span={10}>
            <Form.Item label="ISSN号" labelCol={{ offset: 1 }}>
              <Input value="ISSN1000-0097"></Input>
            </Form.Item>
          </Col>

          <Col offset={4} span={10}>
            <Form.Item label="C N 号" labelCol={{ offset: 1 }}>
              <Input value="CN-11-1340/G2"></Input>
            </Form.Item>
          </Col>

          <Col span={20}>
            <Form.Item label="支撑材料">
              <Input value="附件1.zip;附件2.jpg" disabled></Input>
            </Form.Item>
          </Col>

          <Col span={2}>
            <Button type="primary">下载附件</Button>
          </Col>

          <Col span={10}>
            <Form.Item label="所属项目">
              <Input value="(测试)新药创新与成果转化平台"></Input>
            </Form.Item>
          </Col>

          <Col offset={4} span={10}>
            <Form.Item label="是否公开">
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
