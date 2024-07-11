import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import companies from "../companies.json";
import { useState } from "react";
import HomePage from "./HomePage";
function CompanyPage() {
  const { slug } = useParams();
  const company = companies.find((company) => company.slug === slug);
  if (!company) {
    return <div>Company not found</div>;
  }
  const [techList, setTechList] = useState(null);

  return (
    <div>
      <div id="companyPage">
        <img src={company.logo} alt={company.name} width={"200px"} />
        <div id="companyInfo">
          <h1>{company.name}</h1>
          <p>{company.description}</p>
          <Link to="/">Back to Home</Link>
        </div>
      </div>
      {company.techStack.map((tech) => (
        <Link to={`/technology/${tech.id}`}>
          <img src={tech.image} alt={tech.name} width={"100px"} id="techLogo" />
        </Link>
      ))}
    </div>
  );
}

export default CompanyPage;
