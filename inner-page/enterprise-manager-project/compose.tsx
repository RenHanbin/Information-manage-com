import { useState, useEffect } from 'react';
import Mock from 'mockjs';

import Show from './show';
import Config from './config';

// TODO 从后端获取数据

const Compose = () => {
  const [projectDataSource, setProjectDataSource] = useState<PT.Project[]>();
  useEffect(() => {
    const { dataSource }: { dataSource: PT.Project[] } = Mock.mock({
      'dataSource|10': [
        {
          'key|+1': 1,
          'id|+1': 1,
          'name|+1': [
            '退役锂电材料短程循环与过程污染控制技术与评价方法研究',
            '电动汽车全生命周期分析与环境评价',
            '停车相关管理系统及平台',
            '大型复杂结构施工监控关键技术研究',
          ],
          needStudent: '@integer(5,100)',
          'major|+1': ['金融', '软件', '大数据', '英语'],
          group: '佛山佛塑科技集团股份有限公司',
          'state|+1': ['指标分配', '机构确认'],
        },
      ],
    });
    setProjectDataSource(dataSource);
  }, []);

  return (
    <>
      <Config />
      {projectDataSource ? (
        <Show projectDataSource={projectDataSource}></Show>
      ) : (
        <div>数据获取失败</div>
      )}
    </>
  );
};

export default Compose;
