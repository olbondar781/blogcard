import BlogCard from "./components/blogCard/blogCard"

export default function App() {
  return (
    <div style={{ padding: "40px" }}>
      <BlogCard
        image="https://via.placeholder.com/400x200"
        tag="Technology"
        date="21 Nov 2024"
        title="The Future of Web Development"
        description="We explore the latest trends that will shape the future of web development in the next few years."
        author="Mark Johnson"
      />
    </div>
  )
}
