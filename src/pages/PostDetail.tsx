import React from "react"
import { useParams, useNavigate } from "react-router-dom"
import "./ChiTietBai.css"


interface Bai {
  id: number
  tieuDe: string
  tacGia: string
  ngayDang: string
  moTa: string
  anh: string
  noiDung: string
  theLoai: string
}

export default function ChiTietBai() {
  const { id } = useParams<{ id: string }>()
  const dieuHuong = useNavigate()

  const dsBai: Bai[] = [
    {
      id: 1,
      tieuDe: "Lập trình React cơ bản",
      tacGia: "Phan Đạt",
      ngayDang: "20/10/2025",
      moTa: "Giới thiệu về React và component cơ bản...",
      anh: "https://picsum.photos/600/400?1",
      noiDung:
        "React là thư viện JavaScript giúp xây dựng giao diện người dùng hiện đại. Trong bài này bạn sẽ học cách tạo component, props, state và cách tổ chức code React hợp lý.",
      theLoai: "Công nghệ",
    },
    {
      id: 2,
      tieuDe: "Hiểu về TypeScript",
      tacGia: "Nguyễn Minh",
      ngayDang: "21/10/2025",
      moTa: "Tìm hiểu TypeScript cho người mới bắt đầu...",
      anh: "https://picsum.photos/600/400?2",
      noiDung:
        "TypeScript mở rộng JavaScript bằng hệ thống kiểu dữ liệu tĩnh. Điều này giúp hạn chế lỗi, cải thiện khả năng bảo trì và tối ưu hiệu suất khi làm việc nhóm.",
      theLoai: "Công nghệ",
    },
    {
  id: 3,
  tieuDe: "React Router toàn tập",
  tacGia: "Trần Nam",
  ngayDang: "22/10/2025",
  moTa: "Tìm hiểu React Router từ cơ bản đến nâng cao...",
  anh: "https://picsum.photos/600/400?3",
  noiDung:
    "React Router là thư viện mạnh mẽ giúp bạn điều hướng giữa các trang trong ứng dụng React. Bạn có thể tạo các route, nested route, và sử dụng hook như useNavigate, useParams để quản lý điều hướng.",
  theLoai: "Công nghệ",
},
{
  id: 4,
  tieuDe: "Cách tối ưu hiệu năng React",
  tacGia: "Phan Đạt",
  ngayDang: "23/10/2025",
  moTa: "Hướng dẫn các phương pháp tối ưu React...",
  anh: "https://picsum.photos/600/400?4",
  noiDung:
    "Học cách tối ưu ứng dụng React của bạn bằng memoization, lazy loading, code splitting và tối ưu render để giúp ứng dụng chạy mượt mà hơn.",
  theLoai: "Công nghệ",
},
{
  id: 5,
  tieuDe: "Quản lý state bằng Redux",
  tacGia: "Minh Quân",
  ngayDang: "23/10/2025",
  moTa: "Redux giúp quản lý state tập trung hiệu quả...",
  anh: "https://picsum.photos/600/400?5",
  noiDung:
    "Redux là công cụ quản lý state phổ biến trong các dự án React lớn, giúp tách logic state khỏi component, dễ dàng debug và mở rộng ứng dụng.",
  theLoai: "Công nghệ",
},

  ]

  const bai = dsBai.find((b) => b.id === Number(id))

  if (!bai) {
    return <p>Không tìm thấy bài viết!</p>
  }

  const xoaBai = () => {
    if (window.confirm("Bạn có chắc muốn xóa bài viết này?")) {
      alert("Đã xóa bài viết!")
      dieuHuong("/")
    }
  }

  return (
    <div className="chiTietBai">
      <h2>{bai.tieuDe}</h2>
      <p>Tác giả: {bai.tacGia}</p>
      <p>Ngày đăng: {bai.ngayDang}</p>
      <p>Thể loại: {bai.theLoai}</p>
      <img src={bai.anh} alt={bai.tieuDe} />
      <p>{bai.noiDung}</p>

      <div className="nutBaiViet">
        <button onClick={() => dieuHuong("/")}>Quay lại</button>
        <button onClick={() => dieuHuong(`/sua-bai/${bai.id}`)}>Chỉnh sửa</button>
        <button onClick={xoaBai}>Xóa bài viết</button>
      </div>
    </div>
  )
}
