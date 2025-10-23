import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import PostCard from "../components/PostCard"

interface BaiViet {
  id: number
  tieuDe: string
  tacGia: string
  ngayDang: string
  moTa: string
  anh: string
}

const TrangChu: React.FC = () => {
  const [baiViet, setBaiViet] = useState<BaiViet[]>([
    {
      id: 1,
      tieuDe: "Lập trình React cơ bản",
      tacGia: "Phan Đạt",
      ngayDang: "20/10/2025",
      moTa: "Hướng dẫn những kiến thức cơ bản nhất về React cho người mới bắt đầu...",
      anh: "https://picsum.photos/300/200?1"
    },
    {
      id: 2,
      tieuDe: "Hiểu về TypeScript",
      tacGia: "Nguyễn Minh",
      ngayDang: "21/10/2025",
      moTa: "TypeScript giúp bạn viết mã an toàn hơn, dễ kiểm soát lỗi và gợi ý thông minh hơn...",
      anh: "https://picsum.photos/300/200?2"
    },
    {
      id: 3,
      tieuDe: "React Router toàn tập",
      tacGia: "Trần Nam",
      ngayDang: "22/10/2025",
      moTa: "React Router là thư viện mạnh mẽ giúp bạn điều hướng giữa các trang trong ứng dụng React...",
      anh: "https://picsum.photos/300/200?3"
    },
    {
      id: 4,
      tieuDe: "Cách tối ưu hiệu năng React",
      tacGia: "Phan Đạt",
      ngayDang: "23/10/2025",
      moTa: "Học cách tối ưu ứng dụng React của bạn để chạy mượt mà hơn...",
      anh: "https://picsum.photos/300/200?4"
    },
    {
      id: 5,
      tieuDe: "Quản lý state bằng Redux",
      tacGia: "Minh Quân",
      ngayDang: "23/10/2025",
      moTa: "Redux là công cụ quản lý state phổ biến trong các dự án React lớn...",
      anh: "https://picsum.photos/300/200?5"
    }
  ])

  const [timKiem, setTimKiem] = useState("")
  const dieuHuong = useNavigate()

  const xoaBai = (id: number) => {
    if (window.confirm("Bạn có chắc muốn xóa bài viết này?")) {
      setBaiViet(baiViet.filter((b) => b.id !== id))
    }
  }

  const danhSachLoc = baiViet.filter((b) =>
    b.tieuDe.toLowerCase().includes(timKiem.toLowerCase())
  )

  return (
    <div className="trang-chu">
      <h2>Danh sách bài viết ({danhSachLoc.length})</h2>

      <div className="thanh-timkiem">
        <input
          type="text"
          placeholder="Tìm theo tiêu đề..."
          value={timKiem}
          onChange={(e) => setTimKiem(e.target.value)}
        />
        <button onClick={() => dieuHuong("/tao-bai")}>Viết bài mới</button>
      </div>

      <div className="khung-bai-viet">
        {danhSachLoc.map((b) => (
          <PostCard key={b.id} bai={b} xoa={xoaBai} />
        ))}
      </div>
    </div>
  )
}

export default TrangChu
