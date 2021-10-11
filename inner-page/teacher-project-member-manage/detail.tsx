/**
 * 具体的项目信息弹窗
 */
import { Key } from 'react';
import {
  Form,
  Input,
  Select,
  DatePicker,
  Radio,
  Card,
  Table,
  Space,
  Button,
  Modal,
} from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { useBoolean } from 'ahooks';
import Mock from 'mockjs';

const { Column } = Table;

const {
  selectedStudentData,
}: { selectedStudentData: PT.Student[] } = Mock.mock({
  'selectedStudentData|2': [
    {
      'key|+1': 1,
      'id|+1': 1,
      'name|+1': ['刘刚', '王子凡'],
      'schoolName|+1': ['哈尔滨理工大学'],
      'certificate|+1': ['-', '-'],
      'achievement|+1': ['-', '-'],
      'eduBackground|+1': ['硕士', '博士'],
      'major|+1': ['电气工程', '材料工程'],
      'projectName|+1': ['电动汽车全生命周期分析与环境评价', '金属材料'],
      state: '未审批',
    },
  ],
});

const { studentData }: { studentData: PT.Student[] } = Mock.mock({
  'studentData|2': [
    {
      'key|+1': 1,
      'id|+1': 1,
      'name|+1': ['赵达', '李牧'],
      'schoolName|+1': ['哈尔滨理工大学'],
      'certificate|+1': ['-', '-'],
      'achievement|+1': ['-', '-'],
      'eduBackground|+1': ['硕士', '博士'],
      'major|+1': ['电气工程', '材料工程'],
      'projectName|+1': ['电动汽车全生命周期分析与环境评价', '金属材料'],
      state: '未审批',
    },
  ],
});
const Detail = () => {
  const [isShow, { setTrue, setFalse }] = useBoolean(false);
  const rowSelection = {
    onchange: (selectedRowKeys: Key[]) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`);
    },
  };
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
      <Card title="学生管理">
        <Button onClick={setTrue} icon={<PlusOutlined />}>
          新增
        </Button>
        <Table dataSource={selectedStudentData} size="middle">
          <Column title="序号" dataIndex="id" key="id" />
          <Column title="学生姓名" dataIndex="name" key="name" />
          <Column title="所属高校" dataIndex="schoolName" key="schoolName" />
          <Column title="学位" dataIndex="eduBackground" key="eduBackground" />
          <Column title="证书" dataIndex="certificate" key="certificate" />
          <Column title="成果" dataIndex="achievement" key="achievement" />
          <Column title="专业" dataIndex="major" key="major" />
          <Column
            title="操作"
            dataIndex="operation"
            key="operation"
            render={() => (
              <Space size="middle">
                <Button type="primary" danger>
                  删除
                </Button>
              </Space>
            )}
          />
        </Table>
      </Card>
      <Modal
        title="新增学生"
        visible={isShow}
        onCancel={setFalse}
        width={'60vw'}
        footer={
          <>
            <Button type="primary" onClick={setFalse}>
              确认
            </Button>
            <Button key="back" onClick={setFalse}>
              返回
            </Button>
          </>
        }
      >
        <Table
          dataSource={studentData}
          size="middle"
          rowSelection={{ type: 'checkbox', ...rowSelection }}
        >
          <Column title="" dataIndex="index" key="index" />
          <Column title="序号" dataIndex="id" key="id" />
          <Column title="学生姓名" dataIndex="name" key="name" />
          <Column title="所属高校" dataIndex="schoolName" key="schoolName" />
          <Column title="学位" dataIndex="eduBackground" key="eduBackground" />
          <Column title="证书" dataIndex="certificate" key="certificate" />
          <Column title="成果" dataIndex="achievement" key="achievement" />
          <Column
            title="已参加的项目"
            dataIndex="projectName"
            key="projectName"
          />
          <Column title="专业" dataIndex="major" key="major" />
          <Column
            title="操作"
            dataIndex="state"
            key="state"
            render={() => (
              <Space size="middle">
                <Button
                  type="primary"
                  style={{ background: '#52c41a', border: '1px solid #52c41a' }}
                >
                  选择
                </Button>
              </Space>
            )}
          />
        </Table>
      </Modal>
    </>
  );
};

export default Detail;
