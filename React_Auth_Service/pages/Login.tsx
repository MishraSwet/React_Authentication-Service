import React, { useState } from 'react';

const Login: React.FC = () => {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const handleLogin = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLogin(e.target.value);
    }
    const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    }
    return (
        <>
        <div>Login</div>
            <form>
                <label>Login</label>
                <input type="text" value={login} onChange={handleLogin}></input>
                <label>Password</label>
                <input type="text" value={password} onChange={handlePassword}></input>
            </form>
        </>
    );
}

export default Login