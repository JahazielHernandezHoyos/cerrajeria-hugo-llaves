import { Button, Space, DatePicker, Card } from "antd";
import { CiCircleFilled } from "@ant-design/icons";

const pruebas = () => {
  const onChange = () => {};
  return (
      <Space direction="vertical">
        <Button type="primary">Primary Button</Button>
        <Button type="ghost">Ghost Button</Button>
        <DatePicker onChange={onChange} />
        <CiCircleFilled />
      </Space>
  );
};
export default pruebas;
