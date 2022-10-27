import { Button, Col, Form, Input, notification, Row } from "antd";
import TextArea from "antd/lib/input/TextArea";
import axios from "axios";
import React, { useEffect } from "react";
import OneSignal from "react-onesignal";
import { pushNotification } from "../../api/notification";
import "antd/dist/antd.css";

const Notification: React.FC = () => {
  const onFinish = (values: any) => {
    console.log("Success:", values);
    pushNotification(values);
    notification.success({
      message: `${values.title}`,
      description: `${values.content}`,
    });
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  useEffect(() => {
    OneSignal.init({
      appId: "52a7f9f1-08fa-4050-98a4-0522ed18eada",
    });

    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <Row justify="center" style={{ marginTop: 20 }}>
      <Col span={12}>
        <Form
          name="basic"
          className="notification"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          onFinish={(values) => onFinish(values)}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Title"
            name="title"
            rules={[{ required: true, message: "Please input your title!" }]}
          >
            <Input placeholder="Title notification" />
          </Form.Item>

          <Form.Item
            label="Content"
            name="content"
            rules={[{ required: true, message: "Please input your content!" }]}
          >
            <TextArea placeholder="Content notification" />
          </Form.Item>

          <Row justify="center">
            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button
                type="primary"
                htmlType="submit"
                className="btn btn--create"
              >
                Submit
              </Button>
            </Form.Item>
          </Row>
        </Form>
      </Col>
    </Row>
  );
};

export default Notification;
