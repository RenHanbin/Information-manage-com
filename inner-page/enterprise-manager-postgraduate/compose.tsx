import { useState } from 'react';

import Mock from 'mockjs';

import Show from 'inner-page/enterprise-manager-postgraduate/show';

const { dataSource }: { dataSource: PT.Student[] } = Mock.mock({
  'dataSource|10': [
    {
      'key|+1': 1,
      'id|+1': 1,
      'name|+1': '@cname()',
      'schoolName|+1': ['中山大学', '华南理工大学', '哈尔滨理工大学	'],
      'major|+1': [['应用统计', '计算机'], ['学科数学']],
      'schoolTeacher|+1': '@cname()',
      'tel|+1': ['15226599293', '无'],
    },
  ],
});
const Compose = () => {
  const [studentDataSource] = useState<PT.Student[]>(dataSource);
  return (
    <>
      <Show studentDataSource={studentDataSource} />
    </>
  );
};

export default Compose;
