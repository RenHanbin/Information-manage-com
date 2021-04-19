/**
 * 具体的项目信息弹窗
 */
import { Key } from 'react';
import { Button, Table, Space, Modal } from 'antd';
import { useBoolean } from 'ahooks';

import Detail from 'inner-page/project/detail';

const { Column } = Table;

interface ShowProps {
  projectDataSource: PT.Project[];
}
const Show: React.FC<ShowProps> = props => {
  const [isShow, { setTrue, setFalse }] = useBoolean(false);
  const { projectDataSource } = props;
  const rowSelection = {
    onchange: (selectedRowKeys: Key[]) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`);
    },
  };
  return (
    <>
      <Table
        dataSource={projectDataSource}
        size="small"
        rowSelection={{ type: 'checkbox', ...rowSelection }}
      >
        <Column title="序号" dataIndex="id" key="id" />
        <Column title="项目名称" dataIndex="name" key="name" />
        <Column title="所属示范点" dataIndex="enterprise" key="enterprise" />
        <Column title="投资金额（万元）" dataIndex="invest" key="invest" />
        <Column title="需求学生" dataIndex="needStudent" key="needStudent" />
        <Column title="项目年份" dataIndex="createTime" key="createTime" />
        <Column title="开始时间" dataIndex="startTime" key="startTime" />
        <Column title="结束时间" dataIndex="endTime" key="endTime" />
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
        width={1000}
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
