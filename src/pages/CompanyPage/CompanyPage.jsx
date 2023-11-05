/* eslint-disable react/prop-types */
import { useParams, Link } from "react-router-dom";

    function CompanyPage(props) {
      let {companies} = props;
      const {companySlug} = useParams();
      
      const foundCompany = companies.find((oneCompany)=>{
        return oneCompany.slug === companySlug
    })

    return (
      <div>
        <h1>CompanyPage</h1>
        {foundCompany? 
        <div className='company-page'>
          <h1>Company Profile</h1>
          <div id="company-properties">
            <img className="company-page-logo" src={foundCompany.logo} alt="" />
            <div id="company-properties-text">
              <h1>{foundCompany.name}</h1>
              <p>{foundCompany.description}</p>
              <p>{foundCompany.website}</p>
            </div>
          </div>
          <div id="stack-row">
            {foundCompany.techStack.map((stack)=>{
            return( 
              <div key={stack.slug} className="stackId">
                <img className="logo" src={stack.image} alt="" >
                  </img>
                <h3><Link to={`/tech/${stack.slug}`}>{stack.name}</Link></h3>
              </div>
            )
            })}
          </div>
        </div>: "No company found."} {/* se não */}
      </div>
    );
  }

export default CompanyPage;
