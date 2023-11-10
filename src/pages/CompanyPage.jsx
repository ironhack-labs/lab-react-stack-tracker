import { useParams, Link } from 'react-router-dom'

function CompanyPage(props) {
  let { companySlug } = useParams();
  const foundCompany = props.companies.find(company => {
    return company.slug == companySlug;
  })


  return (
    <div className='company-page'>
      <h1>Company Profile</h1>
      {!foundCompany && <h2>Company not found</h2>}

      {foundCompany && (
        <>
          <div className='company-page-content'>
            <div className='company-page-left'>
              <img src={foundCompany.logo} alt="" className='company-logo' />
            </div>
            <div className='company-page-right'>
              <p className='company-name-big'>{foundCompany.name}</p>
              <p className='company-about'>About</p>
              <p className='company-description'>{foundCompany.description}</p>
            </div>

            <ul className='tech-stack' role='list'>
              {foundCompany.techStack.map(tech => {
                return (
                  <li key={tech.slug} className='tech-full'>
                    <Link to={`/tech/${tech.slug}?companySlug=${foundCompany.slug}`} >
                      <div className='tech-card'>
                        <img src={tech.image} alt="Tech Image" className='tech-image' />
                      </div>
                      <p>{tech.name}</p>
                    </Link>
                  </li>
                )
              })}
            </ul>

            <button className='company-back'><Link to="/">Back</Link></button>
          </div>
        </>

      )}
    </div>
  );
}

export default CompanyPage;
