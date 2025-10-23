import React from "react"
import { useNavigate } from "react-router-dom"
import "./TheBaiViet.css"

interface Bai {
  id: number
  tieuDe: string
  tacGia: string
  moTa: string
  anh: string
}

export default function PostCard({ bai, xoa }: { bai: Bai; xoa: (id: number) => void }) {
  const dieuHuong = useNavigate()

  return (
    <div className="theBaiViet">
      <img src={bai.anh} alt={bai.tieuDe} />
      <h3>{bai.tieuDe}</h3>
      <p>Tác giả: {bai.tacGia}</p>
      <p>{bai.moTa.slice(0, 100)}...</p>
      <button onClick={() => dieuHuong(`/bai/${bai.id}`)}>Đọc thêm</button>
      <button onClick={() => xoa(bai.id)}>Xóa</button>
    </div>
  )
}


