import { useParams } from 'react-router-dom'

function TechnologyPage(props) {

  const {slug} = useParams()

  let foundTech = props.technologies.find((tech) => {
    return tech.slug === slug
  })

  console.log(foundTech)

  if(!foundTech) {
    return <div>Tech not defined</div>
  }

  return (
    <div key={foundTech.id} className="tech-page">
      <img src={foundTech.image} className="tech-logo" alt="" />
      <div className='tech-info'>
        <h2>{foundTech.name}</h2>
        <p>{foundTech.description}</p>
      </div>
    </div>
  );
}

export default TechnologyPage;
