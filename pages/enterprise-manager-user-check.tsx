import MyLayout from 'layouts/index';
import Compose from 'inner-page/enterprise-manager-user-check/compose';

/**
 * 角色：企业管理员
 * 信息审批管理->用户账号审批
 */
const UserCheck = () => {
  return (
    <>
      <Compose />
    </>
  );
};
UserCheck.Layout = MyLayout;

export default UserCheck;
