import { useParams, useSearchParams } from "react-router-dom";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function CompanyPage(props) {
  const { companies } = props;

  // Get the project name from URL parameters
  const { companySlug } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();

  // Find the first company that matches the condition company.name === companyName
  const company = companies.find((company) => company.name === companySlug);

  // If it doesn't find the project, notify the user
  if (!company) return <div>Company not Found.</div>;

  return (
    <div>
      <h1>{company.name} Details</h1>
      <div className="details">
        <div className="name">{company.name}</div>
        <div className="website">{company.website}</div>
        <div className="description">{company.description}</div>
        <img className="company-img" src={company.logo} alt="logo" />
      </div>

      <h2>Tech Stack</h2>
      <div className="tech-stack">
        {company.techStack.map((techStack, index) => (
          <div key={index}>
            <Link to={`/tech/${techStack.slug}`}>
              <h3>{techStack.name}</h3>
              <img className="tech-img" src={techStack.image} alt={techStack.name} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}


/*

<div className="company">
      {companies.map((company) => (
        <div key={company.id}>
          <Link to={`/company/${company.name}`}>
            <h2>{company.name}</h2>
            <img className="company-img" src={company.logo} alt="logo" />
          </Link>
        </div>
      ))}
    </div>


*/

CompanyPage.propTypes = {
  companies: PropTypes.array.isRequired,
};

export default CompanyPage;

/*
"techStack": [
      {
        "name": "JavaScript",
        "slug": "javascript",
        "image": "https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/m3/lab-react-stack-tracker/logos/javascript-logo.png"
      },


*/

/*
For each technology, display its name and image, and wrap them in a React Router Link component to make them clickable links. 
To allow users to navigate to a technology details page, embed the technology slug in the URL of the Link.

*/
