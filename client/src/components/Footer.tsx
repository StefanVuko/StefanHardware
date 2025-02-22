import { AiFillGithub } from "react-icons/ai"
import { FaUniversity } from "react-icons/fa"
import { AiFillMail } from "react-icons/ai"

function Footer() {
  return (
    <footer>
      <div className="footer--text">
        <p>Impressum © Copyright 2025 </p>
      </div>
      <div className="footer--icons">
        <ul className="footer--iconlist">
          <li className="footer--item"><a href="https://github.com/StefanVuko"><AiFillGithub /></a></li>
          <li className="footer--item"><a href="https://www.fh-campuswien.ac.at"><FaUniversity /></a></li>
          <li className="footer--item"><a href="mailto:stefanvuko16@outlook.de"><AiFillMail /></a></li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer