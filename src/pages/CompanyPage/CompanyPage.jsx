import './CompanyPage.css'
import companiesData from './../../companies.json'
import technologiesData from './../../technologies.json'
import { useParams } from 'react-router-dom';
import { useState } from 'react';

function CompanyPage() {

  const { companySlug } = useParams()

  const selectedCompany = companiesData.find(eachCompany => eachCompany.slug === companySlug)

  const [company, setCompany] = useState(selectedCompany)

  return (
    <div>
      <h1>Company Profile</h1>

      <div className="Container">

        <div className="logo">
          <img src={company.logo} alt="logo" />
        </div>

        <div className="information">
          <h2>{company.name}</h2>
          <h3>About</h3>
          <p>{company.description}</p>
        </div>

      </div>

      <div className="technologies-grid">
        {
          technologiesData.map((technology) => {
            return (
              <div className="technology">
                <img src={technology.image} alt="logo" />
                <h3>{technology.name}</h3>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default CompanyPage;
