import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const nav = useNavigate();

  const handleSignUp = (e) => {
     e.preventDefault(); 
    nav("/");
  };

  return (
    <div>
      <h2>Sign up</h2>
      <form onClick={handleSignUp}>
      <div>
          <label>Name:</label>
          <input type="name" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button >Sign up</button>
      </form>
      <p>
        Already have an account?
        <Link to="/login">
        <button type="button">Log in</button>
      </Link>
      </p>
    </div>
  );
}

export default SignUp;
