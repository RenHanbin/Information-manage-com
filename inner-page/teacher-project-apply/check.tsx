/**
 * 具体的项目信息弹窗
 */
import {
  Form,
  Input,
  Select,
  DatePicker,
  Radio,
  Card,
  Space,
  Button,
  Table,
  Modal,
  Row,
  Col,
} from 'antd';
import dayjs from 'dayjs';
import { PlusOutlined } from '@ant-design/icons';
import Mock from 'mockjs';
import { useBoolean } from 'ahooks';
import { Key } from 'react';

const { Column } = Table;
const { Search } = Input;
const options = [
  { value: '计算机' },
  { value: '化学' },
  { value: '数学' },
  { value: '生物制药' },
];
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
const Check = () => {
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
              value="退役锂电材料短程循环与过程污染控制技术与评价方法研究"
            />
          </Form.Item>
          <Row justify="space-between" gutter={[{ lg: 40, md: 16 }, 0]}>
            <Col flex={1}>
              <Form.Item label="项目年份">
                <Input addonAfter={'年'}></Input>
              </Form.Item>
            </Col>
            <Col flex={1}></Col>
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
      <Card title="学生管理">
        <Button onClick={setTrue} icon={<PlusOutlined />}>
          新增
        </Button>
        <Table dataSource={selectedStudentData} size="middle">
          <Column title="序号" dataIndex="id" key="id" />
          <Column title="学生姓名" dataIndex="name" key="name" />
          <Column title="所属高校" dataIndex="schoolName" key="schoolName" />
          <Column title="学位" dataIndex="eduBackground" key="eduBackground" />
          <Column
            title="证书"
            dataIndex="certificate"
            key="certificate"
            responsive={['lg']}
          />
          <Column
            title="成果"
            dataIndex="achievement"
            key="achievement"
            responsive={['lg']}
          />
          <Column
            title="专业"
            dataIndex="major"
            key="major"
            responsive={['lg']}
          />
          <Column
            title="操作"
            dataIndex="state"
            key="state"
            render={() => <a style={{ color: '#ff3333' }}>删除</a>}
          />
        </Table>
      </Card>

      <Modal
        title="新增学生"
        visible={isShow}
        onCancel={setFalse}
        width={'70vw'}
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
        <Search placeholder="输入学生名进行搜索" />
        <Table
          dataSource={studentData}
          size="middle"
          rowSelection={{ type: 'checkbox', ...rowSelection }}
        >
          <Column title="序号" dataIndex="id" key="id" />
          <Column title="学生姓名" dataIndex="name" key="name" />
          <Column title="所属高校" dataIndex="schoolName" key="schoolName" />
          <Column
            title="学位"
            dataIndex="eduBackground"
            key="eduBackground"
            responsive={['md']}
          />
          <Column
            title="证书"
            dataIndex="certificate"
            key="certificate"
            responsive={['md']}
          />
          <Column
            title="成果"
            dataIndex="achievement"
            key="achievement"
            responsive={['lg']}
          />
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
                <a style={{ color: '#52c41a' }}>添加</a>
              </Space>
            )}
          />
        </Table>
      </Modal>
    </>
  );
};

export default Check;
