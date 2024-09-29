"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter, usePathname } from "next/navigation"; // Sử dụng từ next/navigation

interface Department {
  _id: string;
  name: string;
  code: string;
}

export default function DepartmentDelete() {
  const [department, setDepartment] = useState<Department | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const pathname = usePathname(); // Lấy đường dẫn hiện tại

  const id = pathname.split("/").pop(); // Lấy ID từ đường dẫn

  useEffect(() => {
    const fetchDepartment = async () => {
      if (id) {
        try {
          const response = await axios.get(
            `http://localhost:8080/department/${id}`
          );
          setDepartment(response.data);
        } catch (error) {
          console.error("Error fetching department:", error);
        } finally {
          setLoading(false);
        }
      }
    };
    fetchDepartment();
  }, [id]);

  const handleDelete = async () => {
    if (department) {
      try {
        await axios.delete(
          `http://localhost:8080/department/${department._id}`
        );
        router.push("/departments");
      } catch (error) {
        console.error("Error deleting department:", error);
      }
    }
  };

  if (loading) return <div>Loading...</div>;
  if (!department) return <div>Department not found.</div>;

  return (
    <div style={{ padding: "20px" }}>
      <h2>Xóa Phòng Ban</h2>
      <p>Bạn có chắc chắn muốn xóa phòng ban này?</p>
      <p>Tên: {department.name}</p>
      <p>Mã: {department.code}</p>
      <button
        onClick={handleDelete}
        style={{ backgroundColor: "red", color: "white" }}
      >
        Xóa
      </button>
      <button onClick={() => router.push("/departments")}>Hủy</button>
    </div>
  );
}
