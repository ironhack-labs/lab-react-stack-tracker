import { Link } from "react-router-dom";
import "./Styles.css";

function HomePage(props) {
    return (
        <div>
            <h1>StackTracker: Discover Tech Stacks used by top companies</h1>
            <div className="companies-div">
                {props.companiesArray.map((company, index) => {  // key={index} somewhere, somehow
                    return (
                        <>
                            <Link to={`/company/${company.slug}`} className="company-link">
                                <p>{company.name}</p>
                                <img src={company.logo} alt={company.name} className="company-logo"/>
                            </Link>
                        </>
                    );
                })}
            </div>
        </div>
    );
}

export default HomePage;
