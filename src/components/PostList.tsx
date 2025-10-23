import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import PostCard from "./PostCard"

interface Bai {
  id: number
  tieuDe: string
  tacGia: string
  moTa: string
  anh: string
}

export default function DanhSachBaiViet() {
  const [dsBai, setDsBai] = useState<Bai[]>([
    {
      id: 1,
      tieuDe: "Lập trình React cơ bản",
      tacGia: "Phan Đạt",
      moTa: "Giới thiệu về React và cách tạo component cơ bản...",
      anh: "https://picsum.photos/300/200?1",
    },
    {
      id: 2,
      tieuDe: "TypeScript là gì",
      tacGia: "Nguyễn Minh",
      moTa: "TypeScript giúp kiểm tra lỗi khi lập trình JavaScript bằng cách thêm kiểu dữ liệu...",
      anh: "https://picsum.photos/300/200?2",
    },
    {
      id: 3,
      tieuDe: "React Router hướng dẫn",
      tacGia: "Trần Nam",
      moTa: "React Router giúp chuyển giữa các trang trong ứng dụng React dễ dàng...",
      anh: "https://picsum.photos/300/200?3",
    },
    {
      id: 4,
      tieuDe: "Tối ưu hiệu năng React",
      tacGia: "Phan Đạt",
      moTa: "Một số cách tối ưu ứng dụng React để tăng tốc độ hiển thị và hiệu năng...",
      anh: "https://picsum.photos/300/200?4",
    },
    {
      id: 5,
      tieuDe: "Redux quản lý state",
      tacGia: "Minh Quân",
      moTa: "Redux là công cụ quản lý state phổ biến trong các ứng dụng React phức tạp...",
      anh: "https://picsum.photos/300/200?5",
    },
  ])

  const [tim, setTim] = useState("")
  const dieuHuong = useNavigate()

  const xoaBai = (id: number) => {
    if (window.confirm("Bạn có chắc muốn xóa bài viết này?")) {
      setDsBai(dsBai.filter((b) => b.id !== id))
    }
  }

  const baiLoc = dsBai.filter((b) =>
    b.tieuDe.toLowerCase().includes(tim.toLowerCase())
  )

  return (
    <div className="trangChu">
      <h2>Danh sách bài viết ({baiLoc.length})</h2>

      <div className="thanhTim">
        <input
          type="text"
          placeholder="Tìm bài viết..."
          value={tim}
          onChange={(e) => setTim(e.target.value)}
        />
        <button onClick={() => dieuHuong("/tao-bai")}>Viết bài mới</button>
      </div>

      <div className="khungBai">
        {baiLoc.map((bai) => (
          <PostCard key={bai.id} bai={bai} xoa={xoaBai} />
        ))}
      </div>
    </div>
  )
}
