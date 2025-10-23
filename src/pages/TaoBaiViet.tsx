import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import "./TaoBaiViet.css"


export default function TaoBaiViet() {
  const [tieuDe, setTieuDe] = useState("")
  const [tacGia, setTacGia] = useState("")
  const [anh, setAnh] = useState("")
  const [noiDung, setNoiDung] = useState("")
  const [theLoai, setTheLoai] = useState("Công nghệ")
  const dieuHuong = useNavigate()

  const guiBai = (e: React.FormEvent) => {
    e.preventDefault()

    if (tieuDe.trim().length < 10) {
      alert("Tiêu đề phải có ít nhất 10 ký tự!")
      return
    }
    if (tacGia.trim().length < 3) {
      alert("Tên tác giả phải có ít nhất 3 ký tự!")
      return
    }
    if (noiDung.trim().length < 50) {
      alert("Nội dung phải có ít nhất 50 ký tự!")
      return
    }

    const ngayDang = new Date().toLocaleDateString("vi-VN")
    const baiMoi = {
      id: Date.now(),
      tieuDe,
      tacGia,
      anh,
      noiDung,
      theLoai,
      ngayDang,
    }

    console.log("Bài viết mới:", baiMoi)
    alert("Đăng bài thành công!")
    dieuHuong("/")
  }

  return (
    <div className="tao-bai">
      <h2>Tạo bài viết mới</h2>
      <form onSubmit={guiBai} className="form-bai">
        <label>Tiêu đề:</label>
        <input
          type="text"
          value={tieuDe}
          onChange={(e) => setTieuDe(e.target.value)}
          placeholder="Nhập tiêu đề bài viết"
        />

        <label>Tác giả:</label>
        <input
          type="text"
          value={tacGia}
          onChange={(e) => setTacGia(e.target.value)}
          placeholder="Nhập tên tác giả"
        />

        <label>URL ảnh thumbnail:</label>
        <input
          type="text"
          value={anh}
          onChange={(e) => setAnh(e.target.value)}
          placeholder="Dán link ảnh thumbnail"
        />

        <label>Nội dung:</label>
        <textarea
          rows={10}
          value={noiDung}
          onChange={(e) => setNoiDung(e.target.value)}
          placeholder="Nhập nội dung bài viết..."
        />

        <label>Thể loại:</label>
        <select value={theLoai} onChange={(e) => setTheLoai(e.target.value)}>
          <option>Công nghệ</option>
          <option>Du lịch</option>
          <option>Ẩm thực</option>
          <option>Đời sống</option>
          <option>Khác</option>
        </select>

        <div className="nutForm">
          <button type="submit">Đăng bài</button>
          <button type="button" onClick={() => dieuHuong("/")}>
            Hủy
          </button>
        </div>
      </form>
    </div>
  )
}
