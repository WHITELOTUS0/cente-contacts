import React from "react";
import "./login.authenticate.css";
import PropTypes from "prop-types"

const LoginAuthenticate=({setToken})=>{
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();
    
    return(
        <div className="login-wrapper">
            <h1>Log in</h1>
        <form>
      <label>
        <p>Username</p>
        <input type="text" />
      </label>
      <label>
        <p>Password</p>
        <input type="password" />
      </label>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
    </div>
    )
}
LoginAuthenticate.propTypes={
    setToken:PropTypes.func.isRequired,
}

export default LoginAuthenticate;