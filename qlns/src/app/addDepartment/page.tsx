"use client";
import { useState } from "react";
import axios from "axios";

export default function AddDepartment() {
  const [name, setName] = useState("");
  const [code, setCode] = useState("");

  // Xử lý khi người dùng nhấn nút submit
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const departmentData = { name, code };

    try {
      const response = await axios.post(
        "http://localhost:8080/department",
        departmentData
      );
      console.log(response.data); // In phản hồi từ backend
      setName(name);
      setCode(code);
      alert("Thêm phòng ban thành công!");
    } catch (error) {
      console.error("Không thể thêm phòng ban:", error);
      alert("Có lỗi xảy ra khi thêm phòng ban.");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Thêm Phòng Ban Mới</h2>
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", width: "300px" }}
      >
        <label>Tên Phòng Ban</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          style={{ marginBottom: "10px", padding: "8px" }}
        />

        <label>Mã Phòng Ban</label>
        <input
          type="text"
          value={code}
          onChange={(e) => setCode(e.target.value)}
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
          Thêm
        </button>
      </form>
    </div>
  );
}
