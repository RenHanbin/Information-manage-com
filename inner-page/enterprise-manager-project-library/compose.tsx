import { useState } from 'react';

import Mock from 'mockjs';

import Show from 'inner-page/enterprise-manager-project-library/show';

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
      startTime: '@integer(946656000,1618933233)',
      'major|+1': ['应用统计', '计算机'],
      'invest|10-100': 1,
      'enterprise|+1': [
        '广东邦普循环科技有限公司',
        '广东艾科智泊科技股份有限公司',
        '佛山市顺德区高新技术企业协会	',
        '广东施泰宝医疗科技有限公司',
      ],
      'schoolTeacher|+1': '@cname()',
      'enterpriseTeacher|+1': '@cname()',
    },
  ],
});
const Compose = () => {
  const [projectDataSource] = useState<PT.Project[]>(dataSource);
  return (
    <>
      <Show projectDataSource={projectDataSource} />
    </>
  );
};

export default Compose;
