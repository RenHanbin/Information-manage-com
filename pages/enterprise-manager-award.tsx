import MyLayout from 'layouts/index';
import Compose from 'inner-page/enterprise-manager-award/compose';
/**
 * 角色：企业管理员
 * 教务信息管理->奖励申请管理
 */
const Award = () => {
  return (
    <>
      <Compose />
    </>
  );
};
Award.Layout = MyLayout;

export default Award;
