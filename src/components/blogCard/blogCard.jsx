import "./blogCard.css"

export default function BlogCard({ image, tag, date, title, description, author }) {
  return (
    <div className="blog-card">
      <img src={image} className="blog-image" />
      <span className="blog-tag">{tag}</span>
      <span className="blog-date">{date}</span>
      <h2 className="blog-title">{title}</h2>
      <p className="blog-description">{description}</p>
      <div className="blog-author">{author}</div>
    </div>
  )
}
