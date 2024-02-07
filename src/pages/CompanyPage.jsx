import {Link, useParams} from 'react-router-dom';

function CompanyPage({companies}) {



  let companySlug = useParams();

  const companyProfile = companies.find(element => element.slug === companySlug);

  return (
    <div>
      <h1>{companySlug}</h1>
    </div>
  );
}

export default CompanyPage;
