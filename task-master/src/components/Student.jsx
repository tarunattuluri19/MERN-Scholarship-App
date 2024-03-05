import React from 'react';

const StudentPage = ({ user }) => {
  
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Welcome, {user.firstName}!</h2>
      <div style={{ marginTop: '20px' }}>
        <p><strong>Teacher:</strong> {user.teacher}</p>
        <p><strong>Subject:</strong> {user.major}</p>
        <p><strong>Class:</strong> {user.class}</p>
      </div>
    </div>
  );
};

export default StudentPage;
