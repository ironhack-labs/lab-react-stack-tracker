import { Container, Row, Col } from 'react-bootstrap'
import Logo  from './Logo'

export default function Hero({ size, title, h3, leadText, hasLogo }) {
	const sizes = {
		s: "hero-small",
		m: "hero-medium",
		l: "hero-marge",
	}
	const heroSize = sizes[size] || sizes.m

	return (
		<div className="hero">
			<Container>
				<Row className={heroSize}>
					<Col sm="9" lg="8">
						{h3 && <h3 className="mb-3">{h3}</h3>}
						{hasLogo && <Logo size='s' hasText />}
						<h1 className="mt-2">{title}</h1>
						{leadText && <p>{leadText}</p>}
					</Col>
				</Row>
			</Container>
		</div>
	)
}
