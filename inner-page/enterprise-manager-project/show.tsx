/**
 * 具体的项目信息弹窗
 */

import { Button, Table, Space, Modal } from 'antd';
import { useBoolean } from 'ahooks';
import Detail from './detail';

const { Column } = Table;

interface ShowProps {
  projectDataSource: PT.Project[];
}

const Show: React.FC<ShowProps> = props => {
  const [isShow, { setTrue, setFalse }] = useBoolean(false);
  const { projectDataSource } = props;

  return (
    <>
      <Table dataSource={projectDataSource} size="middle">
        <Column title="序号" dataIndex="id" key="id" />
        <Column title="项目名称" dataIndex="name" key="name" />
        <Column
          title="需求学生(个)"
          dataIndex="needStudent"
          key="needStudent"
        />
        <Column title="学科专业" dataIndex="major" key="major" />
        <Column title="发布组织" dataIndex="group" key="group" />
        <Column title="项目状态" dataIndex="state" key="state" />
        <Column
          title="操作"
          dataIndex="operation"
          key="operation"
          render={() => (
            <Space size="middle">
              <Button type="primary" onClick={setTrue}>
                查看
              </Button>
            </Space>
          )}
        />
      </Table>
      <Modal
        title="项目查看"
        visible={isShow}
        onCancel={setFalse}
        style={{ top: '15px' }}
        width={'60vw'}
        footer={
          <Button key="back" onClick={setFalse}>
            返回
          </Button>
        }
      >
        <Detail />
      </Modal>
    </>
  );
};

export default Show;
