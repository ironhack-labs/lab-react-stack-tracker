import { useParams, Link } from "react-router-dom"

function TechnologyPage({ technologies }) {
    const { slug } = useParams()
    const techMatch = technologies.find(tech => tech.slug === slug)

    return (
        <div>
            <h1>Technology Details</h1>
            <div className="tech-page-list">
                <h2>{techMatch.name}</h2>
                <img src={techMatch.image} alt={`${techMatch.name} logo`} className="tech-image" />
                <p className="tech-description">{techMatch.description}</p>
            </div>
        </div>
    )
}

export default TechnologyPage
