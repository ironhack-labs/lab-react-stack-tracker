import { Container, Col, Row } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'
import TechStack from '/src/components/TechStack'
import { Globe, ArrowLeftShort } from 'react-bootstrap-icons'
import Hero from '/src/components/Hero'
import Button from '/src/components/Button'

export default function CompanyPage({ companies, technologies }) {
	const { companySlug } = useParams()

	const currentCompany = companies.find((company) => company.slug === companySlug)

	const { name, logo, website, description } = currentCompany

	return (
		<div className="companypage">
			<Hero title={name} size="s" h3="Company Profile" />

			<Container>
				<Row>
					<Col sm="10" md="4" lg="4">
						<div className="company_logo mb-3">
							<img src={logo} alt={name} />
						</div>
					</Col>
					<Col sm="10" md="8" lg="8" className="d-flex flex-column justify-content-center">
						<p className="company_website mb-0">
							<Globe />
							<Link to={website}>{website}</Link>
						</p>
						<p className="company_description">{description}</p>
					</Col>
				</Row>
				<Row className="mb-5">
					<Col className="pt-5">
						<h2>{name}'s tech stack</h2>

						<TechStack technologies={technologies} companySlug={companySlug} />
					</Col>
				</Row>
			</Container>

			<Container>
				<Row>
					<Col sm="9" md="8" lg="7">
						<Button link={`/`} text="Back" iconLeft={<ArrowLeftShort />} />
					</Col>
				</Row>
			</Container>
		</div>
	)
}
