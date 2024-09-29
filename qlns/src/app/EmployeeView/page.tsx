"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

interface Employee {
  _id: string;
  name: string;
  email: string;
  departmentId: string;
  salaryId: string;
}

export default function Employees() {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await axios.get("http://localhost:8080/employee");
        setEmployees(response.data);
      } catch (error) {
        console.error("Error fetching employees:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchEmployees();
  }, []);

  const handleDelete = async (id: string) => {
    try {
      await axios.delete(`http://localhost:8080/employee/${id}`);
      setEmployees(employees.filter((emp) => emp._id !== id));
    } catch (error) {
      console.error("Error deleting employee:", error);
    }
  };

  const handleEdit = (id: string) => {
    router.push(`/employeeEdit/${id}`); // Navigate to edit page
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div style={{ padding: "20px" }}>
      <h2>Danh Sách Nhân Viên</h2>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th style={{ border: "1px solid black", padding: "8px" }}>
              Tên Nhân Viên
            </th>
            <th style={{ border: "1px solid black", padding: "8px" }}>
              Email
            </th>
            <th style={{ border: "1px solid black", padding: "8px" }}>
              Phòng Ban
            </th>
            <th style={{ border: "1px solid black", padding: "8px" }}>
              Mã Lương
            </th>
            <th style={{ border: "1px solid black", padding: "8px" }}>
              Hành Động
            </th>
          </tr>
        </thead>
        <tbody>
          {employees.map((emp) => (
            <tr key={emp._id}>
              <td style={{ border: "1px solid black", padding: "8px" }}>
                {emp.name}
              </td>
              <td style={{ border: "1px solid black", padding: "8px" }}>
                {emp.email}
              </td>
              <td style={{ border: "1px solid black", padding: "8px" }}>
                {emp.departmentId}
              </td>
              <td style={{ border: "1px solid black", padding: "8px" }}>
                {emp.salaryId}
              </td>
              <td style={{ border: "1px solid black", padding: "8px" }}>
                <button
                  onClick={() => handleEdit(emp._id)}
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
                  onClick={() => handleDelete(emp._id)}
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
