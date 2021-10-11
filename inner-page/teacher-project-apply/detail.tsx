/**
 * 具体的项目信息弹窗
 */
import { Form, Input, Select, DatePicker, Radio, Card, Space } from 'antd';

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
              disabled={true}
              defaultValue="退役锂电材料短程循环与过程污染控制技术与评价方法研究"
            />
          </Form.Item>
          <Space style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Form.Item label="项目所属" style={{ width: '300px' }}>
              <Select disabled={true} defaultValue="enterprise1">
                <Select.Option value="enterprise1">
                  广东邦普循环科技有限公司
                </Select.Option>
                <Select.Option value="enterprise2">
                  广东艾科智泊科技股份有限公司
                </Select.Option>
              </Select>
            </Form.Item>
            <Form.Item label="项目年份" style={{ width: '300px' }}>
              <Select disabled={true} defaultValue="2018">
                <Select.Option value="2018">2018</Select.Option>
                <Select.Option value="2019">2019</Select.Option>
              </Select>
            </Form.Item>
          </Space>

          <Space style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Form.Item label="开始时间" style={{ width: '300px' }}>
              <DatePicker disabled={true} />
            </Form.Item>
            <Form.Item label="结束时间" style={{ width: '300px' }}>
              <DatePicker disabled={true} />
            </Form.Item>
          </Space>
          <Space style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Form.Item
              label="硕士生"
              {...tailLayout}
              style={{ width: '300px' }}
            >
              <Input
                placeholder="硕士生个数"
                disabled={true}
                defaultValue="1"
              />
            </Form.Item>
            <Form.Item
              label="博士生"
              {...tailLayout}
              style={{ width: '300px' }}
            >
              <Input
                placeholder="博士生个数"
                disabled={true}
                defaultValue="1"
              />
            </Form.Item>
          </Space>
          <Form.Item label="需求专业">
            <Select disabled={true} defaultValue="computer">
              <Select.Option value="physical">物理</Select.Option>
              <Select.Option value="computer">计算机</Select.Option>
            </Select>
          </Form.Item>
          <Space style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Form.Item label="项目投资" style={{ width: '300px' }}>
              <Input placeholder="项目投资" disabled={true} defaultValue="20" />
            </Form.Item>
            <Form.Item label="是否公开" style={{ width: '300px' }}>
              <Radio.Group disabled={true} defaultValue="public">
                <Radio value="public">是</Radio>
                <Radio value="private">否</Radio>
              </Radio.Group>
            </Form.Item>
          </Space>
          <Form.Item label="项目简介">
            <Input.TextArea placeholder="项目简介" disabled={true} />
          </Form.Item>
        </Form>
      </Card>
    </>
  );
};

export default Detail;
