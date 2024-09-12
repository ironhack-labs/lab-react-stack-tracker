import { Link } from 'react-router-dom'

export default function TechStack ({technologies, companySlug}) {
	return (
		<div className="tech-stack">
			{technologies.map(({ id, name, slug, image }) => {
				return (
					<div key={id} className="tech-stack_item">
						<Link to={`/technology/${slug}?company=${companySlug}`}>
							<img src={image} alt={name} />
						</Link>
					</div>
				)
			})}
		</div>
	)
}