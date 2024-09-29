// app/SalaryEdit/page.tsx
"use client";

import { useSearchParams } from "next/navigation"; // Sử dụng useSearchParams
import { Button, Form, Input, message } from "antd";
import axios from "axios";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation"; // Đảm bảo nhập useRouter từ next/navigation

const SalaryEdit = () => {
  const searchParams = useSearchParams();
  const router = useRouter(); // Khai báo router
  const id = searchParams.get("id"); // Lấy ID từ URL
  const [salary, setSalary] = useState(null); // Khai báo state cho salary

  useEffect(() => {
    if (id) {
      // Lấy thông tin lương từ API
      axios
        .get(`http://localhost:8080/salary/detail/${id}`)
        .then((response) => {
          setSalary(response.data);
        })
        .catch((error) => {
          console.error("Lỗi khi lấy thông tin lương:", error);
          message.error("Có lỗi xảy ra khi lấy thông tin lương");
        });
    }
  }, [id]);

  const handleUpdate = async (values: any) => {
    try {
      await axios.put(`http://localhost:8080/salary/edit/${id}`, values);
      message.success("Cập nhật lương thành công");
      router.push("/salary"); // Chuyển hướng về danh sách lương
    } catch (error) {
      console.error("Lỗi khi cập nhật lương:", error);
      message.error("Có lỗi xảy ra khi cập nhật lương");
    }
  };

  return (
    <div>
      <h1>Sửa lương</h1>
      {salary && (
        <Form initialValues={salary} onFinish={handleUpdate}>
          <Form.Item label="Lương cơ bản" name="baseSalary">
            <Input />
          </Form.Item>
          <Form.Item label="Phụ cấp" name="allowance">
            <Input />
          </Form.Item>
          <Button type="primary" htmlType="submit">
            Cập nhật
          </Button>
        </Form>
      )}
    </div>
  );
};

export default SalaryEdit;
