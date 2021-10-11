/**
 * 具体的项目信息弹窗
 */
import { Key } from 'react';
import { Button, Table, Space, Modal } from 'antd';
import { useBoolean } from 'ahooks';
import Detail from './detail';
import { ColumnsType } from 'antd/es/table';
import dayjs, { Dayjs } from 'dayjs';

interface ShowProps {
  achievementDataSource: PT.Achievement[];
}
const Show: React.FC<ShowProps> = props => {
  const [isShow, { setTrue, setFalse }] = useBoolean(false);
  const { achievementDataSource } = props;

  const DEFAULT_COLUMNS: ColumnsType<PT.AchievementShow> = [
    {
      title: '序号',
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
      title: '名称',
      dataIndex: 'projectName',
      key: 'projectName',
    },
    {
      title: '科研成果类型',
      dataIndex: 'achievementType',
      key: 'achievementType',
    },
    {
      title: '提交时间',
      dataIndex: 'date',
      key: 'date',
    },
    {
      title: '操作',
      dataIndex: 'operation',
      key: 'operation',
      render: () => (
        <Space size="middle">
          <Button type="primary" onClick={setTrue}>
            查看
          </Button>
        </Space>
      ),
    },
  ];

  // 把后端传过来的带有时间戳的数据转化成具体的年和月
  const formatData = (dataSource: PT.Achievement[]): PT.AchievementShow[] => {
    const formatedData: PT.AchievementShow[] = dataSource.map(item => {
      const d: Dayjs = dayjs(item.date);
      return {
        ...item,
        date: d.format('YYYY/MM/DD'),
      };
    });

    return formatedData;
  };

  const rowSelection = {
    onchange: (selectedRowKeys: Key[]) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`);
    },
  };
  return (
    <>
      <Table
        dataSource={formatData(achievementDataSource)}
        columns={DEFAULT_COLUMNS}
        size="middle"
        rowSelection={{ type: 'checkbox', ...rowSelection }}
        style={{ marginTop: 20 }}
      ></Table>
      <Modal
        title="科研成果详情"
        visible={isShow}
        onCancel={setFalse}
        style={{ top: 20 }}
        width={'60vw'}
        footer={
          <Button key="back" onClick={setFalse}>
            返回
          </Button>
        }
      >
        <Detail />
      </Modal>
    </>
  );
};

export default Show;
