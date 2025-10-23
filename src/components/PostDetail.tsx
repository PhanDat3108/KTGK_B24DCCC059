import { useParams } from "react-router-dom"

export default function PostDetail() {
  const { id } = useParams()

  return (
    <div className="chiTietBai">
      <h2>Chi tiết bài viết #{id}</h2>
      <p>Đây là nội dung chi tiết của bài viết.</p>
    </div>
  )
}
