import { Space, Table, Tag } from "antd";
import { title } from "process";
import React from "react";

function LearningTable() {
  const columns = [
    {
      title: "Mã Phòng ban",
      dataIndex: "maphongban",
      key: "maphongban",
    },
    {
      title: "Phòng ban",
      dataIndex: "phongban",
      key: "phongban",
    },
    {
      title: "Số lượng nhân viên",
      dataIndex: "nhanvien",
      key: "nhanvien",
    },
    {
      title: "Status",
      dataIndex: "Status",
      key: "Status",
      render: (_, text) => (
        <Tag color={text.Status === "comleted" ? "green" : "blue"}>
          {text.Status}
        </Tag>
      ),
    },
    // thêm xoá
    {
      title: "Action",
      key: "action",
      render: () => (
        <Space size={"middle"}>
          <a href="">View</a>
          <a href="">Detele</a>
        </Space>
      ),
    },
  ];
  const data = [
    {
      id: "1",
      maphongban: "01",
      phongban: "it",
      nhanvien: "89",
      Status: "comleted",
    },
    {
      id: "2",
      maphongban: "01",
      phongban: "it",
      nhanvien: "89",
      Status: "nhan vien",
    },
  ];

  return <Table className="mt-4" columns={columns} dataSource={data} />;
}

export default LearningTable;
