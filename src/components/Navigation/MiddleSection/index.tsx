import { CiShoppingCart } from "react-icons/ci";
import { HiOutlineUser } from "react-icons/hi2";
import LogoIcon from "../../../icons/Logo";

import { Input } from "antd";
import "antd/dist/antd.css";
import Link from "next/link";

const { Search } = Input;

export interface IAppProps {}

export default function Middlesection(props: IAppProps) {
  const onSearch = (value: string) => console.log(value);
  return (
    <div className="middle-container">
      <div className="middle-wrapper">
        <div className="logo-section">
          <LogoIcon />
          <span>Comforty</span>
        </div>
        <div className="search-section">
          <Search
            placeholder="Search here..."
            allowClear
            onSearch={onSearch}
            // style={{ borderRadius: "20px", border: "none" }}
          />
        </div>
        <div className="cart-section">
          <Link href="/cart">
            <div className="cart-wrapper">
              <span style={{ fontSize: "22px" }}>
                <CiShoppingCart />
              </span>
              <span className="cart-text">Cart</span>
              <span className="cart-number">2</span>
            </div>
          </Link>
          <div className="user-wrapper">
            <span style={{ fontSize: "20px" }}>
              <HiOutlineUser />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
