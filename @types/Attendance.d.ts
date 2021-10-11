/**
 * 研究生培养命名空间
 */
namespace PT {
  /**
   * 研究生考勤类型
   */
  interface Attendance {
    id: string;
    name: string;
    projectName: string;
    date: number;
    status: string;
  }
  /**
   * 研究生考勤类型用于展示类型
   */
  interface AttendanceShow extends Attendance {
    formatedYearAndMonth: string; // 'YYYY/MM'
    dayInMonth: number; // day
  }
}
