import { Form, Input, Button, Row, Col, Select, Radio } from 'antd';

const { Option } = Select;

const Detail = () => {
  const formItemLayout = {
    labelCol: { span: 3 },
    wrapperCol: { span: 21 },
  };
  return (
    <>
      <Form title="注册" {...formItemLayout}>
        <Form.Item label="选择类型" labelAlign="left">
          <Radio.Group defaultValue={1} buttonStyle="solid">
            <Radio.Button value={1}>高校管理员</Radio.Button>
            <Radio.Button value={2}>高校导师</Radio.Button>
            <Radio.Button value={3}>企业管理员</Radio.Button>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="示范点" labelAlign="left">
          <Row gutter={24}>
            <Col span={6}>
              <Select>
                <Option value="企业">企业</Option>
                <Option value="研究院">研究院</Option>
              </Select>
            </Col>
            <Col span={18}>
              <Select showArrow={false}>
                <Option value="三桥惠（佛山）新材料有限公司">
                  三桥惠（佛山）新材料有限公司
                </Option>
                <Option value="中国科学院广州能源研究所佛山三水能源环境技术创新与育成中心">
                  中国科学院广州能源研究所佛山三水能源环境技术创新与育成中心
                </Option>
                <Option value="佛山世寰智能科技有限公司">
                  佛山世寰智能科技有限公司
                </Option>
              </Select>
            </Col>
          </Row>
        </Form.Item>
        <Form.Item label="绑定邮箱" labelAlign="left">
          <Input placeholder="请输入绑定邮箱" />
        </Form.Item>
        <Form.Item label="用户姓名" labelAlign="left">
          <Input placeholder="请输入用户姓名" />
        </Form.Item>

        <Form.Item label="用户账号" labelAlign="left">
          <Input placeholder="请输入用户账号" />
        </Form.Item>
        <Form.Item label="设置密码" labelAlign="left">
          <Input placeholder="请输入密码" />
        </Form.Item>
        <Form.Item label="确认密码" labelAlign="left">
          <Input placeholder="请确认密码" />
        </Form.Item>
        <Form.Item wrapperCol={{ span: 12 }}>
          <Button size="large" type="primary" block>
            注册
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};
export default Detail;
