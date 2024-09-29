"use client";
import Image from "next/image";
import { Button, Row, Col, Card, Flex, Typography, Space, Rate } from "antd";
import {
  CheckSquareOutlined,
  FormOutlined,
  ContactsOutlined,
} from "@ant-design/icons";
const { Title, Text } = Typography;
import LearningTable from "@/components/LearningTable";
import Admin from "@/components/Admin";

export default function Home() {
  return (
    <Row gutter={16}>
      <Col span={17}>
        <Row gutter={16}>
          {/* danh mục 1 */}
          <Col span={8}>
            <Card>
              <Flex align="center" gap={16}>
                <div className="text-2xl flex items-center justify-center rounded-md h-12 w-12 bg-red-200">
                  <FormOutlined />
                </div>
                <div>
                  <Title level={4} style={{ marginBottom: 0 }}>
                    5
                  </Title>
                  <Typography>Phòng Ban</Typography>
                </div>
              </Flex>
            </Card>
          </Col>

          {/* danh mục 1 */}
          <Col span={8}>
            <Card>
              <Flex align="center" gap={16}>
                <div className="text-2xl flex items-center justify-center rounded-md h-12 w-12 bg-blue-200">
                  <ContactsOutlined />
                </div>
                <div>
                  <Title level={4} style={{ marginBottom: 0 }}>
                    24
                  </Title>
                  <Typography>Nhân viên</Typography>
                </div>
              </Flex>
            </Card>
          </Col>
          {/* danh mục 1 */}
          <Col span={8}>
            <Card>
              <Flex align="center" gap={16}>
                <div className="text-2xl flex items-center justify-center rounded-md h-12 w-12 bg-green-200">
                  <CheckSquareOutlined />
                </div>
                <div>
                  <Title level={4} style={{ marginBottom: 0 }}>
                    24
                  </Title>
                  <Typography>Hợp đồng</Typography>
                </div>
              </Flex>
            </Card>
          </Col>
        </Row>
        <LearningTable />
      </Col>
      <Col span={7}>
        <Admin />
        <Title level={5}>Đánh giá</Title>
        <Space direction="vertical" className="w-full">
          <Card>
            <Title level={5}>hãy đánh giá tôi </Title>
            <Rate disabled defaultValue={2}></Rate>
          </Card>
        </Space>
      </Col>
    </Row>
  );
}
//gutter : khoảng cách giữa các cột
//span : chiểm bao nhiêu phần
//gap : là khoảng cách guyawx các phần tử con trong container
