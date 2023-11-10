import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

function TechnologyPage(props) {

    const {techSlug} = useParams();
    const techDetails = props.techArr.find((tech) => {
      return tech.slug === techSlug;
    });

    return (

    props.techArr.map((tech, i, arr) => {
    
    if (techDetails) {
      return (
        <Link to={`./tech/${tech.slug}`}>
        <div className="tech-slug-container">
          <img src={techDetails.image} />
          <p className="tech-slug-name">{techDetails.name}</p>
        </div>
      </Link>
      )
    }})
    )
}

export default TechnologyPage;
