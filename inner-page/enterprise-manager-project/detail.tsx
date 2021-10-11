/**
 * 具体的项目信息弹窗
 */
import { Form, Input, DatePicker, Radio, Card, Table, Space } from 'antd';
import Mock from 'mockjs';
import { ColumnsType } from 'antd/es/table';
import dayjs from 'dayjs';

const DEFAULT_COLUMNS: ColumnsType<PT.SchoolTeacher> = [
  {
    title: '高校导师',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '学校',
    dataIndex: 'school',
    key: 'school',
  },
  {
    title: '简介',
    dataIndex: 'description',
    key: 'description',
  },
];

const { teacherData }: { teacherData: PT.SchoolTeacher[] } = Mock.mock({
  'teacherData|2': [
    {
      'key|+1': 1,
      'id|+1': 1,
      'name|+1': '@cname()',
      'school|+1': ['哈尔滨理工大学', '黑龙江大学'],
      introduce: '',
    },
  ],
});

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
              value="退役锂电材料短程循环与过程污染控制技术与评价方法研究"
            />
          </Form.Item>
          <Space style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Form.Item label="项目所属" style={{ width: '300px' }}>
              <Input value="广东邦普循环科技有限公司"></Input>
            </Form.Item>
            <Form.Item label="项目年份" style={{ width: '300px' }}>
              <Input value="2018"></Input>
            </Form.Item>
          </Space>

          <Space style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Form.Item label="开始时间" style={{ width: '300px' }}>
              <DatePicker
                disabledDate={() => true}
                open={false}
                defaultValue={dayjs()}
              />
            </Form.Item>
            <Form.Item label="结束时间" style={{ width: '300px' }}>
              <DatePicker
                disabledDate={() => true}
                open={false}
                defaultValue={dayjs()}
              />
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
            <Input value={'计算机'}></Input>
          </Form.Item>
          <Space style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Form.Item label="项目投资" style={{ width: '300px' }}>
              <Input placeholder="项目投资" value="20" addonAfter={'万元'} />
            </Form.Item>
            <Form.Item label="是否公开" style={{ width: '300px' }}>
              <Radio.Group value="public">
                <Radio value="public">是</Radio>
                <Radio value="private">否</Radio>
              </Radio.Group>
            </Form.Item>
          </Space>
          <Form.Item label="项目简介">
            <Input.TextArea
              style={{ resize: 'none' }}
              placeholder="项目简介"
              value={''}
            />
          </Form.Item>
        </Form>
      </Card>

      <Table
        columns={DEFAULT_COLUMNS}
        dataSource={teacherData}
        size="middle"
      ></Table>
    </>
  );
};

export default Detail;
