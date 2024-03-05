import React from 'react';
import Users from '../Data/userData.json';
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'

const Admin = ({ user }) => {
  
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
 
      <Tabs id="admin-tabs" defaultActiveKey="teachers">
        <Tab eventKey="teachers" title="Teachers">
         
            {Users.map((u) => u.org === user.org && u.role === 'teacher' && (
              <div key={u._id}>{u.firstName}</div>
            ))}
         
        </Tab>
        <Tab eventKey="students" title="Students">
         
            {Users.map((u) => u.org === user.org && u.role === 'student' && (
              <div key={u._id}>{u.firstName}</div>
            ))}
         
        </Tab>
      </Tabs>
 
      <p>Your Organization is: {user.org}</p>
    </div>
)};

export default Admin;
