import { Input, Select, Row, Col } from 'antd';

const { Search } = Input;
const {} = Select;
const Config = () => {
  return (
    <>
      <Row
        justify="space-between"
        align="top"
        gutter={[0, { xs: 8, sm: 12, md: 16, lg: 16 }]}
      >
        <Col lg={5} sm={11} xs={24}>
          {/* TODO: 模糊搜索 */}
          <Search placeholder="输入项目名称进行搜索" />
        </Col>
      </Row>
    </>
  );
};

export default Config;
