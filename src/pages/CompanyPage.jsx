import { useParams } from 'react-router-dom'
import {Link} from 'react-router-dom'


function CompanyPage(props) {

  const {companySlug} = useParams()
  const {techSlug} = useParams()

  let foundCompany = props.companies.find((oneCompany) => {
    return oneCompany.id === companySlug
  })

  return (
    <div>
      <h1>{foundCompany.name}</h1>
      <p>{foundCompany.website}</p>
      <p>{foundCompany.description}</p>
      <img src={foundCompany.logo} alt="" width='100px' />
      
      {props.technologies.map((oneTechnology) => {
        return (
          <div key={oneTechnology.id}>
            <Link to={`/tech/${oneTechnology.id}`}>{oneTechnology.name}</Link>
          </div>
        )
      })}
    </div>
  );
}

export default CompanyPage;
