import {useParams} from 'react-router-dom'
function CompanyPage(props) {
  const {companySlug} = useParams()
  console.log('hi')
  return (
    <div>
      <h2>Company Profile</h2>
      <h3>{companySlug}</h3>
    </div>
  );
}

export default CompanyPage;
