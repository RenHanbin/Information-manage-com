/**
 * 具体的项目信息弹窗
 */
import { Key } from 'react';
import { Button, Table, Space, Modal, Tag } from 'antd';
import { useBoolean } from 'ahooks';

import Check from 'inner-page/teacher-manager-project/check';
import Detail from 'inner-page/enterprise-manager-project/detail';

const { Column } = Table;

interface ShowProps {
  projectDataSource: PT.Project[];
}
const getStateColor = (state: string) => {
  switch (state) {
    case '未通过':
      return 'red';
    case '已通过':
      return 'green';
    default:
      return 'gray';
  }
};
const Show: React.FC<ShowProps> = props => {
  const [isShow, { setTrue, setFalse }] = useBoolean(false);
  const [
    isDetailShow,
    { setTrue: setDetailShow, setFalse: setDetailFalse },
  ] = useBoolean(false);
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
            <a onClick={setDetailShow}>{record?.name}</a>
          )}
        />
        <Column title="所属示范点" dataIndex="enterprise" key="enterprise" />
        <Column title="投资金额（万元）" dataIndex="invest" key="invest" />
        <Column title="项目年份" dataIndex="createTime" key="createTime" />
        <Column
          title="项目状态"
          dataIndex="state"
          key="state"
          render={(_text: string, record: PT.Project) => (
            <Tag color={getStateColor(record?.state)}>{_text}</Tag>
          )}
        />
        <Column
          title="操作"
          dataIndex="operation"
          key="operation"
          render={(_text: string, record: PT.Project) => (
            <Space size="middle">
              {record?.state === '未审核' ? (
                <a
                  type="primary"
                  onClick={setTrue}
                  style={{ color: '#ff3333' }}
                >
                  审核
                </a>
              ) : record?.state === '已通过' ? (
                <a style={{ color: 'gray' }} aria-disabled>
                  查看
                </a>
              ) : (
                <a style={{ color: 'gray' }} aria-disabled>
                  查看
                </a>
              )}
            </Space>
          )}
        />
      </Table>
      <Modal
        title="项目查看"
        visible={isDetailShow}
        onCancel={setDetailFalse}
        width={'60vw'}
        footer={
          <Button key="back" onClick={setDetailFalse}>
            返回
          </Button>
        }
      >
        <Detail />
      </Modal>
      <Modal
        title="项目审核"
        visible={isShow}
        onCancel={setFalse}
        width={'60vw'}
        onOk={() => {}}
      >
        <Check />
      </Modal>
    </>
  );
};

export default Show;
