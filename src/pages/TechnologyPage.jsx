import { useParams, Link } from 'react-router-dom'
function TechnologyPage (props) {
  const { slug } = useParams()
  const techInfo = props.technologies.find(tech => {
    return tech.slug === slug
  })
  console.log(techInfo)
  return (
    <div>
      <h1>Technology Details</h1>
      <div className=' company-card'>
        <img src={techInfo.image} alt='' />
        <div>
          <p>{techInfo.name}</p>

          <p>{techInfo.description}</p>
        </div>
      </div>
      <button onClick={() => window.history.back()}>Back</button>
    </div>
  )
}

export default TechnologyPage
