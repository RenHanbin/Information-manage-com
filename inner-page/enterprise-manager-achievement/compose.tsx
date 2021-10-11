import { useState, useEffect } from 'react';
import Mock from 'mockjs';

import Show from './show';
import Config from './config';
// TODO 获取后端数据

const Compose = () => {
  const [achievementDataSource, setAchievementDataSource] = useState<
    PT.Achievement[]
  >();
  // TODO 删除虚假数据
  useEffect(() => {
    const { dataSource }: { dataSource: PT.Achievement[] } = Mock.mock({
      'dataSource|10': [
        {
          'key|+1': 1,
          'id|+1': 1,
          name: '@cname()',
          'school|+1': ['哈尔滨理工大学', '黑龙江大学', '哈尔滨师范大学'],
          'projectName|+1': [
            '退役锂电材料短程循环与过程污染控制技术与评价方法研究',
            '电动汽车全生命周期分析与环境评价',
            '停车相关管理系统及平台',
            '大型复杂结构施工监控关键技术研究',
          ],
          'achievementType|+1': ['论文'],
          date: '@integer(949334400000,1580486400000)',
        },
      ],
    });
    setAchievementDataSource(dataSource);
  }, []);

  return (
    <>
      <Config />
      {achievementDataSource ? (
        <Show achievementDataSource={achievementDataSource} />
      ) : (
        <h1>数据获取失败</h1>
      )}
    </>
  );
};

export default Compose;
