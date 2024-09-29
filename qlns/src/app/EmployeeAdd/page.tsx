"use client";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function AddEmployee() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [departmentId, setDepartmentId] = useState("");
  const [salaryId, setSalaryId] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const newEmployee = {
        name,
        email,
        password,
        departmentId,
        salaryId,
      };
      await axios.post("http://localhost:8080/employee", newEmployee);
      router.push("/employees"); // Navigate back to the employee list
    } catch (error) {
      console.error("Error adding employee:", error);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Thêm Nhân Viên Mới</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "10px" }}>
          <label>Tên Nhân Viên: </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            style={{ padding: "5px", width: "300px" }}
          />
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label>Email: </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{ padding: "5px", width: "300px" }}
          />
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label>Mật Khẩu: </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{ padding: "5px", width: "300px" }}
          />
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label>Mã Phòng Ban: </label>
          <input
            type="text"
            value={departmentId}
            onChange={(e) => setDepartmentId(e.target.value)}
            required
            style={{ padding: "5px", width: "300px" }}
          />
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label>Mã Lương: </label>
          <input
            type="text"
            value={salaryId}
            onChange={(e) => setSalaryId(e.target.value)}
            required
            style={{ padding: "5px", width: "300px" }}
          />
        </div>

        <button
          type="submit"
          style={{
            padding: "10px 15px",
            backgroundColor: "green",
            color: "white",
            border: "none",
            cursor: "pointer",
          }}
        >
          Thêm Nhân Viên
        </button>
      </form>
    </div>
  );
}
