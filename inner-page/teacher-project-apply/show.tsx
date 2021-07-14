/**
 * 具体的项目信息弹窗
 */
import { Button, Table, Space, Modal, Tag } from 'antd';
import { useBoolean } from 'ahooks';

import Detail from 'inner-page/teacher-project-apply/detail';
import Check from './check';

const { Column } = Table;
const getStateColor = (state: string) => {
  switch (state) {
    case '已驳回':
      return 'red';
    case '未申请':
      return 'green';
    default:
      return 'gray';
  }
};
interface ShowProps {
  projectDataSource: PT.Project[];
}
const Show: React.FC<ShowProps> = props => {
  const [isShow, { setTrue, setFalse }] = useBoolean(false);
  const [
    isDetailShow,
    { setTrue: setDetailShow, setFalse: setDetailFalse },
  ] = useBoolean(false);
  const [
    isPromptShow,
    { setTrue: setPromptShow, setFalse: setPromptFalse },
  ] = useBoolean(false);
  const { projectDataSource } = props;
  return (
    <>
      <Table dataSource={projectDataSource} size="middle">
        <Column title="序号" dataIndex="id" key="id" />
        <Column
          title="项目名称"
          dataIndex="name"
          key="name"
          render={(_text: string, record: PT.Project) => (
            <Button type="link" onClick={setDetailShow}>
              {record?.name}
            </Button>
          )}
        />
        <Column title="所属示范点" dataIndex="enterprise" key="enterprise" />
        <Column title="投资金额（万元）" dataIndex="invest" key="invest" />
        <Column title="项目年份" dataIndex="createTime" key="createTime" />
        <Column title="开始时间" dataIndex="startTime" key="startTime" />
        <Column
          title="申请状态"
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
              {record?.state === '未申请' ? (
                <a onClick={setTrue} style={{ color: '#52c41a' }}>
                  申请
                </a>
              ) : record?.state === '申请中' ? (
                <a aria-disabled style={{ color: '#FF7F24' }}>
                  取消
                </a>
              ) : record?.state === '已驳回' ? (
                <a style={{ color: '#ff3333' }} onClick={setPromptShow}>
                  详情
                </a>
              ) : (
                <a aria-disabled style={{ color: 'gray' }}>
                  申请
                </a>
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
        <Check />
      </Modal>
      <Modal
        title="驳回详情"
        visible={isPromptShow}
        onCancel={setPromptFalse}
        width="60vw"
        footer={
          <div>
            <Button type="primary" onClick={setPromptFalse}>
              重新申请
            </Button>
            <Button key="back" onClick={setPromptFalse}>
              返回
            </Button>
          </div>
        }
      >
        这里是高校管理员在审核高校导师的时候填写的审核意见
      </Modal>
      <Modal
        title="项目查看"
        visible={isDetailShow}
        onCancel={setDetailFalse}
        style={{ top: '15px' }}
        width={'70vw'}
        footer={
          <Button key="back" onClick={setDetailFalse}>
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
