"use client";
import { useSearchParams } from "next/navigation";
import { Button, message } from "antd";
import axios from "axios";
import { useState, useEffect } from "react";

interface Salary {
  _id: string;
  baseSalary: number;
  allowance: number;
  paymentDate: string;
}

const DeleteSalary = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get("id"); // Lấy ID từ query params
  const [salary, setSalary] = useState<Salary | null>(null);

  useEffect(() => {
    if (id) {
      fetchSalary();
    }
  }, [id]);

  const fetchSalary = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/salary/${id}`);
      setSalary(response.data);
    } catch (error) {
      message.error("Không thể lấy thông tin lương.");
    }
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:8080/salary/delete/${id}`);
      message.success("Xóa lương thành công");
      window.location.href = "/salary"; // Điều hướng lại đến danh sách lương
    } catch (error) {
      message.error("Xóa lương không thành công.");
    }
  };

  return (
    <div>
      <h1>Xóa lương</h1>
      {salary ? (
        <>
          <p>
            Bạn có chắc chắn muốn xóa lương của ngày {salary.paymentDate} không?
          </p>
          <Button danger onClick={handleDelete}>
            Xóa
          </Button>
        </>
      ) : (
        <p>Đang tải thông tin lương...</p>
      )}
    </div>
  );
};

export default DeleteSalary;
