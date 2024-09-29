"use client";
import { Table, Button, message } from "antd";
import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";

const SalaryList = () => {
  const [salaries, setSalaries] = useState([]);

  useEffect(() => {
    fetchSalaries();
  }, []);

  const handleDelete = async (id: any) => {
    try {
      await axios.delete(`http://localhost:8080/salary/delete/${id}`);
      message.success("Xóa lương thành công");
      fetchSalaries(); // Tải lại danh sách lương sau khi xóa
    } catch (error) {
      message.error("Xóa lương không thành công.");
    }
  };

  const fetchSalaries = async () => {
    const response = await axios.get("http://localhost:8080/salary");
    setSalaries(response.data);
  };

  const columns = [
    { title: "Lương cơ bản", dataIndex: "baseSalary", key: "baseSalary" },
    { title: "Phụ cấp", dataIndex: "allowance", key: "allowance" },
    { title: "Ngày thanh toán", dataIndex: "paymentDate", key: "paymentDate" },
    {
      title: "Hành động",
      render: (_: any, record: { _id: any }) => (
        <>
          <Link href={`/SalaryEdit?id=${record._id}`}>
            <Button>Sửa</Button>
          </Link>
          <Button
            danger
            style={{ marginLeft: "10px" }}
            onClick={() => handleDelete(record._id)} // Gọi handleDelete với ID
          >
            Xóa
          </Button>
        </>
      ),
    },
  ];

  return (
    <div>
      <h1>Danh sách lương</h1>
      <Table dataSource={salaries} columns={columns} rowKey="_id" />
    </div>
  );
};

export default SalaryList;
