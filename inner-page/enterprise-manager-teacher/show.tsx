import { Table, Input } from 'antd';

const { Column } = Table;
const { Search } = Input;

interface ShowProps {
  enterpriseTeacherDataSource: PT.EnterpriseTeacher[];
}
const Show: React.FC<ShowProps> = props => {
  const { enterpriseTeacherDataSource } = props;

  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'row-reverse' }}>
        <Search placeholder="搜索" style={{ width: '200px' }} />
      </div>
      <Table dataSource={enterpriseTeacherDataSource} size="middle">
        <Column title="序号" dataIndex="id" key="id" />
        <Column title="导师名称" dataIndex="name" key="name" />
        <Column
          title="所属企业"
          dataIndex="enterpriseName"
          key="enterpriseName"
        />
        <Column title="技术领域" dataIndex="major" key="major" />
        <Column
          title="资质证书"
          dataIndex="certifications"
          key="certifications"
        />
        <Column title="联系电话" dataIndex="tel" key="tel" />
      </Table>
    </>
  );
};

export default Show;
