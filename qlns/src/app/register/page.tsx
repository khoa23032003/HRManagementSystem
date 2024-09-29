"use client";
import { Form, Input, Button, message } from "antd";
import axios from "axios";
import { useState } from "react";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [departmentId, setDepartmentId] = useState("");
  const [salaryId, setSalaryId] = useState("");

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    const employeeData = { name, email, password, departmentId, salaryId };

    try {
      const response = await axios.post(
        "http://localhost:8080/employee/register",
        employeeData
      );
      console.log(response.data); // In phản hồi từ backend
      setName(name);
      setEmail(email);
      setPassword(password);
      setDepartmentId(departmentId);
      setSalaryId(salaryId);
      message.success("Đăng ký thành công!");
    } catch (error) {
      console.error("Đăng ký thất bại:", error);
      message.error("Có lỗi xảy ra khi đăng ký.");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Đăng ký nhân viên</h2>
      <form
        onSubmit={handleRegister}
        style={{ display: "flex", flexDirection: "column", width: "300px" }}
      >
        <label>Tên</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          style={{ marginBottom: "10px", padding: "8px" }}
        />

        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{ marginBottom: "10px", padding: "8px" }}
        />

        <label>Mật khẩu</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={{ marginBottom: "10px", padding: "8px" }}
        />

        <label>Mã phòng ban</label>
        <input
          type="text"
          value={departmentId}
          onChange={(e) => setDepartmentId(e.target.value)}
          required
          style={{ marginBottom: "10px", padding: "8px" }}
        />

        <label>Mã lương</label>
        <input
          type="text"
          value={salaryId}
          onChange={(e) => setSalaryId(e.target.value)}
          required
          style={{ marginBottom: "10px", padding: "8px" }}
        />

        <button
          type="submit"
          style={{
            padding: "10px",
            backgroundColor: "#4CAF50",
            color: "white",
            border: "none",
          }}
        >
          Đăng ký
        </button>
      </form>
    </div>
  );
}
