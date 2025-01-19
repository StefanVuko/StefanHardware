import { AiOutlineHome } from "react-icons/ai";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <div className="navbar--left">
        <ul>
          <li className="navbar--item">
            <Link to="/">
              <AiOutlineHome></AiOutlineHome>
            </Link>
          </li>
          <li className="navbar--item">
            <Link to="/blogs">Blogs </Link>
          </li>
        </ul>
      </div>
      <div className="navbar--right">
        <ul>
          <li className="navbar--item">
            <Link to="/about">About Me</Link>
          </li>
          <li className="navbar--item">
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
