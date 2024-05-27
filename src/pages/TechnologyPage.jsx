import { useParams, Link, useSearchParams } from "react-router-dom";
import { Card, Col } from "antd";

function TechnologyPage(props) {

  const {technologySlug} = useParams();
  //console.log('Technology slug', technologySlug)
  const [searchParams, setSearchParams] = useSearchParams()

  const company = searchParams.get("company");
  //console.log('company:', company)

  return (
    <Col>
      <h1>Technology Details</h1>
      <>
        {props.allTechnologies.map(technology => {
          if (technology.slug == technologySlug) {
            return (
              <Card key={technology.id} className='tech-card'>
              <div className='technology-card'>
                <div>
                  <img src={technology.image} alt="" className="logo-img"/>
                </div>
                <div>
                  <h2>{technology.name}</h2>
                  <h3>About</h3>
                  <p>{technology.description}</p>
                  <Link className="button" to={`/company/${company}`}>Back</Link>
                </div>
              </div>  
              </Card>
            )
          }
        })}
      </>
    </Col>
  );
}

export default TechnologyPage;
