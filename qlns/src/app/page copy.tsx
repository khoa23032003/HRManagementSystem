"use client";
import { useEffect, useState } from "react";
import axios from "axios";

interface Employee {
  _id: string;
  name: string;
  position: string;
  department: string;
}

export default function Home() {
  const [employees, setEmployees] = useState<Employee[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/employees")
      .then((response) => setEmployees(response.data))
      .catch((error) => console.error("Error fetching employees:", error));
  }, []);

  return (
    <div>
      <h1>Employee Management</h1>
      <ul>
        {employees.map((employee) => (
          <li key={employee._id}>
            {employee.name} - {employee.position} - {employee.department}
          </li>
        ))}
      </ul>
      <a href="/src/app/addem">khoa</a>
    </div>
  );
}
