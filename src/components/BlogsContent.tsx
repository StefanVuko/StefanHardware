import { useState, useEffect } from "react";
import BlogPreview from "./BlogPreview";
import { CiCirclePlus } from "react-icons/ci";
import Modal from "react-modal";
import AddBlog from "./AddBlog";

function BlogsContent() {
  const [blogs, setBlogs] = useState([]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

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
        <CiCirclePlus
          onClick={handleOpenModal}
          className="blogs--container--add"
        />
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
              backgroundColor: "rgba(0, 0, 0, 0.8)", // Change this to set the dimming color
            },
          }}
        >
          <AddBlog />
        </Modal>
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
