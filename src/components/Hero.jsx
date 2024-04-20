import { Container, Row, Col } from 'react-bootstrap'
import Logo  from './Logo'

export default function Hero({ size, title, leadText, hasLogo }) {
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
						{hasLogo && <Logo size='s' hasText />}
						<h1>{title}</h1>
						{leadText && <p>{leadText}</p>}
					</Col>
				</Row>
			</Container>
		</div>
	)
}
