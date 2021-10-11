import { Button, Input, Space } from 'antd';
import { ProfileOutlined } from '@ant-design/icons';

const { Search } = Input;

const SearchComponent = () => {
  return (
    <>
      <Space size={7}>
        <Button icon={<ProfileOutlined />} type="primary">
          审批用户
        </Button>
        <Search placeholder="请输入用户名" style={{ width: 200 }} />
      </Space>
    </>
  );
};

export default SearchComponent;
