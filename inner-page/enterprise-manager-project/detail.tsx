/**
 * 具体的项目信息弹窗
 */
import { Form, Input, DatePicker, Radio, Card, Row, Col, Select } from 'antd';
import dayjs from 'dayjs';

const options = [
  { value: '计算机' },
  { value: '化学' },
  { value: '数学' },
  { value: '生物制药' },
];
const Detail = () => {
  const tailLayout = {
    wrapperCol: { offset: 1 },
  };
  return (
    <>
      <Card title="项目信息">
        <Form layout="horizontal" title="项目信息">
          <Form.Item label="项目名称">
            <Input
              placeholder="请输入项目名称"
              value="退役锂电材料短程循环与过程污染控制技术与评价方法研究"
            />
          </Form.Item>
          <Row justify="space-between" gutter={[{ lg: 40, md: 16 }, 0]}>
            <Col flex={1}>
              <Form.Item label="项目所属">
                <Input />
              </Form.Item>
            </Col>
            <Col flex={1}>
              <Form.Item label="项目年份">
                <Input addonAfter={'年'}></Input>
              </Form.Item>
            </Col>
          </Row>
          <Row justify="space-between" gutter={[{ lg: 40, md: 16 }, 0]}>
            <Col flex={1}>
              <Form.Item label="开始时间">
                <DatePicker disabledDate={() => true} open={false} />
              </Form.Item>
            </Col>
            <Col flex={1}>
              <Form.Item label="结束时间">
                <DatePicker
                  disabledDate={() => true}
                  open={false}
                  defaultValue={dayjs()}
                />
              </Form.Item>
            </Col>
          </Row>
          <Row justify="space-between" gutter={[{ lg: 32, md: 16 }, 0]}>
            <Col flex={1}>
              <Form.Item label="硕士生" {...tailLayout}>
                <Input placeholder="硕士生个数" value="1" addonAfter={'个'} />
              </Form.Item>
            </Col>
            <Col flex={1}>
              <Form.Item label="博士生" {...tailLayout}>
                <Input placeholder="博士生个数" value="1" addonAfter={'个'} />
              </Form.Item>
            </Col>
          </Row>
          <Form.Item label="需求专业">
            <Select mode="multiple" options={options} />
          </Form.Item>
          <Row justify="space-between" gutter={[{ lg: 40, md: 16 }, 0]}>
            <Col flex={1}>
              <Form.Item label="项目投资">
                <Input placeholder="项目投资" addonAfter={'万元'} />
              </Form.Item>
            </Col>
            <Col flex={1.8}>
              <Form.Item label="是否公开">
                <Radio.Group>
                  <Radio value="public">是</Radio>
                  <Radio value="private">否</Radio>
                </Radio.Group>
              </Form.Item>
            </Col>
          </Row>
          <Form.Item label="项目简介">
            <Input.TextArea
              style={{ resize: 'none' }}
              placeholder="项目简介"
              value={''}
            />
          </Form.Item>
        </Form>
      </Card>
    </>
  );
};

export default Detail;
