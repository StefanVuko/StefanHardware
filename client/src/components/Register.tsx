import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { Link } from "react-router";

function Register() {
  const { setUsername } = useContext(AuthContext);

  const register = () => {
    const username = (document.getElementById("username") as HTMLInputElement)
      .value;
    const password = (document.getElementById("password") as HTMLInputElement)
      .value;
    const user = {
      username,
      password,
    };

    fetch(`/api/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    }).then((resp) => (resp.status == 200 ? setUsername(username) : ""));
  };

  return (
    <>
      <div className="login--container">
        <h2>Register</h2>
        <div className="login--form--container">
          <form>
            <label className="login--label" htmlFor="username">
              Username
            </label>
            <br></br>
            <input id="username" className="login--input" type="text"></input>
            <br></br>
            <label className="login--label" htmlFor="password">
              Password
            </label>
            <br></br>
            <input
              id="password"
              className="login--input"
              type="password"
            ></input>
            <br></br>
            <Link to="/">
              <input
                className="edit--blog--button"
                type="submit"
                value="Register"
                onClick={register}
              ></input>
            </Link>
          </form>
        </div>
      </div>
    </>
  );
}

export default Register;
