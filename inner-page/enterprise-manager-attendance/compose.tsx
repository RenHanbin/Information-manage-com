import { useState } from 'react';

import Mock from 'mockjs';

import Increase from 'inner-page/enterprise-manager-attendance/increase';
import Show from 'inner-page/enterprise-manager-attendance/show/show';

const { defaultDataSource }: { defaultDataSource: PT.Attendance[] } = Mock.mock(
  {
    'defaultDataSource|5-100': [
      {
        'key|+1': 1,
        'id|+1': 1,
        name: '@cname()',
        'projectName|+1': [
          '退役锂电材料短程循环与过程污染控制技术与评价方法研究',
          '电动汽车全生命周期分析与环境评价',
          '停车相关管理系统及平台',
          '大型复杂结构施工监控关键技术研究',
        ],
        date: '@integer(94665600000,161893323300)',
        status: '审批中',
      },
    ],
  }
);

const Attendance = () => {
  // 表格填充数据
  let [dataSource] = useState<PT.Attendance[]>(defaultDataSource);

  return (
    <>
      {/* <BreadcrumbList /> */}
      <Increase />
      <Show dataSource={dataSource} />
    </>
  );
};

export default Attendance;
