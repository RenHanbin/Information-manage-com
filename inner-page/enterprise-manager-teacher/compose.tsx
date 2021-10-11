import { useState } from 'react';

import Mock from 'mockjs';

import Show from 'inner-page/enterprise-manager-teacher/show';

const { dataSource }: { dataSource: PT.EnterpriseTeacher[] } = Mock.mock({
  'dataSource|10': [
    {
      'key|+1': 1,
      'id|+1': 1,
      'name|+1': '@cname()',
      'enterpriseName|+1': [
        '广东邦普循环科技有限公司',
        '广东艾科智泊科技股份有限公司',
        '佛山市顺德区高新技术企业协会	',
        '广东施泰宝医疗科技有限公司',
      ],
      'major|+1': ['应用统计', '计算机'],
      'certifications|+1': ['专业八级', '无'],
      'tel|+1': ['13652652136', '无'],
    },
  ],
});
const Compose = () => {
  const [enterpriseTeacherDataSource] = useState<PT.EnterpriseTeacher[]>(
    dataSource
  );
  return (
    <>
      <Show enterpriseTeacherDataSource={enterpriseTeacherDataSource} />
    </>
  );
};

export default Compose;
