/**
 * 角色：高校管理员
 * 教务信息管理->周志管理
 */
import dynamic from 'next/dynamic';

import MyLayout from 'layouts/index';
import PageLoading from 'components/page-loading';
const Compose = dynamic(() => import('inner-page/weekly/compose'), {
  ssr: false,
  loading: PageLoading,
});

export default function Weekly() {
  return <Compose />;
}
Weekly.Layout = MyLayout;
