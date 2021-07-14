import {
  Button,
  Input,
  Modal,
  Select,
  Space,
  Form,
  DatePicker,
  Radio,
  Row,
  Col,
} from 'antd';
import { CopyOutlined } from '@ant-design/icons';
import { useBoolean } from 'ahooks';

const { Search, TextArea } = Input;
const { Option } = Select;
const Config = () => {
  const [isShow, { setTrue, setFalse }] = useBoolean(false);
  const tailLayout = {
    wrapperCol: { offset: 1 },
  };
  const options = [
    { value: '计算机' },
    { value: '化学' },
    { value: '数学' },
    { value: '生物制药' },
  ];
  return (
    <>
      <Row
        justify="space-between"
        align="top"
        gutter={[0, { xs: 8, sm: 12, md: 16, lg: 16 }]}
      >
        <Col lg={5} sm={11} xs={24}>
          <Button onClick={setTrue} type="primary" icon={<CopyOutlined />}>
            新增 {/*TODO: 点击新增创建新项目 */}
          </Button>
        </Col>
        <Col lg={5} sm={11} xs={24}>
          {/* TODO: 模糊搜索 */}
          <Search placeholder="输入项目名称进行搜索" />
        </Col>
      </Row>
      <Modal
        visible={isShow}
        title="项目新增"
        onOk={setTrue}
        onCancel={setFalse}
        footer={
          <Space>
            <Button type="primary">保存并发布</Button>
            <Button>返回</Button>
          </Space>
        }
        width={'70vw'}
        style={{ top: 15 }}
      >
        {/* FIXME: 表单验证不管用 */}
        <Form layout="horizontal" title="项目信息">
          <Form.Item label="项目名称">
            <Input />
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
                <DatePicker disabledDate={() => true} />
              </Form.Item>
            </Col>
            <Col flex={1}>
              <Form.Item label="结束时间">
                <DatePicker disabledDate={() => true} />
              </Form.Item>
            </Col>
          </Row>
          <Row justify="space-between" gutter={[{ lg: 32, md: 16 }, 0]}>
            <Col flex={1}>
              <Form.Item label="硕士数" {...tailLayout}>
                <Input placeholder="硕士生个数" addonAfter={'个'} />
              </Form.Item>
            </Col>
            <Col flex={1}>
              <Form.Item label="博士数" {...tailLayout}>
                <Input placeholder="博士生个数" addonAfter={'个'} />
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
            <TextArea style={{ resize: 'none' }} placeholder="项目简介" />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default Config;
