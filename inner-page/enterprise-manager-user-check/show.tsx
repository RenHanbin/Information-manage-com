import React, { useState } from 'react';
import { Table, Button } from 'antd';
import { ColumnsType } from 'antd/es/table';
import Detail from 'inner-page/enterprise-manager-user-check/detail';
interface ShowProps {
  dataSource: PT.User[];
}
const Show: React.FC<ShowProps> = ({ dataSource }) => {
  const [informationVisible, setInformationVisible] = useState(false);

  const columns: ColumnsType<PT.User> = [
    {
      title: '序号',
      dataIndex: 'index',
      key: 'index',
    },
    {
      title: '账号',
      dataIndex: 'ID',
      key: 'ID',
    },
    {
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '身份',
      dataIndex: 'role',
      key: 'role',
    },
    {
      title: '机构',
      dataIndex: 'organ',
      key: 'organ',
    },
    {
      title: '导师',
      dataIndex: 'teacher',
      key: 'teacher',
    },
    {
      title: '创建时间',
      dataIndex: 'time',
      key: 'time',
    },
    {
      title: '操作',
      dataIndex: 'operation',
      key: 'operation',
      render: () => (
        <Button type="primary" onClick={() => setInformationVisible(true)}>
          详细
        </Button>
      ),
    },
  ];
  const rowSelection = {
    onChange: (selectedRowKeys: React.Key[], selectedRows: PT.User[]) => {
      console.log(
        `selectedRowKeys: ${selectedRowKeys}`,
        'selectedRows: ',
        selectedRows
      );
    },
    getCheckboxProps: (record: PT.User) => ({
      disabled: record.name === 'Disabled User', // Column configuration not to be checked
      name: record.name,
    }),
  };
  return (
    <>
      <Table
        size="middle"
        columns={columns}
        dataSource={dataSource}
        rowSelection={{
          type: 'checkbox',
          ...rowSelection,
        }}
      />

      <Detail
        setInformationVisible={setInformationVisible}
        informationVisible={informationVisible}
      />
    </>
  );
};

export default Show;
