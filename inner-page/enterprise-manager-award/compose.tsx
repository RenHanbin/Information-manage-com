import React, { useEffect, useState } from 'react';

import Mock from 'mockjs';

import Show from 'inner-page/enterprise-manager-award/show';
import Config from 'inner-page/enterprise-manager-award/config';
const Compose = () => {
  const [awardData, setData] = useState<PT.Award[]>([]); // data 页面当前显示数据

  useEffect(() => {
    const { awardData } = Mock.mock({
      'awardData|10': [
        {
          'key|+1': 1,
          'index|+1': 0,
          'schoolName|+1': ['中山大学', '广东工业大学'],
          'name|+1': '@cname()', // 生成随机中文名字
          'date|+1': '@datetime()',
          'state|+1': ['已审批', '未审批'],
          'type|+1': ['专利型奖励', '科研型奖励'],
        },
      ],
    });

    // 初始化数据属性
    setData(awardData);
  }, []);
  return (
    <>
      {/* <BreadcrumbList /> */}
      <Config />
      <Show awarddata={awardData} />
    </>
  );
};

export default Compose;
