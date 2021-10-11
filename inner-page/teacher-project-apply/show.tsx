/**
 * 具体的项目信息弹窗
 */
import { Key } from 'react';
import { Button, Table, Space, Modal } from 'antd';
import { useBoolean } from 'ahooks';

import Detail from 'inner-page/teacher-project-apply/detail';

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
        size="middle"
        rowSelection={{ type: 'checkbox', ...rowSelection }}
      >
        <Column title="序号" dataIndex="id" key="id" />
        <Column
          title="项目名称"
          dataIndex="name"
          key="name"
          render={(_text: string, record: PT.Project) => (
            <Button type="link" onClick={setTrue}>
              {record?.name}
            </Button>
          )}
        />
        <Column title="所属示范点" dataIndex="enterprise" key="enterprise" />
        <Column title="投资金额（万元）" dataIndex="invest" key="invest" />
        <Column title="需求学生" dataIndex="needStudent" key="needStudent" />
        <Column title="项目年份" dataIndex="createTime" key="createTime" />
        <Column title="开始时间" dataIndex="startTime" key="startTime" />
        <Column title="结束时间" dataIndex="endTime" key="endTime" />
        <Column
          title="项目状态"
          dataIndex="state"
          key="state"
          render={(_text: string, record: PT.Project) => (
            <div>
              {record?.state === '申请中' ? (
                <div style={{ color: 'red' }}>申请中</div>
              ) : (
                <div>{record?.state}</div>
              )}
            </div>
          )}
        />
        <Column
          title="操作"
          dataIndex="operation"
          key="operation"
          render={(_text: string, record: PT.Project) => (
            <Space size="middle">
              {record?.state === '未申请' ? (
                <Button
                  type="primary"
                  onClick={setTrue}
                  style={{ background: '#52c41a', border: '1px solid #52c41a' }}
                >
                  申请
                </Button>
              ) : record?.state === '申请中' ? (
                <Button danger type="primary">
                  取消
                </Button>
              ) : (
                <Button disabled type="primary" onClick={setTrue}>
                  申请
                </Button>
              )}
            </Space>
          )}
        />
      </Table>
      <Modal
        title="项目申请"
        visible={isShow}
        onCancel={setFalse}
        width="60vw"
        footer={
          <div>
            <Button type="primary" onClick={setFalse}>
              申请
            </Button>
            <Button key="back" onClick={setFalse}>
              返回
            </Button>
          </div>
        }
      >
        <Detail />
      </Modal>
    </>
  );
};

export default Show;
