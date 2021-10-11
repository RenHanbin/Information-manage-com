/**
 * 科研成果命名空间
 */
namespace PT {
  /**
   * 科研成果类型
   */
  interface Achievement {
    key: number;
    id: string;
    name: string;
    school: string;
    projectName: string;
    achievementType: string;
    date: number;
  }
  /**
   * 科研成果用于展示类型
   */
  interface AchievementShow {
    key: number;
    id: string;
    name: string;
    school: string;
    projectName: string;
    achievementType: string;
    date: string;
  }
}
