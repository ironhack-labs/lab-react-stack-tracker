import { useParams, Link } from "react-router-dom";
import "../App.css";


function TechCard ({tech}) {
    const {id} = useParams()
    return(
        <Link to={`/tech/${tech.slug}`} className="companyCard">
            <img src={tech.image} alt={tech.name} />
            <div>{tech.name}</div>
        </Link>
    )
}

export default TechCard;