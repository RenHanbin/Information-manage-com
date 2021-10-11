import React, { memo, useEffect } from 'react';

import { Menu } from 'antd';
import { v1 as uuid } from 'uuid';
import Link from 'next/link';
import SubMenu from 'antd/lib/menu/SubMenu';

import useRoleMenu from 'layouts/hooks';
import { MenuItem, MenuItemGroup } from 'layouts/Menu';

interface Props {
  role: number | null;
}

const AntdRouterMenu: React.FC<Props> = memo(({ role }) => {
  const [menu, { setMenuFromRole }] = useRoleMenu();

  useEffect(() => {
    setMenuFromRole(role);
  }, [role]);

  return (
    <Menu theme="dark" mode="inline">
      {menu.map(menuDataItem => {
        if (menuDataItem instanceof MenuItem) {
          return (
            <Menu.Item key={uuid()} icon={menuDataItem.icon}>
              <Link href={menuDataItem.url}>
                <a>{menuDataItem.name}</a>
              </Link>
            </Menu.Item>
          );
        } else if (menuDataItem instanceof MenuItemGroup) {
          return (
            <SubMenu
              key={uuid()}
              title={menuDataItem.title}
              icon={menuDataItem.icon}
            >
              {menuDataItem.children.map(menuSubItem => {
                return (
                  <Menu.Item key={uuid()}>
                    <Link href={menuSubItem.url}>
                      <a>{menuSubItem.name}</a>
                    </Link>
                  </Menu.Item>
                );
              })}
            </SubMenu>
          );
        } else {
          return null;
        }
      })}
    </Menu>
  );
});

export default AntdRouterMenu;
