import React from 'react';
import Users from '../Data/userData.json'

const Teacher = ({ user }) => {
    
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

  const greetingStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '10px',
  };

  const studentsListStyle = {
    listStyle: 'none',
    padding: '0',
    margin: '0',
  };

  const studentItemStyle = {
    padding: '8px',
    margin: '4px',
    borderRadius: '4px',
    backgroundColor: '#fff',
  };

  return (
    <div style={containerStyle}>
      <div style={greetingStyle}>Hi {user.firstName}</div>

      <div>
        <p>Your Students:</p>
        <ul style={studentsListStyle}>
          {Users.map((u) => (
            u.teacher === user.firstName && (
              <li key={u._id} style={studentItemStyle}>
                {u.firstName}
              </li>
            )
          ))}
        </ul>
        <div>Your Organisation is: {user.org}</div>
      </div>
    </div>
  );
};

export default Teacher;
