import MyLayout from 'layouts/index';
import Compose from 'inner-page/teacher-project-member-manage/compose';

/**
 * 角色：高校导师
 * 项目对接管理->项目成员管理
 */
const ProjectMemberManage = () => {
  return <Compose />;
};
ProjectMemberManage.Layout = MyLayout;

export default ProjectMemberManage;
