import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import TechnologyPage from './TechnologyPage';

function CompanyPage(props) {

  const {companySlug} = useParams();
  const companyDetails = props.companiesArr.find((company) => {
    return company.slug === companySlug;
  });

  if (companyDetails) {
    return (
      <>
        <div className="company-slug-container">
          <p>{companyDetails.name}</p>
          <img src={companyDetails.logo} />
          <p>{companyDetails.website}</p>
          <p>{companyDetails.description}</p>
        </div>
      </>
  )}
}

export default CompanyPage;