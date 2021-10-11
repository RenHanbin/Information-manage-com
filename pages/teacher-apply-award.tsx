import MyLayout from 'layouts/index';
import Compose from 'inner-page/teacher-apply-award/compose';
/**
 * 角色：高校导师
 * 教务信息管理->奖励申请管理
 */
const ApplyAward = () => {
  return (
    <>
      <Compose />
    </>
  );
};
ApplyAward.Layout = MyLayout;

export default ApplyAward;
