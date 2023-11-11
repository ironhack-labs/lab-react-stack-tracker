import {useParams} from 'react-router-dom'

function CompanyPage(props) {

  const {companySlug} = useParams();

  // console.log(props.companiesArr)
  // console.log(companySlug)
  const [companyMatch] = props.companiesArr.filter((company)=>{
    return company.slug === companySlug;
  })
  console.log(companyMatch)

  return (
    <div>
      <h2>Company Profile</h2>
      <img className='logo' src={companyMatch.logo} alt="" />
      <h2>{companySlug}</h2>
      <h3>About</h3>
      <p>{companyMatch.description}</p>
      <a href={companyMatch.website}>Visit website</a>
    </div>
  );
  
}

export default CompanyPage;
