import React from 'react'
import Users from '../Data/userData.json';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';


const SuperAdmin = ({user}) => {
  const containerStyle = {
    textAlign: 'center',
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    maxWidth: '400px',
    margin: '20px auto',
    backgroundColor: '#f5f5f5',
  };
  return (
    <div style={containerStyle}>
    <h2>Welcome, {user.firstName}!</h2>

    <Tabs id="superadmin-tabs" defaultActiveKey="teachers">
      <Tab eventKey="teachers" title="Teachers">
        <div>
          {Users.map((u) => u.role === 'teacher' && (
            <div key={u._id}>{u.firstName}</div>
          ))}
        </div>
      </Tab>
      <Tab eventKey="students" title="Students">
        <div>
          {Users.map((u) => u.role === 'student' && (
            <div key={u._id}>{u.firstName}</div>
          ))}
        </div>
      </Tab>
      <Tab eventKey="admins" title="Admins">
        <div>
          {Users.map((u) => u.role === 'admin' && (
            <div key={u._id}>{u.firstName}</div>
          ))}
        </div>
      </Tab>
    </Tabs>

    <p>You are the super Admin: {user.role}</p>
  </div>
  )
}

export default SuperAdmin