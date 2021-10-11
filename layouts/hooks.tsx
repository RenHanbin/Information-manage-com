/**
 * 根据用户不同权限生成对应导航
 * @returns {role:number; menuData:(MenuItem | MenuItemGroup)[];} 用户权限role，对应导航menuData
 */
import { useState } from 'react';

import { ApiOutlined, HomeOutlined } from '@ant-design/icons';

import { MenuItem, MenuItemGroup } from 'layouts/Menu';
import {
  TEACHER_MANAGER,
  TEACHER,
  ENTERPRISE_MANAGER,
} from 'constants/user-role';

// FIXME: commit
const useRoleMenu = (role?: number | null) => {
  // FIXME: 这里可以学习一下, 策略模式改善switch case. 其次备注可以看下jsdoc, 写好了,vscode都有各种提示
  const menuFromRole = (role?: number | null) => {
    switch (role) {
      case TEACHER_MANAGER: {
        // 高校管理员
        return [
          new MenuItem('/home', '首页', <HomeOutlined />),
          new MenuItemGroup(
            '项目对接管理',
            [
              new MenuItem('/teacher-manager-project', '项目信息管理'),
              new MenuItem('/teacher-manager-apply-check', '指标审核管理'),
            ],
            <ApiOutlined />
          ),
          new MenuItemGroup(
            '教务信息管理',
            [
              new MenuItem('/teacher-manager-attendance', '考勤管理'),
              new MenuItem('/teacher-manager-weekly', '周志管理'),
            ],
            <ApiOutlined />
          ),
          new MenuItemGroup(
            '信息审批管理',
            [new MenuItem('/teacher-manager-user-check', '用户账号审核')],
            <ApiOutlined />
          ),
        ];
      }
      case TEACHER: {
        // 高校导师
        return [
          new MenuItem('/home', '首页', <HomeOutlined />),
          new MenuItemGroup(
            '项目对接管理',
            [
              new MenuItem('/teacher-project-apply', '项目导师对接'),
              new MenuItem('/teacher-project-member-manage', '项目成员管理'),
            ],
            <ApiOutlined />
          ),
          new MenuItemGroup(
            '教务信息管理',
            [
              new MenuItem('/teacher-weekly', '周志管理'),
              new MenuItem('/teacher-achievement', '科研成果管理'),
              new MenuItem('/teacher-apply-award', '奖励申请管理'),
              new MenuItem('/teacher-abantion', '终止培养管理'),
            ],
            <ApiOutlined />
          ),
          new MenuItemGroup(
            '信息审批管理',
            [new MenuItem('/teacher-user-check', '用户账号审核')],
            <ApiOutlined />
          ),
        ];
      }
      case ENTERPRISE_MANAGER: {
        // 企业管理员
        return [
          new MenuItem('/home', '首页', <HomeOutlined />),
          new MenuItemGroup(
            '项目对接管理',
            [new MenuItem('/enterprise-manager-project', '项目信息管理')],
            <ApiOutlined />
          ),
          new MenuItemGroup(
            '教务信息管理',
            [
              new MenuItem('/enterprise-manager-attendance', '考勤管理'),
              new MenuItem('/enterprise-manager-weekly', '周志管理'),
              new MenuItem('/enterprise-manager-achievement', '科研成果管理'),
              new MenuItem('/enterprise-manager-award', '奖励申请管理'),
              new MenuItem('/enterprise-manager-abantion', '终止培养管理'),
            ],
            <ApiOutlined />
          ),
          new MenuItemGroup(
            '信息审批管理',
            [new MenuItem('/enterprise-manager-user-check', '用户账号审批')],
            <ApiOutlined />
          ),
          new MenuItemGroup(
            '信息库管理',
            [
              new MenuItem('/enterprise-manager-teacher', '示范点导师管理'),
              new MenuItem('/enterprise-manager-project-library', '项目库管理'),
              new MenuItem('/enterprise-manager-postgraduate', '研究生管理'),
            ],

            <ApiOutlined />
          ),
        ];
      }
      default:
        return [new MenuItem('/', '首页')];
    }
  };
  const [menu, setMenu] = useState<(MenuItem | MenuItemGroup)[]>(
    menuFromRole(role)
  );

  const setMenuFromRole = (currentRole?: number | null) => {
    setMenu(menuFromRole(currentRole));
  };

  return [menu, { setMenuFromRole }] as const;
};

export default useRoleMenu;
