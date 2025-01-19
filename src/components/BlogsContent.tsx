import { useState, useEffect } from "react";
import BlogPreview from "./BlogPreview";
import { CiCirclePlus } from "react-icons/ci";

function BlogsContent() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/getBlogs`, {
      method: "GET",
    })
      .then((resp) => resp.json())
      .then((resp) => setBlogs(resp.blogs));
  }, []);

  return (
    <>
      <div className="blogs--heading--container">
        <h2>My Blogs</h2>
      </div>
      <div className="blogs--container">
        <CiCirclePlus className="blogs--container--add" />
        {blogs.map((blog: any) => {
          return (
            <BlogPreview
              key={blog.id}
              heading={blog.heading}
              summary={blog.summary}
              id={blog.id}
            ></BlogPreview>
          );
        })}
      </div>
    </>
  );
}

export default BlogsContent;
