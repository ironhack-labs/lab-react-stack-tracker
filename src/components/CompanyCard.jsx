import { Card } from 'react-bootstrap'
import Button from '/src/components/Button'
import { Link } from 'react-router-dom'
import { Globe, ArrowRightShort } from 'react-bootstrap-icons'

export default function CompanyCard({ logo, name, website, description, slug }) {
	return (
		<Link to={`/company/${slug}`} className="d-flex h-100">
			<Card className="card_company d-flex flex-column h-100">
				<Card.Img variant="top" src={logo} alt={name} />
				<Card.Body>
					<Card.Title>{name}</Card.Title>
					<p className="company_website">
						<Globe /> <a href={`https://${website}`}target='_blank' rel="noreferrer">{website}</a>
					</p>
					<Card.Text className="mb-2">{description}</Card.Text>
				</Card.Body>
				<Card.Footer>
					<Button link={`/company/${slug}`} type="primary" text="Read more" iconRight={<ArrowRightShort />} fullWidth className="stretched-link" />
				</Card.Footer>
			</Card>
		</Link>
	)
}
