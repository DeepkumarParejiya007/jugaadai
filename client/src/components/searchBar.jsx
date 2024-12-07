import React, { useState } from 'react';
import { FiSearch } from "react-icons/fi";
import '../all.css';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [tools, setTools] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/tools/search?query=${encodeURIComponent(query)}`);
      const data = await response.json();
      if (Array.isArray(data.data)) {
        setTools(data.data); // Update state with the fetched tools
        console.log(data.data);
      } else {
        console.error("Fetched data is not an array:", data);
      }
    } catch (err) {
      console.error('Error fetching search results:', err);
    }
  };

  return (
    <>
      <div className="search-container">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for tools..."
        />
        <button onClick={handleSearch}>
          <FiSearch />
        </button>
      </div>
      <div className='search-container-list'>
          {tools.map((tool) => (
            <a href={tool.website_url} target="_blank" rel="noopener noreferrer">
              <div key={tool.tool_id} className='search-container-card'>
                <h3>{tool.tool_name}</h3>
                <p>Description: {tool.description}</p>
                <p>Developer: {tool.developer}</p>
                <p>Release Date: {tool.release_date ? new Date(tool.release_date).toLocaleDateString() : "Unknown"}</p>
              </div>
            </a>
          ))}
      </div>
    </>
  );
};

export default SearchBar;
