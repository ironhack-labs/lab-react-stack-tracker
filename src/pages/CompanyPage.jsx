import React from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';


function CompanyPage(props) {
  const { companySlug } = useParams();
  const companies = props.companies;
  const company = companies.find((company) => company.slug === companySlug);
  const techs= company.techStack
  
  return (
    <div className='returned-div'>
        <h1>Company Profile</h1>
          <div className="individual-display">
            <div>
              <img className="comp-logo" src={company.logo}/>
            </div>
            <div className="comp-logo-text">
              <h2>{company.name}</h2>
              <h3>About</h3>
              <p className='comp-logo-paragraph'>{company.description}</p>
            </div>
            
          </div>
          <div className="btn-div"><Link to={"../"}><button>Back</button></Link></div>

          <div className="scrollable-div">
            {techs.map((tech , index)=>{
              
            return(
              <div key={index}>
                <Link to={`../tech/${tech.slug}`}>
                <img className="comp-logo" src={tech.image}/>
                <h2 className="comp-name-x">{tech.name}</h2>
                </Link>
                </div>
            )
          })}
          </div>
    </div>
  );
}

export default CompanyPage;
