import React from "react";
import { Header } from "antd/es/layout/layout";
import { RadarChartOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar } from "antd";

function AppHeader() {
  return (
    <Header
      className="!bg-white border-b  border-[#f1f1f1] flex items-center justify-between
     sticky top-0 z-10"
    >
      <div className="flex items-center gap-2">
        <RadarChartOutlined className="text-3x1" />
        <div>Thiên bảo</div>
      </div>
      <div className="flex items-center gap-2">
        <Avatar
          size={34}
          src="https://scontent.fsgn2-9.fna.fbcdn.net/v/t39.30808-6/458075748_3816804065274325_5504443971637582732_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_ohc=gSD16MFZFXEQ7kNvgFVWhnq&_nc_ht=scontent.fsgn2-9.fna&_nc_gid=A1gA_mtOFrEHHVnzZkPB7q-&oh=00_AYCY6_o1P_2HKNa-Lpb3dYyzzHIg4840tgtd5VyygV-sEg&oe=66F9E645"
        />
        <div>Khoa</div>
      </div>
    </Header>
  );
}
// border-b : thêm đường viền phía dưới
// text-3x1 : kích thước chữ lớn
// gap-2 : tạo khoảnh cách giữa các phân tử con
//sticky : giữ nguyên trạng thái khi người dùng cuôn trang
export default AppHeader;
