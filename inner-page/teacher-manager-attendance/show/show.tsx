import React, { useState } from 'react';

import { Table, Button } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { useBoolean } from 'ahooks';
import dayjs, { Dayjs } from 'dayjs';

import Detail from './detail';

interface ShowProps {
  dataSource: PT.Attendance[];
}

const Show: React.FC<ShowProps> = ({ dataSource }) => {
  const [
    modalVisible,
    { setTrue: setModalVisible, setFalse: setModalHidden },
  ] = useBoolean(false);
  const [
    currentAttendanceShow,
    setCurrentAttendanceShow,
  ] = useState<PT.AttendanceShow>();

  // 把后端传过来的带有时间戳的数据转化成具体的年和月
  const formatData = (dataSource: PT.Attendance[]): PT.AttendanceShow[] => {
    const formatedData: PT.AttendanceShow[] = dataSource.map(item => {
      const d: Dayjs = dayjs(item.date);

      return {
        ...item,
        formatedYearAndMonth: d.format('YYYY/MM'),
        dayInMonth: d.daysInMonth(),
      };
    });

    return formatedData;
  };

  const DEFAULT_COLUMNS: ColumnsType<PT.AttendanceShow> = [
    {
      title: '序号',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: '学生名称',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '项目名称',
      dataIndex: 'projectName',
      key: 'projectName',
    },
    {
      title: '日期',
      dataIndex: 'formatedYearAndMonth',
      key: 'date',
    },
    {
      title: '考勤状况',
      dataIndex: 'status',
      key: 'status',
    },
    {
      title: '操作',
      dataIndex: 'control',
      key: 'control',
      render: (_: unknown, record) => (
        <Button
          onClick={() => {
            setCurrentAttendanceShow(record);
            setModalVisible();
          }}
        >
          操作
        </Button>
      ),
    },
  ];

  return (
    <>
      {/*FIXME 简单修改样式*/}
      <Table
        rowSelection={{
          type: 'checkbox',
        }}
        columns={DEFAULT_COLUMNS}
        size="middle"
        dataSource={formatData(dataSource)}
      />
      {currentAttendanceShow ? (
        <Detail
          modalVisible={modalVisible}
          setModalHidden={setModalHidden}
          currentAttendanceShow={currentAttendanceShow}
        />
      ) : null}
    </>
  );
};

export default Show;
