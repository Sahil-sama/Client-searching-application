// src/components/UserInfo.js
import React, { useState } from 'react';
import './UserInfo.css';

function UserInfo({ user }) {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className={`user-info ${showDetails ? 'expanded' : ''}`}>
      <div className="user-summary">
        <h2 className="user-heading">{user.name}</h2>
        <p className="user-data">Email: {user.email}</p>
        <p className="user-data">Company Name: {user.company.name}</p>
      </div>
      <button onClick={toggleDetails}>
        {showDetails ? 'Hide Details' : 'View Details'}
      </button>
      {showDetails && (
        <div className="user-details">
          <div className="section">
            <h3 className="section-heading">Address:</h3>
            <p className="section-data">Street: {user.address.street}</p>
            <p className="section-data">Suite: {user.address.suite}</p>
            <p className="section-data">City: {user.address.city}</p>
            <p className="section-data">Zipcode: {user.address.zipcode}</p>
          </div>
          <div className="section">
            <h3 className="section-heading">Geo Location:</h3>
            <p className="section-data">Latitude: {user.address.geo.lat}</p>
            <p className="section-data">Longitude: {user.address.geo.lng}</p>
          </div>
          <div className="section">
            <h3 className="section-heading">Company:</h3>
            <p className="section-data">Company Name: {user.company.name}</p>
            <p className="section-data">Catch Phrase: {user.company.catchPhrase}</p>
            <p className="section-data">Business: {user.company.bs}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default UserInfo;



// src/components/UserInfo.js
/*import React from 'react';
import './Userinfo.css'; 
function UserInfo({ user }) {
  return (
    <div className="user-info">
      <h2>{user.name}</h2>
      <p>Username: {user.username}</p>
      <p>Email: {user.email}</p>
      <h3>Address:</h3>
      <p>Street: {user.address.street}</p>
      <p>Suite: {user.address.suite}</p>
      <p>City: {user.address.city}</p>
      <p>Zipcode: {user.address.zipcode}</p>
      <h3>Geo Location:</h3>
      <p>Latitude: {user.address.geo.lat}</p>
      <p>Longitude: {user.address.geo.lng}</p>
      <p>Phone: {user.phone}</p>
      <p>Website: {user.website}</p>
      <h3>Company:</h3>
      <p>Company Name: {user.company.name}</p>
      <p>Catch Phrase: {user.company.catchPhrase}</p>
      <p>Business: {user.company.bs}</p>
    </div>
  );
}

export default UserInfo;*/
