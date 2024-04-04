import React, { useState } from 'react';

const Signup: React.FC = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    return (
        <>
            <div>
                <label htmlFor='Name'>FirstName</label>
                <input type="text" value={name} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}></input>
            </div>
            <div>
                <label htmlFor='Email'>Email</label>
                <input type="email" value={email} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}></input>
            </div>
            <div>
                <label htmlFor='Password'>Password</label>
                <input type="password" value={password} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}></input>
            </div>
        </>
    );
}

export default Signup;