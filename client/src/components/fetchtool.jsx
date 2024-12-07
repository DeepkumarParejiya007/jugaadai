import React, { useEffect, useState } from "react";
import "../all.css";

const Fetchtool = () => {
    const [tools, setTools] = useState([]);

  // Fetch tools from API
  useEffect(() => {
        const fetchTools = async () => {
        try {
            const response = await fetch("http://localhost:5000/api/tools/");
            const data = await response.json();

            console.log("Fetched tools:", data); // Add logging to verify fetched data

            // Ensure that the fetched data is in the correct format
            if (Array.isArray(data.data)) {
            setTools(data.data); // Update state with the fetched tools
            } else {
            console.error("Fetched data is not an array:", data);
            }
        } catch (error) {
            console.error("Error fetching tools:", error);
        }
        };
        fetchTools();
    }, []);
  return (
    <div className="tools-page">
        <h1>Available Tools</h1>
        <div className="tools-list">
            {tools.length > 0 ? (
                tools.map((tool) => (
                <div key={tool.tool_id} className="tool-card">
                    <h2>{tool.tool_name}</h2>
                    <p>
                    <strong>Description:</strong> {tool.description || 'No description available'}
                    </p>
                    <p>
                    <strong>Developer:</strong> {tool.developer || 'Unknown'}
                    </p>
                    <p>
                    <strong>Release Date:</strong> 
                    {tool.release_date ? new Date(tool.release_date).toLocaleDateString() : "Unknown"}
                    </p>
                    <a
                    href={tool.website_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    Visit Tool
                    </a>
                </div>
                
                ))
            ) : (
                <p>No tools available.</p>
            )}
        </div>
    </div>
  )
}

export default Fetchtool;