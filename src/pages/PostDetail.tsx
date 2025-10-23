import React from "react"
import { useParams, useNavigate } from "react-router-dom"

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
