import { Button, Input, Modal, Select, Space } from 'antd';
import { CopyOutlined } from '@ant-design/icons';
import { useBoolean } from 'ahooks';

const { Search } = Input;
const { Option } = Select;

const Config = () => {
  const [isShow, { setTrue, setFalse }] = useBoolean(false);
  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Button
          onClick={setTrue}
          type="primary"
          style={{ marginRight: 10 }}
          icon={<CopyOutlined />}
        >
          导出
        </Button>
        <Space>
          项目年份：
          <Select
            defaultValue="全部"
            style={{ width: 120 }}
            onChange={() => {}}
          >
            <Option value="全部">全部</Option>
            <Option value="2019">2019</Option>
            <Option value="2018">2018</Option>
            <Option value="2020">2020</Option>
          </Select>
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
      </div>
      <Modal
        title="选择需要导出的类型"
        visible={isShow}
        onCancel={setFalse}
        okText="确认"
        cancelText="取消"
      >
        <Space>
          选择导出的类型：
          <Select defaultValue="研究生联合培养项目高校导师对接表">
            <Option value="type1">研究生联合培养项目高校导师对接表</Option>
          </Select>
        </Space>
      </Modal>
    </>
  );
};

export default Config;
