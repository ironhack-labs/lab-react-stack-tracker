import {Link, useParams} from 'react-router-dom';

function CompanyPage({companies}) {



  const {companySlug} = useParams();

  const companyProfile = companies.find(element => element.slug === companySlug);

  console.log(companyProfile.name)

  return (
    <div>
      <h1>1</h1>
    </div>
  );
}

export default CompanyPage;
