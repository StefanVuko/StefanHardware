import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import App from "./App.tsx";
import "./styles/index.css";
import "./styles/homecontent.css";
import "./styles/author.css";
import "./styles/blogs.css";
import "./styles/keyword.css";
import "./styles/login.css";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
