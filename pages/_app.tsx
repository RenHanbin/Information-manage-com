import React from 'react';

import { ConfigProvider } from 'antd';
import locale from 'antd/lib/locale/zh_CN';
import 'dayjs/locale/zh-cn';

import 'styles/antd.css';
import 'styles/layout.css';
import 'styles/page_loading_style.css';

const MyApp = (props: any) => {
  const { Component, pageProps } = props;
  const Layout = Component.Layout ? Component.Layout : React.Fragment;

  return (
    <ConfigProvider locale={locale}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ConfigProvider>
  );
};

export default MyApp;
