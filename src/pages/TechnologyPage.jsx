import { Link, useParams, useSearchParams } from 'react-router-dom'

function TechnologyPage({ technologies }) {
	const { slug } = useParams()
	const [searchParams] = useSearchParams()
	const company = searchParams.get('company')
	const tech = technologies.find((t) => t.slug === slug)
	console.log(searchParams)
	return (
		<div>
			<h1>Technology Details</h1>
			<div className="companyDet">
				<div>
					<img src={tech.image} height="300" />
				</div>
				<div>
					<h2>{tech.name}</h2>
					<p>About</p>
					<p>{tech.description}</p>
				</div>
			</div>
			<Link to={`/company/${company}`}>
				<button>Back</button>
			</Link>
		</div>
	)
}

export default TechnologyPage
