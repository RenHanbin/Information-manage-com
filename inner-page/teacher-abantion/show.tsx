import React, { useState } from 'react';

import { Button, Table, Space } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { useBoolean } from 'ahooks';

import Detail from './detail';

import dayjs from 'dayjs';

interface ShowProps {
  data: PT.TeacherAbantion[];
}
const Show = ({ data }: ShowProps) => {
  // columns 当前显示表格的行属性
  const [columns] = useState<ColumnsType<PT.TeacherAbantion>>([
    {
      title: '序号',
      key: 'key',
      dataIndex: 'key',
    },
    {
      title: '学生名称',
      key: 'name',
      dataIndex: 'name',
    },
    {
      title: '所在高校',
      key: 'schoolName',
      dataIndex: 'schoolName',
    },
    {
      title: '导师',
      key: 'teacherName',
      dataIndex: 'teacherName',
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
      title: '原因',
      key: 'because',
      dataIndex: 'because',
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
        <Space>
          <Button
            size="middle"
            type={'primary'}
            onClick={() => {
              setTrue();
              setSelectData(_render);
            }}
          >
            审批
          </Button>

          <Button
            size="middle"
            onClick={() => {
              setTrue();
              setSelectData(_render);
            }}
          >
            编辑
          </Button>
          <Button type="primary" danger={true} size="middle">
            删除
          </Button>
        </Space>
      ),
    },
  ]);
  const [isShowDetailModal, { setFalse, setTrue }] = useBoolean(false);
  const [selectData, setSelectData] = useState<PT.TeacherAbantion>(data[0]); // 代表点击查看后显示的当前列

  return (
    <>
      {/*数据显示信息*/}

      <Table
        columns={columns}
        dataSource={data}
        size="middle"
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
