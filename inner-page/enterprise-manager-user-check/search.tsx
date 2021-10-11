import { Button, Col, Input, Row } from 'antd';
import { ProfileOutlined } from '@ant-design/icons';
import React from 'react';

const { Search } = Input;

const SearchComponent = () => {
  return (
    <>
      <Row justify={'space-between'}>
        <Col>
          <Button icon={<ProfileOutlined />} type="primary">
            审批用户
          </Button>
        </Col>
        <Col>
          <Search placeholder="请输入用户名" style={{ width: 200 }} />
        </Col>
      </Row>
    </>
  );
};

export default SearchComponent;
