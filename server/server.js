const express = require("express");
const cors = require("cors");
const blogs = require("./data/defaultBlogs");
const pinnedBlogs = require("./data/pinnedBlogs");

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get("/pog", (req, res) => {
  res.json("hi");
  console.log("req");
});

app.get("/getBlogs", (req, res) => {
  res.send(blogs);
});

app.get("/getPinnedBlogs", (req, res) => {
  res.send(pinnedBlogs);
});

app.get("/getBlogById", (req, res) => {
  const id = req.query.id;
  blogs.blogs.forEach((blog) => {
    if (blog.id == id) res.send(blog);
    return;
  });
});

app.post("createnewBlog", (req, res) => {
  console.log("test");
});

app.put("updateBlogById", (req, res) => {
  console.log("test");
});

app.delete("/deleteBlogById", (req, res) => {
  const id = req.query.id;
  let foundBlog = {};

  blogs.blogs.forEach((blog) => {
    if (blog.id == id) foundBlog = blog;
    return;
  });

  const index = blogs.blogs.indexOf(foundBlog);
  blogs.blogs.splice(index, 1);
});

app.listen(port, () => console.log(`Listening on port ${port}`));
