import MyLayout from 'layouts/index';
import Compose from 'inner-page/enterprise-manager-user-check/compose';

/**
 * 角色：企业管理员
 * 项目成员管理->学生信息管理
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
