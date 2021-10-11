import MyLayout from 'layouts/index';
import Compose from 'inner-page/enterprise-manager-weekly/compose';
/**
 * 角色：企业管理员
 * 教务信息管理->周志管理
 */
const Weekly = () => {
  return (
    <>
      <Compose />
    </>
  );
};
Weekly.Layout = MyLayout;

export default Weekly;
