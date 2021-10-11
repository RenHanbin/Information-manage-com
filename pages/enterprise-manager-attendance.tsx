import MyLayout from 'layouts/index';
import Compose from 'inner-page/enterprise-manager-attendance/compose';
/**
 * 角色：企业管理员
 * 教务信息管理->考勤管理
 */
const Attendance = () => <Compose />;
Attendance.Layout = MyLayout;

export default Attendance;
