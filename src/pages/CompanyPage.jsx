import { Link, useParams } from "react-router-dom";
import "./Styles.css";

function CompanyPage(props) {
    const { companySlug } = useParams();

    const companyDetails = props.companiesArray.find((company) => {
        return company.slug == companySlug;
    });

    console.log(companyDetails);

    return (
        <>
            <div className="company-details">
                <div className="company-link">
                    <img src={companyDetails.logo} alt={companyDetails.name} className="company-logo" />
                </div>
                <div>
                    <h1>{companyDetails.name}</h1>
                    <p>{companyDetails.description}</p>
                    <h2>{companyDetails.website}</h2>
                </div>
            </div>
            <div className="company-stack">
                {companyDetails.techStack.map((tech) => {
                    return (
                        <>
                            <Link to={`/tech/${tech.slug}`} className="tech-link">
                                <img src={tech.image} alt={tech.name} className="tech-image" />
                                <h2>{tech.name}</h2>
                            </Link>
                        </>
                    );
                })}
            </div>
            <p>
                <Link to="/">Home</Link>
            </p>
        </>
    );
}

export default CompanyPage;
