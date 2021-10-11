import React, { useState } from 'react';

import { Button, Table } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { useBoolean } from 'ahooks';

import Detail from './detail';
import dayjs from 'dayjs';
interface ShowProps {
  awarddata: PT.Award[];
}
const Show = ({ awarddata }: ShowProps) => {
  // columns 当前显示表格的行属性
  const [columns] = useState<ColumnsType<PT.Award>>([
    {
      title: '序号',
      key: 'key',
      dataIndex: 'key',
    },
    {
      title: '学生姓名',
      key: 'name',
      dataIndex: 'name',
    },
    {
      title: '所属高校',
      key: 'schoolName',
      dataIndex: 'schoolName',
    },
    {
      title: '奖励类型',
      key: 'type',
      dataIndex: 'type',
    },
    {
      title: '申请时间',
      key: 'date',
      dataIndex: 'date',
      render: (_text, _render) => (
        <>{dayjs(_render.date).format('YYYY-MM-DD')}</>
      ),
    },

    {
      title: '申请状态',
      key: 'state',
      dataIndex: 'state',
    },
    {
      title: '操作',
      key: 'action',
      render: (_text, _render) => (
        <Button
          type={'primary'}
          onClick={() => {
            setTrue();
            setSelectData(_render);
          }}
        >
          审批
        </Button>
      ),
    },
  ]);
  const [isShowDetailModal, { setFalse, setTrue }] = useBoolean(false);
  const [selectData, setSelectData] = useState<PT.Award>(awarddata[0]); // 代表点击查看后显示的当前列

  return (
    <>
      {/*数据显示信息*/}
      <Table
        size="middle"
        columns={columns}
        dataSource={awarddata}
        pagination={{ pageSize: 15 }}
      />
      {/*查看周志模板*/}
      <Detail
        selectData={selectData}
        setFalse={setFalse}
        showModel={isShowDetailModal}
      />
    </>
  );
};

export default Show;
