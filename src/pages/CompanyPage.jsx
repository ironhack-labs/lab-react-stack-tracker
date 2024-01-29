import { useParams } from 'react-router-dom'
import {Link} from 'react-router-dom'


function CompanyPage(props) {

  const {companySlug} = useParams()

  let foundCompany = props.companies.find((oneCompany) => {
    return oneCompany.id === companySlug
  })

  return (
    <div className='company-info'>

      <img src={foundCompany.logo} alt="" width='100px' />

      <h1 className="company-name">{foundCompany.name}</h1>
      <p>{foundCompany.website}</p>
      <p>{foundCompany.description}</p>
    

      <div className="tech-container">
        {foundCompany.techStack.map((oneTechnology) => {
          return (
            <div key={oneTechnology.id} className="tech-row">
              <Link to={`/tech/${oneTechnology.slug}`} className="tech" >
                <h3>{oneTechnology.name}</h3>
                <img src={oneTechnology.image} alt="" /></Link>
            </div>
        )
      })}
      </div>
    </div>
  );
}

export default CompanyPage;
