import { Table, Input } from 'antd';

const { Column } = Table;
const { Search } = Input;

interface ShowProps {
  studentDataSource: PT.Student[];
}
const Show: React.FC<ShowProps> = props => {
  const { studentDataSource } = props;

  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'row-reverse' }}>
        <Search placeholder="搜索" style={{ width: '200px' }} />
      </div>
      <Table dataSource={studentDataSource} size="middle">
        <Column title="序号" dataIndex="id" key="id" />
        <Column title="学生名称" dataIndex="name" key="name" />
        <Column
          title="所属高校"
          dataIndex="enterpriseName"
          key="enterpriseName"
        />
        <Column title="学科专业" dataIndex="major" key="major" />
        <Column title="导师" dataIndex="certifications" key="certifications" />
        <Column title="联系电话" dataIndex="tel" key="tel" />
      </Table>
    </>
  );
};

export default Show;
