"use client"; // Đánh dấu rằng đây là một component client trong Next.js

import { useEffect, useState } from "react"; // Nhập các hook cần thiết từ React
import axios from "axios"; // Nhập thư viện axios để thực hiện các yêu cầu HTTP
import { useRouter, useParams } from "next/navigation"; // Nhập các hook cho router và lấy tham số từ URL

// Định nghĩa interface cho Department với các thuộc tính cần thiết
interface Department {
  _id: string; // ID của phòng ban
  name: string; // Tên phòng ban
  code: string; // Mã phòng ban
}

// Component chính cho việc chỉnh sửa thông tin phòng ban
export default function DepartmentEdit() {
  const [department, setDepartment] = useState<Department | null>(null); // Trạng thái lưu thông tin phòng ban, mặc định là null
  const [loading, setLoading] = useState(true); // Trạng thái loading, mặc định là true
  const router = useRouter(); // Khởi tạo router để điều hướng
  const { id } = useParams(); // Lấy ID từ URL thông qua useParams

  // Hook useEffect để thực hiện fetch thông tin phòng ban khi component được mount
  useEffect(() => {
    const fetchDepartment = async () => {
      if (id) {
        try {
          // Gửi yêu cầu GET để lấy thông tin phòng ban từ server
          const response = await axios.get(
            `http://localhost:8080/department/${id}`
          );
          setDepartment(response.data); // Cập nhật trạng thái với dữ liệu phòng ban nhận được
        } catch (error) {
          console.error("Error fetching department:", error); // Xử lý lỗi nếu có
        } finally {
          setLoading(false); // Đặt loading thành false sau khi hoàn tất
        }
      } else {
        setLoading(false); // Nếu không có ID, không cần loading
      }
    };
    fetchDepartment(); // Gọi hàm fetchDepartment
  }, [id]); // Chạy lại effect nếu ID thay đổi

  // Hàm xử lý khi người dùng gửi form
  const handleUpdate = async (event: React.FormEvent) => {
    event.preventDefault(); // Ngăn chặn hành vi mặc định của form
    if (department) {
      try {
        // Gửi yêu cầu PUT để cập nhật thông tin phòng ban
        await axios.put(
          `http://localhost:8080/department/${department._id}`,
          department
        );
        router.push("/departments"); // Điều hướng về danh sách phòng ban sau khi cập nhật thành công
      } catch (error) {
        console.error("Error updating department:", error); // Xử lý lỗi nếu có
      }
    }
  };

  // Hiển thị loading nếu đang tải dữ liệu
  if (loading) return <div>Loading...</div>;
  // Nếu không tìm thấy phòng ban, hiển thị thông báo
  if (!department) return <div>Department not found.</div>;

  // Giao diện chỉnh sửa thông tin phòng ban
  return (
    <div style={{ padding: "20px" }}>
      <h2>Chỉnh Sửa Phòng Ban</h2>
      <form onSubmit={handleUpdate}>
        {" "}
        {/* Gọi handleUpdate khi form được gửi */}
        <div>
          <label>Tên Phòng Ban:</label>
          <input
            type="text"
            value={department.name} // Hiển thị tên phòng ban hiện tại
            onChange={
              (e) => setDepartment({ ...department, name: e.target.value }) // Cập nhật tên phòng ban khi thay đổi
            }
            required // Trường này là bắt buộc
          />
        </div>
        <div>
          <label>Mã Phòng Ban:</label>
          <input
            type="text"
            value={department.code} // Hiển thị mã phòng ban hiện tại
            onChange={
              (e) => setDepartment({ ...department, code: e.target.value }) // Cập nhật mã phòng ban khi thay đổi
            }
            required // Trường này là bắt buộc
          />
        </div>
        <button type="submit">Cập Nhật</button> {/* Nút gửi form */}
      </form>
    </div>
  );
}
