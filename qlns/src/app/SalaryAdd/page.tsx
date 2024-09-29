"use client";
import { useRouter } from "next/router";
import { Button, Form, Input, message } from "antd";
import axios from "axios";

const AddSalary = () => {
  const handleAdd = async (values: {
    baseSalary: number;
    allowance?: number;
    paymentDate?: Date;
  }) => {
    try {
      await axios.post("http://localhost:8080/salary", values);
      message.success("Thêm lương thành công");
      // Chuyển hướng về trang danh sách lương
    } catch (error) {
      message.error("Thêm lương thất bại");
    }
  };

  return (
    <div>
      <h1>Thêm lương</h1>
      <Form onFinish={handleAdd}>
        <Form.Item
          label="Lương cơ bản"
          name="baseSalary"
          rules={[{ required: true, message: "Vui lòng nhập lương cơ bản!" }]}
        >
          <Input type="number" />
        </Form.Item>
        <Form.Item label="Phụ cấp" name="allowance">
          <Input type="number" />
        </Form.Item>
        <Form.Item label="Ngày thanh toán" name="paymentDate">
          <Input type="date" />
        </Form.Item>
        <Button type="primary" htmlType="submit">
          Thêm
        </Button>
      </Form>
    </div>
  );
};

export default AddSalary;
