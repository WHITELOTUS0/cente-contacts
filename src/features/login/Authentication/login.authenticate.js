import React,{useState} from "react";
import "./login.authenticate.css";
import PropTypes from "prop-types";

const loginUser= async(credentials)=>{
    return await fetch('http://localhost:3600/login', {
   method: 'POST',
   headers: {
     'Content-Type': 'application/json'
   },
   body: JSON.stringify(credentials)
 })
   .then(data => data.json())
}


const LoginAuthenticate=({setToken})=>{
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = async e => {
        e.preventDefault();
        const token = await loginUser({
          username,
          password
        });
        setToken(token);
      }

    return(
        <div className="login-wrapper">
            <h1>Log in</h1>
        <form onSubmit={handleSubmit}>
      <label>
        <p>Username</p>
        <input type="text" onChange={e => setUserName(e.target.value)}/>
      </label>
      <label>
        <p>Password</p>
        <input type="password" onChange={e => setPassword(e.target.value)}/>
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