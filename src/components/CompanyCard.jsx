import { useParams, Link } from "react-router-dom";
import "../App.css";


function CompanyCard ({company}) {
    const {id} = useParams()
    return(
        <Link to={`/company/${company.slug}`} className="companyCard">
            <img src={company.logo} alt={company.name} />
            <div>{company.name}</div>
        </Link>
    )
}

export default CompanyCard;