import { useParams, useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"

interface Bai {
  id: number
  tieuDe: string
  noiDung: string
}

interface Props {
  ds: Bai[]
  capNhat: (bai: Bai) => void
}

export default function PostEdit({ ds, capNhat }: Props) {
  const { id } = useParams()
  const nav = useNavigate()
  const bai = ds.find(b => b.id === Number(id))

  const [tieuDe, setTieuDe] = useState("")
  const [noiDung, setNoiDung] = useState("")

  useEffect(() => {
    if (bai) {
      setTieuDe(bai.tieuDe)
      setNoiDung(bai.noiDung)
    }
  }, [bai])

  const xuLyCapNhat = (e: React.FormEvent) => {
    e.preventDefault()
    if (!bai) return
    capNhat({ ...bai, tieuDe, noiDung })
    alert("Cập nhật thành công!")
    nav(`/posts/${bai.id}`)
  }

  const huy = () => {
    if (bai) nav(`/posts/${bai.id}`)
  }

  if (!bai) return <p>Không tìm thấy bài viết!</p>

  return (
    <div className="editPage">
      <h2>Chỉnh sửa bài viết #{bai.id}</h2>
      <form onSubmit={xuLyCapNhat}>
        <div>
          <label>Tiêu đề:</label>
          <input
            value={tieuDe}
            onChange={e => setTieuDe(e.target.value)}
          />
        </div>

        <div>
          <label>Nội dung:</label>
          <textarea
            value={noiDung}
            onChange={e => setNoiDung(e.target.value)}
            rows={10}
          />
        </div>

        <div>
          <button type="submit">Cập nhật</button>
          <button type="button" onClick={huy}>Hủy</button>
        </div>
      </form>
    </div>
  )
}
