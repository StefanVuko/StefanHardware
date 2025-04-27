const express = require("express");
const path = require("path");
const cors = require("cors");
const blogs = require("./data/defaultBlogs");

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

app.get("/pog", (req, res) => {
  res.json("hi");
  console.log("req");
});

app.get("/getBlogs", (req, res) => {
  res.send(blogs);
});

app.get("/getPinnedBlogs", (req, res) => {
  let pinnedBlogs = [];

  blogs.blogs.forEach((blog) => {
    if (blog.isPinned) {
      pinnedBlogs.push(blog);
    }
  });

  res.send(pinnedBlogs);
});

app.get("/getBlogById", (req, res) => {
  const id = req.query.id;
  blogs.blogs.forEach((blog) => {
    if (blog.id == id) res.send(blog);
    return;
  });
});

app.post("/createNewBlog", (req, res) => {
  const { heading } = req.body;
  const { text } = req.body;
  const { summary } = req.body;
  const { date } = req.body;
  const { type } = req.body;
  const { isPinned } = req.body;
  const { keywords } = req.body;
  const id = getRandomNumber(1, 10000);

  const newBlog = {
    heading,
    text,
    summary,
    id,
    date,
    type,
    keywords,
    isPinned,
  };

  blogs.blogs.push(newBlog);

  res.sendStatus(200);
});

app.put("/updateBlog", (req, res) => {
  const { heading } = req.body;
  const { text } = req.body;
  const { summary } = req.body;
  const { id } = req.body;
  const { date } = req.body;
  const { type } = req.body;
  const { isPinned } = req.body;
  const { keywords } = req.body;

  const updatedBlog = {
    heading,
    text,
    summary,
    id,
    date,
    type,
    keywords,
    isPinned,
  };
  let index = 0;

  blogs.blogs.forEach((blog) => {
    if (blog.id == id) {
      index = blogs.blogs.indexOf(blog);
      return;
    }
  });

  blogs.blogs[index] = updatedBlog;

  res.sendStatus(200);
});

app.patch("/updateBlogPinStatus", (req, res) => {
  const id = req.query.id;
  blogs.blogs.forEach((blog) => {
    if (blog.id == id) {
      index = blogs.blogs.indexOf(blog);
      return;
    }
  });

  blogs.blogs[index].isPinned = !blogs.blogs[index].isPinned;

  res.sendStatus(200);
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

app.use(express.static(path.join(__dirname, "dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

app.listen(port, () => console.log(`Listening on port ${port}`));
