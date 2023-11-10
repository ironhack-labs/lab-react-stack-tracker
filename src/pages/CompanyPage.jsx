import {Routes, Route, useParams} from 'react-router-dom';

function CompanyPage(props) {

  const {companyId} =  useParams();

  const companyDetails = props.companiesArr.find((company) => {
    return company.id == companyId;
});


  return (
    <div>
      <h1>"Company Profile"</h1>
    </div>
  );
}

export default CompanyPage;
