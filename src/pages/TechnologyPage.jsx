import { useParams, Link } from 'react-router-dom'
function TechnologyPage (props) {
  const { slug } = useParams()
  const techInfo = props.technologies.find(tech => {
    return tech.slug === slug
  })
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
      <Link to='/'>Back</Link>
    </div>
  )
}

export default TechnologyPage
