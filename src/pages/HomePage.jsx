import { Link } from 'react-router-dom'

function HomePage({ companies }) {
	return (
		<div>
			<h1>StackTracker: Discover Tech Stacks Used by Top Companies</h1>
			<div className="companies">
				{companies &&
					companies.map((company) => (
						<Link key={company.id} to={`/company/${company.slug}`}>
							<img src={company.logo} height="100" />
							<p>{company.name}</p>
						</Link>
					))}
			</div>
		</div>
	)
}

export default HomePage
