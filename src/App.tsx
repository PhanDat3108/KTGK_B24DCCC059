import React, { useState } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import TrangChu from "./pages/TrangChu"
import TaoBaiViet from "./pages/TaoBaiViet"
import PostDetail from "./pages/PostDetail"
import PostEdit from "./pages/PostEdit"

interface Bai {
  id: number
  tieuDe: string
  noiDung: string
}

export default function App() {
  const [ds, setDs] = useState<Bai[]>([
    { id: 1, tieuDe: "Bài viết 1", noiDung: "Nội dung bài viết 1" },
    { id: 2, tieuDe: "Bài viết 2", noiDung: "Nội dung bài viết 2" },
  ])

  const capNhat = (baiMoi: Bai) => {
    setDs(ds.map(b => (b.id === baiMoi.id ? baiMoi : b)))
  }

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<TrangChu />} />
        <Route path="/tao-bai" element={<TaoBaiViet />} />
        <Route path="/bai/:id" element={<PostDetail />} />
        <Route path="/bai/sua/:id" element={<PostEdit ds={ds} capNhat={capNhat} />} />
      </Routes>
    </Router>
  )
}
