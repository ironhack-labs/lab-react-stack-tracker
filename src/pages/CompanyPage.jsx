import { useParams } from 'react-router-dom'
import {Link} from 'react-router-dom'


function CompanyPage(props) {

  const {companySlug} = useParams()

  let foundCompany = props.companies.find((oneCompany) => {
    return oneCompany.id === companySlug
  })


  return (
    <div className='company-info' style={{ display: 'flex', flexWrap:'wrap', flexDirection: 'column', fontFamily:'abolition', margin:'20px 20px', justifyContent:'center'}}>
     <div style={{display:'flex', flexDirection:'row', justifyContent:'center', margin:'40px'}}>
      <img  style={{width:'200px', height:'200px'}}src={foundCompany.logo} alt=""  />
      <div style={{display:'flex', flexDirection:'column', justifyContent:'center', width:'30%'}}>
      <h1 className="company-name" style={{fontSize:'60px'}}><b>{foundCompany.name}</b></h1>
      <p style={{fontSize:'30px', margin: '20px'}}><b>{foundCompany.website}</b></p>
      <p style={{fontSize:'30px', margin: '20px', textAlign:'justify'}}>{foundCompany.description}</p>
      </div>
    </div>

      <div className="tech-container" style={{display:'flex', flexDirection:'row', flexWrap:'wrap', justifyContent:'space-evenly', gap:'50px', marginRight:'30px'}}>
        {foundCompany.techStack.map((oneTechnology) => {
          return (
            <div key={oneTechnology.id} className="tech-row">
              <Link to={`/tech/${oneTechnology.slug}`} className="tech" style={{margin:'10px', justifyContent:'center', alignContent:'center'}}>
                <h2>{oneTechnology.name}</h2>
                <img src={oneTechnology.image} alt="" /></Link>
            </div>
        )
      })}
      </div>
    </div>
  );
}

export default CompanyPage;
