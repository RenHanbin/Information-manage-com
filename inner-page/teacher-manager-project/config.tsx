import { Button, Input, Modal, Select, Space, Upload } from 'antd';
import { CopyOutlined, InboxOutlined } from '@ant-design/icons';
import { useBoolean } from 'ahooks';

const { Search } = Input;
const { Dragger } = Upload;
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
          导入
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
            <Option value="未审核">未审核</Option>
            <Option value="已通过">已通过</Option>
            <Option value="未通过">未通过</Option>
          </Select>
          <Search placeholder="搜索" style={{ width: 200 }} />
        </Space>
      </div>
      <Modal
        title="导入"
        visible={isShow}
        onCancel={setFalse}
        okText="确认"
        cancelText="取消"
      >
        <Button>下载导入模板</Button>
        <Dragger>
          <p className="ant-upload-drag-icon">
            <InboxOutlined />
          </p>
          <p className="ant-upload-text">拖拽文件至此</p>
          <p className="ant-upload-hint">
            支持单次或批量上传。 严禁上传公司资料或其他公司文件
          </p>
        </Dragger>
        ,
      </Modal>
    </>
  );
};

export default Config;
