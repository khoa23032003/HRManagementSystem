import React from "react";
import { Avatar, Card, Flex, Progress, Typography } from "antd";
import Text from "antd/lib/typography/Text";
import Title from "antd/lib/typography/Title";

export default function UserProgress() {
  return (
    <Card title="Progress">
      <Flex vertical align="center">
        <Avatar
          size={64}
          src="https://scontent.fsgn2-7.fna.fbcdn.net/v/t39.30808-6/449159466_3767511420203590_1132849588837735670_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=Eyn6IsAUCYMQ7kNvgG-FWoC&_nc_ht=scontent.fsgn2-7.fna&oh=00_AYBWQQKEne3XKr6gzJPr4bu_hICxzaYW683xLY5cKJ8Oug&oe=66FAA78A"
        />
        <Title level={4} style={{ marginBottom: 3, marginTop: 3 }}>
          John Doe Smith
        </Title>
        <Text type="secondary">Basic Member</Text>
      </Flex>

      <Text>Front-end</Text>
      <Progress percent={80} status="active" />

      <Text>Back-end</Text>
      <Progress percent={65} status="active" />

      <Text>DevOps</Text>
      <Progress percent={90} status="active" />

      <Text>Testing</Text>
      <Progress percent={60} status="active" />

      <Text>Front-end</Text>
      <Progress percent={50} status="active" />
    </Card>
  );
}
