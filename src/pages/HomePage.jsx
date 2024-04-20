import { Container, Col, Row, Card } from 'react-bootstrap'
import CompanyCard from '/src/components/CompanyCard'
import Hero from '/src/components/Hero'

function HomePage({ companies }) {
	return (
		<div>
			<Hero title="Discover Tech Stacks Used by Top Companies" size="m" hasLogo />
		
			<Container>
				<Row>
					{companies.map(({ id, ...company}) => {
						return (
							<Col key={id} sm="6" md="6" className="d-flex align-items-stretch mb-4">
								<CompanyCard {...company} />
							</Col>
						)
					})}
				</Row>
			</Container>
		</div>
	)
}

export default HomePage
