import { useParams, useNavigate } from 'react-router-dom'

function TechnologyPage(props) {
 
  const {slug} = useParams()
  const navigate = useNavigate()
  let foundTech = props.technologies.find((tech) => {
    return tech.slug === slug
  })

  console.log(foundTech)

  if(!foundTech) {
    return <div style={{fontSize:'30px', fontFamily:'abolition', marginTop: '10%', fontWeight:'bold'}}>Tech not defined</div>
  }
 
  function goBack(){
    navigate (-1)
  }
  return (
    <div key={foundTech.id} className="tech-page" style={{marginTop:'150px', fontFamily:'abolition', justifyContent:'center', justifyItems:'center'}}>
      <img src={foundTech.image} className="tech-logo" alt="" style={{width:'150px', justifySelf:'center', marginBottom: '50px'}}/>
      <div className='tech-info'>
        <h1 style={{fontSize:'40px', textAlign:'center', marginBottom:'50px'}}>{foundTech.name}</h1>
        <p style={{fontSize:'26px'}}>{foundTech.description}</p>
        <button style={{display:' inline-block',padding: '10px 15px',textDecoration: 'none',backgroundColor: '#535bf2',fontSize:'30px', color:' #fff',borderRadius: '5px',border: '1px solid #3498db', width:'180px', height:'80px'}} className='back-button' onClick={goBack}>Back</button>
        
      </div>
    </div>
  );
}

export default TechnologyPage;
