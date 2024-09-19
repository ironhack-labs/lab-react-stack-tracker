import { Link, useParams, useSearchParams} from "react-router-dom";

function TechnologyPage(props) {
  const {slug} = useParams()
  const techDet = props.tech.find((elem)=>elem.slug === slug)
  
  const [searchParams] = useSearchParams();
  const previousPage = searchParams.get('previous') || '/';
  console.log(searchParams)
  
  return (
    <div id="comp-detail-container-tech">
      <h1>Technology Details</h1>
      <div className="ficha-company-detail">
        <div className="company-detail-img-container">
          <img src={techDet.image} alt="" />
        </div>
        <div className="company-detail-text-container">
          <h3>{techDet.name}</h3>
          <h4>About</h4>
          <p>{techDet.description}</p>
        </div>
      </div>
      <Link to={previousPage !== '/' ? `/company/${previousPage}` : "/"}><button className="return">Volver</button></Link>
    </div>
    

    
  );
}

export default TechnologyPage;
