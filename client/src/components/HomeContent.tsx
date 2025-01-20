import { useEffect, useState } from "react";
import Author from "./Author";
import BlogPreview from "./BlogPreview";
import EmptySpace from "./EmptySpace";

function HomeContent() {
  const [pinnedBlogs, setPinnedBlogs] = useState([]);

  useEffect(() => {
    fetch(`/api/getPinnedBlogs`, {
      method: "GET",
    })
      .then((resp) => resp.json())
      .then((resp) => setPinnedBlogs(resp));
  }, []);

  return (
    <>
      <div className="home--image--container">
        <img src="/images/home.jpg"></img>
        <div className="home--image--text">
          <div className="home--image--heading">
            <h1>Stefan's Hardware Blog</h1>
          </div>
          <div className="home--image--p">
            <p>My project for WFP-2 to measure SEO results</p>
          </div>
        </div>
      </div>
      <EmptySpace></EmptySpace>
      <div className="home--author--container">
        <Author></Author>
      </div>
      <EmptySpace></EmptySpace>
      <div className="home--blog--container">
        <div className="home--blog--heading">
          <h2>Pinned Blogs</h2>
        </div>
        <div className="home--blog--preview">
          {pinnedBlogs.map((blog: any) => {
            return (
              <BlogPreview
                key={blog.id}
                heading={blog.heading}
                summary={blog.summary}
                id={blog.id}
                keywords={blog.keywords}
              ></BlogPreview>
            );
          })}
        </div>
      </div>
      <EmptySpace></EmptySpace>
    </>
  );
}

export default HomeContent;
