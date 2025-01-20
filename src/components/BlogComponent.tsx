import { useEffect, useState } from "react";
import { CiTrash } from "react-icons/ci";
import { CiPen } from "react-icons/ci";
import { CiBookmarkPlus, CiBookmarkRemove } from "react-icons/ci";
import { Link } from "react-router";
import Modal from "react-modal";
import EditBlog from "./EditBlog";
import Keyword from "./Keyword";

Modal.setAppElement("#root");

function BlogComponent() {
  function splitKeywords(keywords: any) {
    return keywords.split(";");
  }

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

  const updateBlogPinStatus = async (id: string) => {
    fetch(`http://localhost:5000/updateBlogPinStatus?id=${id}`, {
      method: "PATCH",
    }).then((resp) => console.log(resp.status));
  };

  const [blog, setBlog] = useState({
    heading: "",
    date: "",
    type: "",
    text: "",
    summary: "",
    id: "",
    keywords: "",
    isPinned: "",
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    let id = getId();
    getBlogData(id ? id : "");
  }, []);

  return (
    <>
      <div className="blog--container">
        <div className="blog--information--container">
          <div className="blog--header--container">
            <h2>{blog.heading}</h2>
            {splitKeywords(blog.keywords).map((keyword: any) => {
              return <Keyword key={keyword} text={keyword} />;
            })}
          </div>
          <div className="blog--info--container">
            <div className="blog--date--container">
              <p>Date: {blog.date}</p>
            </div>
            <div className="blog--type--container">
              <p>Type: {blog.type}</p>
            </div>
          </div>
        </div>
        <div className="blog--text--container">
          <p>{blog.text}</p>
          <CiPen onClick={handleOpenModal} className="blog--text--edit" />
          <Modal
            isOpen={isModalOpen}
            onRequestClose={handleCloseModal}
            contentLabel="Edit Blog Modal"
            style={{
              content: {
                backgroundColor: "var(--background--dark)",
                top: "50%",
                left: "50%",
                right: "auto",
                bottom: "auto",

                transform: "translate(-50%, -50%)",
              },
              overlay: {
                backgroundColor: "rgba(0, 0, 0, 0.8)",
              },
            }}
          >
            <EditBlog
              key={blog.id}
              heading={blog.heading}
              summary={blog.summary}
              text={blog.text}
              type={blog.type}
              id={blog.id}
              date={blog.date}
              keywords={blog.keywords}
              isPinned={blog.isPinned}
            ></EditBlog>
          </Modal>
          <Link onClick={() => deleteBlog(blog.id)} to="/">
            <CiTrash className="blog--text--delete" />
          </Link>
          <Link onClick={() => updateBlogPinStatus(blog.id)} to="/">
            {blog.isPinned ? (
              <CiBookmarkRemove className="blog--text--pin" />
            ) : (
              <CiBookmarkPlus className="blog--text--pin" />
            )}
          </Link>
        </div>
      </div>
    </>
  );
}

export default BlogComponent;
