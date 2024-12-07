import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/navbar";

const AddTool = () => {
  const [toolData, setToolData] = useState({
    tool_name: "",
    tool_description: "",
    developer: "",
    release_date: "",
    website_url: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setToolData({ ...toolData, [name]: value });
    console.log(name, value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/tools/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(toolData),
      });
      const result = await response.json();
      if (response.ok) {
        alert("Tool added successfully!");
        navigate("/tools"); // Redirect to tools page
      } else {
        alert(result.message || "Error adding tool.");
      }
    } catch (error) {
      console.error("Error adding tool:", error);
      alert("Failed to connect to the server.");
    }
  };

  return (
    <div className="add-tool-page">
      <Navbar/>
      <h1>Add a New Tool</h1>
      <br />
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="tool_name">Tool Name</label>
          <input
            type="text"
            name="tool_name"
            id="tool_name"
            value={toolData.tool_name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="tool_description">Tool Description</label>
          <textarea
            name="tool_description"
            id="tool_description"
            value={toolData.tool_description}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="tool_developer">Developer</label>
          <input
            type="text"
            name="tool_developer"
            id="tool_developer"
            value={toolData.tool_developer}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="tool_release_date">Release Date</label>
          <input
            type="date"
            name="tool_release_date"
            id="tool_release_date"
            value={toolData.tool_release_date}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="tool_url">Website URL</label>
          <input
            type="url"
            name="tool_url"
            id="tool_url"
            value={toolData.tool_url}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Add Tool</button>
      </form>
    </div>
  );
};

export default AddTool;
