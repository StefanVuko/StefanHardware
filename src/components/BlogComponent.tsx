import { useEffect, useState } from "react";
import { CiTrash } from "react-icons/ci";
import { CiPen } from "react-icons/ci";
import { Link } from "react-router";

function BlogComponent() {
  function getId() {
    const url = window.location.href;

    const queryString = url.split("?")[1];
    const params = new URLSearchParams(queryString);
    const id = params.get("id");

    return id;
  }

  const getBlogData = async (id: string) => {
    fetch(`http://localhost:5000/getBlogById?id=${id}`, {
      method: "GET",
    })
      .then((resp) => resp.json())
      .then((resp) => setBlog(resp));
  };

  const deleteBlog = async (id: string) => {
    console.log("deleted");
    fetch(`http://localhost:5000/deleteBlogById?id=${id}`, {
      method: "DELETE",
    });
  };

  const [blog, setBlog] = useState({
    heading: "",
    date: "",
    type: "",
    text: "",
    id: "",
  });

  useEffect(() => {
    let id = getId();
    getBlogData(id ? id : "");
  });

  return (
    <>
      <div className="blog--container">
        <div className="blog--information--container">
          <div className="blog--header--container">
            <h2>{blog.heading}</h2>
          </div>
          <div className="blog--info--container">
            <div className="blog--date--container">
              <p>{blog.date}</p>
            </div>
            <div className="blog--type--container">
              <p>Type: {blog.type}</p>
            </div>
          </div>
        </div>
        <div className="blog--text--container">
          <p>{blog.text}</p>
          <CiPen className="blog--text--edit" />
          <Link onClick={() => deleteBlog(blog.id)} to="/">
            <CiTrash className="blog--text--delete" />
          </Link>
        </div>
      </div>
    </>
  );
}

export default BlogComponent;
