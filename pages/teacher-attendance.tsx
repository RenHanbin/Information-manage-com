import MyLayout from 'layouts/index';
import Compose from 'inner-page/teacher-attendance/compose';

/**
 * 教务信息管理->考勤管理
 * 角色：高校导师
 */
const Attendance = () => <Compose />;
Attendance.Layout = MyLayout;

export default Attendance;
