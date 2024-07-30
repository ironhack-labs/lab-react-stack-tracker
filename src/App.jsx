import React, { useState, useEffect } from "react";
import companiesData from "./companies.json";
import technologiesData from "./technologies.json";
import "./app.css";

const App = () => {
  const [companies, setCompanies] = useState([]);
  const [technologies, setTechnologies] = useState([]);

  useEffect(() => {
    // Set the state with the JSON data
    setCompanies(companiesData);
    setTechnologies(technologiesData);
  }, []);

  return (
    <div className="App">
      <h1>Companies and Technologies</h1>
      {/* Further implementation will go here */}
    </div>
  );
};

export default App;
