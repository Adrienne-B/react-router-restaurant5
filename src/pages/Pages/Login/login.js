import React, { useState } from 'react';
import './Login.css';

function Login () {
    const [username, setUsername] = useState('');
    const [pwd, setPwd] = useState('');

    const handleUsernameChange = (val) => {
        setUsername(val)
    }

    const handlePwd = (val) => {
        setPwd(val)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Login successful");
        setUsername("");
        setPwd("");
    }

    
   /*  const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false); */

    return (
        <div className="form">
            <form onSubmit={handleSubmit}>
                <div className="input-container">
                    <label>Username </label>
                    <input type="text" name="uname" onChange={(e) => handleUsernameChange(e.target.value)} required />
                    {/* {renderErrorMessage("uname")} */}
                </div>
                <div className="input-container">
                    <label>Password </label>
                    <input type="password" name="pass" onChange={(e) => handlePwd(e.target.value)} required />
                    {/* {renderErrorMessage("pass")} */}
                </div>
                <div className="button-container">
                    <input type="submit" />
                </div>
            </form>
        </div>
    )
}

export default Login;


