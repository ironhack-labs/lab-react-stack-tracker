import { useParams, Link, useSearchParams } from 'react-router-dom'

function TechnologyPage(props) {
  let { techSlug } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const companySlug = searchParams.get('companySlug');
  console.log(companySlug)

  const foundTech = props.technologies.find(tech => {
    return tech.slug == techSlug;
  })

  return (
    <div className='company-page'>
      <h1>Technology Details</h1>
      {!foundTech && <h2>Technology not found</h2>}

      {foundTech && (
        <>
          <div className='company-page-content'>
            <div className='company-page-left'>
              <img src={foundTech.image} alt="Technology image" className='company-logo' />
            </div>
            <div className='company-page-right'>
              <p className='company-name-big'>{foundTech.name}</p>
              <p className='company-about'>About</p>
              <p className='company-description'>{foundTech.description}</p>
            </div>
          </div>
        </>
      )}
      <div className='footer'>
        <button className='company-back'><Link to={`/company/${companySlug}`}>Back</Link></button>
      </div>
    </div>
  );
}

export default TechnologyPage;
