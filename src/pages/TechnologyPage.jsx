import { Container, Row, Col } from 'react-bootstrap'
import { ArrowLeftShort } from 'react-bootstrap-icons'
import Button from '/src/components/Button'
import Hero from '/src/components/Hero'
import { useParams, useSearchParams } from 'react-router-dom'

export default function TechnologyPage({ technologies }) {
	const { techSlug } = useParams()
	const [SearchParams] = useSearchParams()

	const currentTech = technologies.find(({ slug }) => slug === techSlug)

	const { name, image, description } = currentTech

	return (
		<>
			<div className="techpage">
				<Hero title={name} size="s" />

				<Container>
					<Row className="mb-5">
						<Col sm="10" md="4" lg="4">
							<div className="tech_logo mb-3">
								<img src={image} alt={name} />
							</div>
						</Col>
						<Col sm="10" md="8" lg="8" className="d-flex flex-column justify-content-center">
							<p className="company_description">{description}</p>
						</Col>
					</Row>
				</Container>
			</div>

			<Container>
				<Row>
					<Col sm="9" md="8" lg="7">
						<Button link={`/company/${SearchParams.get('company')}`} text="Back" iconLeft={<ArrowLeftShort />} />
					</Col>
				</Row>
			</Container>
		</>
	)
}
