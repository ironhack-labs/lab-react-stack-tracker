import { Link } from "react-router-dom";
import { Card, Col } from "antd";


function HomePage(props) {
  return (
    <Col>
      <h1>StackTracker: Discover Tech Stacks Used by Top Companies</h1>
      <div className="container">
        {props.allCompanies.map(company => {
          return (
            <Link key={company.id} to={`/company/${company.slug}`} style={{ textDecoration: 'none' }}>
            <Card className="company-container">
              <h5>{company.name}</h5>
              <img className="logo-img" src={company.logo} alt="" />
            </Card>
            </Link>
          )
        })}
      </div>
    </Col>
  );
}

export default HomePage;
