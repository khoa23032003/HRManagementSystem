"use client";
import { Menu } from "antd";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

function AppSideMenu() {
  const pathname = usePathname();
  const [selectedKey, SetSelectKey] = useState([1]);

  useEffect(() => {
    if (pathname.startsWith("/bookmarks")) {
      SetSelectKey(["2"]);
    } else if (pathname.startsWith("/contact")) {
      SetSelectKey(["3"]);
    } else if (pathname === "/") {
      SetSelectKey(["1"]);
    }
  }, [pathname]);
  const menuItems = [
    { label: <a href="/">Home</a>, key: 1 }, // Sử dụng thẻ <a> thay cho <link>
    { type: "divider" },
    { label: <a href="/SalaryView">Bản Lương</a>, key: 2 },
    { label: <a href="/SalaryAdd">Thêm Lương</a>, key: 3 }, // Cập nhật đường dẫn
    { type: "divider" },
    { label: <a href="/departmentView">Phòng Ban</a>, key: 4 },
    { label: <a href="/addDepartment">Thêm phòng ban</a>, key: 5 },
    { label: <a href="/EmployeeViewt">Nhân viên</a>, key: 6 },
    { label: <a href="/EmployeeAdd">Thêm Nhân viên</a>, key: 7 },
    { type: "divider" },
    { label: <a href="/login">Đăng nhập</a>, key: 8 },
    { label: <a href="/register">Đăng ký</a>, key: 9 },
  ];
  return (
    <Menu mode="inline" items={menuItems} selectedKeys={selectedKey}></Menu>
  );
}

export default AppSideMenu;
