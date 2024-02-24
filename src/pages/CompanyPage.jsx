import '../App.css'
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";


function CompanyPage(props) {
  console.log(props)

  const { companySlug } = useParams();
  const companyDetails = props.companiesToDisplay.find(element => {
    const normalizedSlug = element.slug.trim().toLowerCase();
    const normalizedCompanySlug = companySlug.trim().toLowerCase();
    return normalizedSlug == normalizedCompanySlug
  })

  if (!companyDetails) {
    return <div>No company found (for this slug)</div>;
  }

  return (
    <div>
      <h3>Company Profile</h3>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div className='logo-company'>
          <div className='logo-around'>
            <img src={companyDetails.logo} />
          </div>

        </div>
        <div className='text-company' style={{ marginLeft: '170px' }}>
          <h1>{companyDetails.name}</h1>
          <h3>About</h3>
          <div><b>{companyDetails.description}</b></div>
        </div>
      </div>

      <div className='techStack'>
        {/* Loop over the techStack array */}
        {companyDetails.techStack.map(tech => (
          <div className='logo-company space'>
            <div key={tech.slug}>

             <Link to={`/tech/${tech.slug}`}> <img src={tech.image} alt={tech.name} /> </Link>
              <h4>{tech.name}</h4>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}

export default CompanyPage;
