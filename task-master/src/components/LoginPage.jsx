import React, { useState } from 'react';
import Users from '../Data/userData.json';
import { useNavigate } from 'react-router-dom';

const LoginPage = ({user,setUser}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    const user = Users.find(u => u.email === email && u.password === password);

    if (user) {
      switch (user.role) {
        case 'student':
            setUser(user)
          navigate('/student');
          break;
        case 'teacher':
            setUser(user)
          navigate('/teacher');
          break;
        case 'admin':
            setUser(user)
          navigate('/admin');
          break;
        case 'superadmin':
            setUser(user)
          navigate('/superadmin');
          break;
        default:
          navigate('/');
          break;
      }
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <form style={{ backgroundColor: '#f5f5f5', padding: '20px', borderRadius: '8px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', maxWidth: '400px', width: '100%' }}>
        <label style={{ display: 'block', marginBottom: '8px' }}>Email:</label>
        <input style={{ width: '100%', padding: '8px', marginBottom: '16px', boxSizing: 'border-box' }}
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label style={{ display: 'block', marginBottom: '8px' }}>Password:</label>
        <input style={{ width: '100%', padding: '8px', marginBottom: '16px', boxSizing: 'border-box' }}
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button style={{ width: '100%', padding: '10px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
          type="button"
          onClick={handleLogin}
        >
          Login
        </button>

        {error && (
          <p style={{ color: 'red', marginTop: '10px' }}>{error}</p>
        )}
      </form>
    </div>
  );
};

export default LoginPage;
