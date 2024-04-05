import React, { useState,useEffect } from 'react';

const Login: React.FC = () => {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const handleLogin = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLogin(e.target.value);
    }
    const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    }
    const submitHandler = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }
    useEffect(() => {
        fetch("api/something.com").then(res => res.json).then(data => console.log(data))
    }, []);
    return (
        <>
            <form onSubmit={submitHandler}>
                <div>
                    <label>Login</label>
                    <input type="text" value={login} onChange={handleLogin}></input>
                </div>
                <div>
                    <label>Password</label>
                    <input type="text" value={password} onChange={handlePassword}></input>
                </div>
                <button type="submit">Login</button>
            </form>
        </>
    );
}

export default Login