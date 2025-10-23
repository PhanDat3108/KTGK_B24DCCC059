import { useState } from "react"

export default function PostForm() {
  const [tieuDe, doiTieuDe] = useState("")
  const [tacGia, doiTacGia] = useState("")
  const [noiDung, doiNoiDung] = useState("")

  const luuBai = () => {
    console.log("Lưu bài:", { tieuDe, tacGia, noiDung })
  }

  return (
    <div className="formBai">
      <h2>Viết bài mới</h2>
      <input className="oNhap" placeholder="Tiêu đề" value={tieuDe} onChange={(e) => doiTieuDe(e.target.value)} />
      <input className="oNhap" placeholder="Tác giả" value={tacGia} onChange={(e) => doiTacGia(e.target.value)} />
      <textarea className="oNhap" placeholder="Nội dung" value={noiDung} onChange={(e) => doiNoiDung(e.target.value)} />
      <button className="nutLuu" onClick={luuBai}>Lưu bài</button>
    </div>
  )
}
