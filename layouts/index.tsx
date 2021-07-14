/**
 * layout-home
 */
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import { Layout, Row, Col } from 'antd';

import PageLoading from 'components/page-loading';
import AntdRouterMenu from 'layouts/Antd-router-menu';
import UserHeader from 'layouts/user-header';
import { UNAUTHENTICATION } from 'constants/user-role';

const { Header, Footer, Sider, Content } = Layout;

interface HomeProps {
  children: JSX.Element;
}

// FIXME: 可能可以优化
const Home: React.FC<HomeProps> = ({ children }) => {
  const [isLoading, setLoadingState] = useState(false);
  const [role, setRole] = useState(UNAUTHENTICATION);
  const router = useRouter();

  // client环境
  if (typeof window !== 'undefined') {
    if (localStorage.getItem('Role') === null) {
      router.push('/');
    }
  }

  useEffect(() => {
    router.events.on('routeChangeStart', () => {
      console.log('router change');
      setLoadingState(true);
    });
    router.events.on('routeChangeComplete', () => {
      setLoadingState(false);
    });
  }, []);

  useEffect(() => {
    setRole(Number(localStorage.getItem('Role')));
  }, []);

  return (
    <Layout>
      <Sider
        theme="dark"
        className="home-sider"
        breakpoint="lg"
        collapsedWidth="0"
        /* style={{
          overflow: 'auto',
          height: '100vh',
          position: 'fixed',
          left: 0,
        }} */
      >
        <div className="home-side-head">
          <div>Scientific Research</div>
          <div>Management</div>
        </div>
        <AntdRouterMenu role={role} />
      </Sider>
      <Layout>
        <div className="home-content-box">
          <Row
            justify="space-between"
            align="middle"
            style={{
              background: '#fafafa',
            }}
            gutter={[0, { xs: 8, sm: 12, md: 16, lg: 16 }]}
          >
            <Col lg={5} sm={11} xs={24}>
              <h1
                style={{
                  fontFamily: 'fantasy',
                  fontSize: '30px',
                  fontWeight: 'bold',
                  textAlign: 'center',
                  color: '#000',
                  cursor: 'pointer',
                }}
              >
                研究生科研管理
              </h1>
            </Col>
            <Col lg={5} sm={11} xs={24}>
              <UserHeader />
            </Col>
          </Row>
          <Content className="home-content">
            {isLoading ? <PageLoading /> : children}
          </Content>
          <Footer>code@Eric design@Luna</Footer>
        </div>
      </Layout>
    </Layout>
  );
};

export default Home;
