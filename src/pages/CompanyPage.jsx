import { Link, useParams } from "react-router-dom";

function CompanyPage({data}) {

  const params = useParams();

  const currentItem = data.find((company) => company.slug === params.companySlug);
  console.log(currentItem);

  return (
    <div id="company-page">
      <h1>Company Profile</h1>
      <div className="company-card">
        <img src={currentItem.logo} alt="company logo" />
        <div className="company-info">
          <a href={`https://${currentItem.website}`}><h2>{currentItem.name}</h2></a>
          <h4>About</h4>
          <p>{currentItem.description}</p>
        </div>
        
      </div>
      <div className="tech-stack">
          {
            currentItem.techStack.map((stack)=>{
              return(
                <Link to={`/tech/${stack.slug}`}>
                  <img src={stack.image} alt="tech logo" />
                  <h6>{stack.name}</h6>
                </Link>
              );
            })
          }
        </div>
    </div>
  );
}

export default CompanyPage;
