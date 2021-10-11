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
} from 'antd';
import Mock from 'mockjs';

const { Column, ColumnGroup } = Table;

const { teacherData }: { teacherData: PT.SchoolTeacher[] } = Mock.mock({
  'teacherData|2': [
    {
      'key|+1': 1,
      'id|+1': 1,
      'name|+1': ['郑威', '张永泉'],
      'schoolName|+1': ['哈尔滨理工大学'],
      'tel|+1': ['13945072055', '18846077959'],
      'applyDoctorNums|0-5': 1,
      'applyPostgraduateNums|0-5': 1,
      'checkDoctorNums|0-5': 1,
      'checkPostgraduateNums|0-5': 1,
      'FirstDoctorNums|0-5': 1,
      'FirstPostgraduateNums|0-5': 1,
      'secondDoctorNums|0-5': 1,
      'secondPostgraduateNums|0-5': 1,
      description: '',
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
      'tel|+1': ['13945072050', '13231888738'],
      'schoolName|+1': ['哈尔滨理工大学'],
      'schoolTeacher|+1': ['郑威', '张永泉'],
      'grade|+1': ['二年级', '一年级'],
      'eduBackground|+1': ['硕士', '博士'],
      'projectName|+1': ['电动汽车全生命周期分析与环境评价', '金属材料'],
      'enterpriseTeacher|+1': ['刘强', '张桑'],
      state: '未审批',
    },
  ],
});
const Detail = () => {
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
      <Card title="对接导师">
        <Table
          dataSource={teacherData}
          size="middle"
          rowSelection={{ type: 'checkbox', ...rowSelection }}
        >
          <Column title="选择" dataIndex="index" key="index" />
          <Column title="序号" dataIndex="id" key="id" />
          <Column title="导师名称" dataIndex="name" key="name" />
          <Column title="所属高校" dataIndex="schoolName" key="schoolName" />
          <Column title="联系电话" dataIndex="tel" key="tel" />
          <ColumnGroup title="高校导师申请对接数">
            <Column
              title="博士生"
              dataIndex="applyDoctorNums"
              key="applyDoctorNums"
            />
            <Column
              title="硕士生"
              dataIndex="applyPostgraduateNums"
              key="applyPostgraduateNums"
            />
          </ColumnGroup>
          <ColumnGroup title="企业确认对接数">
            <Column
              title="博士生"
              dataIndex="checkDoctorNums"
              key="checkDoctorNums"
            />
            <Column
              title="硕士生"
              dataIndex="checkPostgraduateNums"
              key="checkPostgraduateNums"
            />
          </ColumnGroup>
          <ColumnGroup title="第一次分配指标">
            <Column
              title="博士生"
              dataIndex="FirstDoctorNums"
              key="FirstDoctorNums"
            />
            <Column
              title="硕士生"
              dataIndex="FirstPostgraduateNums"
              key="FirstPostgraduateNums"
            />
          </ColumnGroup>
          <Column title="备注" dataIndex="age" key="age" />
          <ColumnGroup title="第二次分配指标">
            <Column
              title="博士生"
              dataIndex="secondDoctorNums"
              key="secondDoctorNums"
            />
            <Column
              title="硕士生"
              dataIndex="secondPostgraduateNums"
              key="secondPostgraduateNums"
            />
          </ColumnGroup>
          <Column title="备注" dataIndex="description" key="description" />
          <Column title="高校审批" dataIndex="state" key="state" />
        </Table>
      </Card>
      <Card title="学生管理">
        <Table
          dataSource={studentData}
          size="middle"
          rowSelection={{ type: 'checkbox', ...rowSelection }}
        >
          <Column title="" dataIndex="index" key="index" />
          <Column title="序号" dataIndex="id" key="id" />
          <Column title="学生姓名" dataIndex="name" key="name" />
          <Column title="联系电话" dataIndex="tel" key="tel" />
          <Column title="所属高校" dataIndex="schoolName" key="schoolName" />
          <Column
            title="高校导师"
            dataIndex="schoolTeacher"
            key="schoolTeacher"
          />
          <Column title="学届" dataIndex="grade" key="grade" />
          <Column title="学位" dataIndex="eduBackground" key="eduBackground" />
          <Column title="参与项目" dataIndex="projectName" key="projectName" />
          <Column
            title="企业导师"
            dataIndex="enterpriseTeacher"
            key="enterpriseTeacher"
          />
          <Column title="学生状态" dataIndex="state" key="state" />
        </Table>
      </Card>
    </>
  );
};

export default Detail;
