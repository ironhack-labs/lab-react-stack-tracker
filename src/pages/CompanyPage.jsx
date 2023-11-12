import { Routes, Link, useParams } from 'react-router-dom';

function CompanyPage(props) {
 
  const {companySlug} = useParams();
  const cmpList = props.companiesSlu.find((cmp)=>cmp.slug === companySlug)

  return (
  
    <div>
      <h1>Company Profile</h1>
      <img className='logo' src={cmpList.logo}/>
      <h1>{cmpList.name}</h1>
      <br/>
      <h2>About</h2>
      <br/>
      <h3>{cmpList.description}</h3>
      {cmpList.techStack.map(function(tech, t){
        return  (
          <div key={t} >
            <div className = 'scrolling'>
              
      <Link to={`/tech/${tech.slug}`}>
        <img className='logo' src={tech.image}/>
      </Link> 
      <br/>
      <p>{tech.name}</p>
      
      </div>
      </div>
      )
       }
      )}
      
        
    </div>
 
    
  );
}

export default CompanyPage;
 
