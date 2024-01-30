import {Link} from 'react-router-dom'

function HomePage(props) {
  return (
    <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignContent:'center' }}>
      <h1 style={{textAlign:'center', padding:'20px 20px', color:'black', fontFamily:'abolition'}}>StackTracker: Discover Tech Stacks Used by Top Companies</h1>
      <div className="companies-container" style={{display:'flex', flexDirection: 'row', flexWrap:'wrap', justifyContent:'flex-end', alignItems:'center', gap:'10px'}}>
        {props.companies.map((oneCompany) => {
          return (
            <div key={oneCompany.id} className="company-row" style={{margin: '10px', padding: '10px'}}>
              <Link to={`/company/${oneCompany.id}`} className='company'>
                <h2 style={{fontFamily:'abolition', fontSize:'30px'}}>{oneCompany.name}</h2> 
                <img src={oneCompany.logo} alt="" width="150px" /></Link>
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default HomePage;
