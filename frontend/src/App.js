// src/components/App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserInfo from './components/UserInfo';
import './App.css'; // Import your CSS file for the entire application

function App() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [visibleUsers, setVisibleUsers] = useState(3); // Initially, show 3 users
  const [searchQuery, setSearchQuery] = useState('');
  const [searchCategory, setSearchCategory] = useState('name'); // Default search category

  useEffect(() => {
    axios
      .get('http://localhost:3001/')
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => {
        setError('Failed to fetch data from the API');
      });
  }, []);

  const loadMore = () => {
    // Increase the number of visible users by 3
    setVisibleUsers(visibleUsers + 3);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setSearchCategory(event.target.value);
  };

  const filteredUsers = data
    .filter((user) => {
      const userValue = searchCategory === 'name'
        ? user.name
        : searchCategory === 'company.name'
        ? user.company.name
        : searchCategory === 'address.city'
        ? user.address.city
        : ''; // Handle unknown category
      return userValue.toLowerCase().includes(searchQuery.toLowerCase());
    })
    .slice(0, visibleUsers);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Top Heading</h1>
      </header>

      {error && <p>{error}</p>}

      <div className="search-bar">
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <select value={searchCategory} onChange={handleCategoryChange}>
          <option value="name">Name</option>
          <option value="company.name">Company Name</option>
          <option value="address.city">City</option>
        </select>
      </div>

      {filteredUsers.map((user) => (
        <UserInfo key={user.id} user={user} />
      ))}

      {visibleUsers < data.length && (
        <button className="load-more-button" onClick={loadMore}>
          Load More
        </button>
      )}
    </div>
  );
}

export default App;
// src/components/App.js
/*import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserInfo from './components/UserInfo';
import './App.css'; 

function App() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get('http://localhost:3001/') // Assuming your server is running on the same host
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => {
        setError('Failed to fetch data from the API');
      });
  }, []);

  return (
    <div className="App">
      {error && <p>{error}</p>}
      {data.map((user) => (
        <UserInfo key={user.id} user={user} />
      ))}
    </div>
  );
}

export default App;*/
