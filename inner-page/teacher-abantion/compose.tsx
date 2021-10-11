import React, { useEffect, useState } from 'react';

import Mock from 'mockjs';

import Show from 'inner-page/teacher-abantion/show';
import Config from './config';
const Compose = () => {
  const [data, setData] = useState<PT.TeacherAbantion[]>([]); // data 页面当前显示数据

  useEffect(() => {
    const { TeacherAbantionData } = Mock.mock({
      'TeacherAbantionData|10': [
        {
          'key|+1': 1,
          'index|+1': 0,
          'schoolName|+1': ['中山大学', '广东工业大学'],
          'name|+1': '@cname()', // 生成随机中文名字
          'teacherName|+1': '@cname()',
          'date|+1': '@natural(1457814740000,1567814740000)', // 生成随机时间戳
          'state|+1': ['已审批', '未审批'],
          'because|+1': ['家庭原因', '个人原因'],
        },
      ],
    });

    // 初始化数据属性
    setData(TeacherAbantionData);
  }, []);
  return (
    <>
      {/* <BreadcrumbList /> */}
      <Config />
      <Show data={data} />
    </>
  );
};

export default Compose;
