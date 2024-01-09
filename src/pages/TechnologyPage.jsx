import {useParams, useNavigate} from 'react-router-dom'

function TechnologyPage({technologies}) {
  
  const navigate = useNavigate()
  const { technologySlug } = useParams()
  const technology = technologies.find((technology)=>  {
    return technology.slug === technologySlug
  })

  return (
    <>
    <header>
      <h1>Technology Details</h1>
    </header>
    <div className='details'>
    <img src={technology.image} alt="tech logo"/>
    <div className='info'>
    <h2>{technology.name}</h2>
    <p>{technology.description}</p>
    </div>
    </div>
    <button onClick={()=>{navigate(-1)}}>Back to company page</button>
    <button onClick={()=>{navigate(-2)}}>Home</button>
    </>
  );
}

export default TechnologyPage;
