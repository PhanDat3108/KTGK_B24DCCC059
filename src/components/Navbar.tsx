import { NavLink } from "react-router-dom"
import "./Navbar.css"

export default function Navbar() {
  return (
    <nav className="thanhDieuhuong">
      <div className="logo">BLOG CỦA ĐẠT</div>
      <div className="link">
        <NavLink to="/" className="muc" end>
          Trang chủ
        </NavLink>
        <NavLink to="/tao-bai" className="muc">
          Viết bài
        </NavLink>
      </div>
    </nav>
  )
}
