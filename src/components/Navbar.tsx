import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <div className="thanhDieuhuong">
      <div className="logo">BLOG CỦA ĐẠT</div>
      <div className="link">
        <Link to="/">Trang chủ</Link>
        <Link to="/viet-bai">Viết bài</Link>
      </div>
    </div>
  )
}
