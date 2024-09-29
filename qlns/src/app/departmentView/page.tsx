"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

interface Department {
  _id: string;
  name: string;
  code: string;
}

export default function Departments() {
  const [departments, setDepartments] = useState<Department[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchDepartments = async () => {
      try {
        const response = await axios.get("http://localhost:8080/department");
        setDepartments(response.data);
      } catch (error) {
        console.error("Error fetching departments:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchDepartments();
  }, []);

  const handleDelete = async (id: string) => {
    try {
      await axios.delete(`http://localhost:8080/department/${id}`);
      setDepartments(departments.filter((dept) => dept._id !== id));
    } catch (error) {
      console.error("Error deleting department:", error);
    }
  };

  const handleEdit = (id: string) => {
    router.push(`/departmentEdit/${id}`); // Navigate to edit page
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div style={{ padding: "20px" }}>
      <h2>Danh Sách Phòng Ban</h2>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th style={{ border: "1px solid black", padding: "8px" }}>
              Tên Phòng Ban
            </th>
            <th style={{ border: "1px solid black", padding: "8px" }}>
              Mã Phòng Ban
            </th>
            <th style={{ border: "1px solid black", padding: "8px" }}>
              Hành Động
            </th>
          </tr>
        </thead>
        <tbody>
          {departments.map((dept) => (
            <tr key={dept._id}>
              <td style={{ border: "1px solid black", padding: "8px" }}>
                {dept.name}
              </td>
              <td style={{ border: "1px solid black", padding: "8px" }}>
                {dept.code}
              </td>
              <td style={{ border: "1px solid black", padding: "8px" }}>
                <button
                  onClick={() => handleEdit(dept._id)}
                  style={{
                    padding: "5px 10px",
                    backgroundColor: "blue",
                    color: "white",
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  Chỉnh sửa
                </button>
                <button
                  onClick={() => handleDelete(dept._id)}
                  style={{
                    padding: "5px 10px",
                    backgroundColor: "red",
                    color: "white",
                    border: "none",
                    cursor: "pointer",
                    marginLeft: "10px",
                  }}
                >
                  Xóa
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
