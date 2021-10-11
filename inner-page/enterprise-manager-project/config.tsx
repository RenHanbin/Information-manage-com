import {
  Button,
  Input,
  Modal,
  Select,
  Space,
  Popover,
  Checkbox,
  Form,
  DatePicker,
  Radio,
} from 'antd';
import { CopyOutlined, UnorderedListOutlined } from '@ant-design/icons';
import { useBoolean } from 'ahooks';

const { Search, TextArea } = Input;
const { Option } = Select;
const Config = () => {
  const [isShow, { setTrue, setFalse }] = useBoolean(false);
  const tailLayout = {
    wrapperCol: { offset: 1 },
  };
  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginBottom: '16px',
        }}
      >
        <Button
          onClick={setTrue}
          type="primary"
          style={{ marginRight: 10 }}
          icon={<CopyOutlined />}
        >
          新增
        </Button>
        <Space>
          <Search placeholder="搜索" style={{ width: 200 }} />
          <Popover
            placement="bottomRight"
            content={
              <Checkbox.Group
                defaultValue={[
                  'id',
                  'name',
                  'needStudent',
                  'major',
                  'group',
                  'state',
                  'operation',
                ]}
              >
                <Space direction="vertical">
                  <Checkbox value="id">序号</Checkbox>
                  <Checkbox value="name">项目名称</Checkbox>
                  <Checkbox value="needStudent">需求学生(个)</Checkbox>
                  <Checkbox value="major">学科专业</Checkbox>
                  <Checkbox value="group">发布组织</Checkbox>
                  <Checkbox value="state">项目状态</Checkbox>
                  <Checkbox value="operation">操作</Checkbox>
                </Space>
              </Checkbox.Group>
            }
            trigger="click"
          >
            <Button icon={<UnorderedListOutlined />} />
          </Popover>
        </Space>
      </div>
      <Modal
        visible={isShow}
        title="项目新增"
        onOk={setTrue}
        onCancel={setFalse}
        footer={
          <Space>
            <Button type="primary">暂存</Button>
            <Button type="primary">保存并发布</Button>
            <Button>返回</Button>
          </Space>
        }
        width={'60vw'}
        style={{ top: 15 }}
      >
        <Form layout="horizontal" title="项目信息">
          <Form.Item label="项目名称">
            <Select>
              <Option value="退役锂电材料短程循环与过程污染控制技术与评价方法研究">
                退役锂电材料短程循环与过程污染控制技术与评价方法研究
              </Option>
            </Select>
          </Form.Item>
          <Space style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Form.Item label="项目所属" style={{ width: '300px' }}>
              <Select>
                <Option value="广东邦普循环科技有限公司">
                  广东邦普循环科技有限公司
                </Option>
              </Select>
            </Form.Item>
            <Form.Item label="项目年份" style={{ width: '300px' }}>
              <Input></Input>
            </Form.Item>
          </Space>

          <Space style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Form.Item label="开始时间" style={{ width: '300px' }}>
              <DatePicker disabledDate={() => true} open={false} />
            </Form.Item>
            <Form.Item label="结束时间" style={{ width: '300px' }}>
              <DatePicker disabledDate={() => true} open={false} />
            </Form.Item>
          </Space>
          <Space style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Form.Item
              label="硕士生"
              {...tailLayout}
              style={{ width: '300px' }}
            >
              <Input placeholder="硕士生个数" value="1" />
            </Form.Item>
            <Form.Item
              label="博士生"
              {...tailLayout}
              style={{ width: '300px' }}
            >
              <Input placeholder="博士生个数" value="1" />
            </Form.Item>
          </Space>
          <Form.Item label="需求专业">
            <Input></Input>
          </Form.Item>
          <Space style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Form.Item label="项目投资" style={{ width: '300px' }}>
              <Input placeholder="项目投资" addonAfter={'万元'} />
            </Form.Item>
            <Form.Item label="是否公开" style={{ width: '300px' }}>
              <Radio.Group>
                <Radio value="public">是</Radio>
                <Radio value="private">否</Radio>
              </Radio.Group>
            </Form.Item>
          </Space>
          <Form.Item label="项目简介">
            <TextArea style={{ resize: 'none' }} placeholder="项目简介" />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default Config;
