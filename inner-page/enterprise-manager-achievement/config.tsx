import { Button, Input, Row, Select, Space } from 'antd';
import { PlusOutlined, MinusOutlined } from '@ant-design/icons';

const { Search } = Input;
const { Option } = Select;

const Config = () => {
  return (
    <>
      <Row justify={'space-between'}>
        <Space>
          <Button
            type="primary"
            style={{ marginRight: 10 }}
            icon={<PlusOutlined />}
          >
            增加
          </Button>
          <Button
            type="primary"
            style={{ marginRight: 10 }}
            icon={<MinusOutlined />}
            danger
          >
            删除
          </Button>
        </Space>

        <Space>
          项目状态：
          <Select
            defaultValue="全部"
            style={{ width: 120 }}
            onChange={() => {}}
          >
            <Option value="全部">全部</Option>
            <Option value="审稿">审稿</Option>
            <Option value="审批中">审批中</Option>
            <Option value="未通过">未通过</Option>
          </Select>
          <Search placeholder="搜索" style={{ width: 200 }} />
        </Space>
      </Row>
    </>
  );
};

export default Config;
