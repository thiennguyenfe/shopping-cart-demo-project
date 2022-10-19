import { MenuOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Menu } from "antd";
import "antd/dist/antd.css";
import { useState } from "react";

export interface IAppProps {}

const items: MenuProps["items"] = [
  {
    label: "All Categories",
    key: "mail",
    icon: <MenuOutlined />,
  },
  {
    label: "Home",
    key: "home",
  },
  {
    label: "Shop",
    key: "shop",
    children: [
      {
        type: "group",
        label: "Shop 1",
        children: [
          {
            label: "Option 1",
            key: "shop:1",
          },
          {
            label: "Option 2",
            key: "shop:2",
          },
        ],
      },
      {
        type: "group",
        label: "Shop 2",
        children: [
          {
            label: "Option 3",
            key: "shop:3",
          },
          {
            label: "Option 4",
            key: "shop:4",
          },
        ],
      },
    ],
  },
  {
    label: "Product",
    key: "product",
    children: [
      {
        type: "group",
        label: "Product 1",
        children: [
          {
            label: "Option 1",
            key: "product:1",
          },
          {
            label: "Option 2",
            key: "product:2",
          },
        ],
      },
      {
        type: "group",
        label: "Product 2",
        children: [
          {
            label: "Option 3",
            key: "product:3",
          },
          {
            label: "Option 4",
            key: "product:4",
          },
        ],
      },
    ],
  },
  {
    label: "Pages",
    key: "pages",
    children: [
      {
        type: "group",
        label: "Page 1",
        children: [
          {
            label: "Option 1",
            key: "page:1",
          },
          {
            label: "Option 2",
            key: "page:2",
          },
        ],
      },
      {
        type: "group",
        label: "Page 2",
        children: [
          {
            label: "Option 3",
            key: "page:3",
          },
          {
            label: "Option 4",
            key: "page:4",
          },
        ],
      },
    ],
  },
  {
    label: "About",
    key: "about",
  },
];

export default function MenuSection(props: IAppProps) {
  const [current, setCurrent] = useState("mail");

  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };
  return (
    <div className="menu-container">
      <div className="menu-wrapper">
        <div className="menu-section">
          <Menu
            onClick={onClick}
            selectedKeys={[current]}
            mode="horizontal"
            items={items}
          />
        </div>
        <div className="contact-info">
          Contact:{" "}
          <span style={{ color: "#272343", fontWeight: "600" }}>
            (808) 555-0111
          </span>
        </div>
      </div>
    </div>
  );
}
