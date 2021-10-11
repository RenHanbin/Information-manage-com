import { useState } from 'react';
import { Input, Form, Radio } from 'antd';

const { TextArea } = Input;

// 组件
const Verify = () => {
  const [value, setValue] = useState(1);

  return (
    <Form labelCol={{ span: 4 }} wrapperCol={{ span: 18 }} layout="horizontal">
      <Form.Item name="isPassed" label="是否通过">
        <Radio.Group
          onChange={e => {
            setValue(e.target.value);
            console.log(e.target.value);
          }}
          value={value}
        >
          <Radio value="通过">通过</Radio>
          <Radio value="不通过">不通过</Radio>
        </Radio.Group>
      </Form.Item>
      <Form.Item name="suggestion" label="意见建议">
        <TextArea placeholder="意见建议" rows={4} />
      </Form.Item>
    </Form>
  );
};

export default Verify;
