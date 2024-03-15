import { Link } from "react-router-dom"

function HomePage(props) {
  return (
    <>
      <div className="HomePage">
        <h1>StackTracker: Discover Tech Stacks Used by Top Companies</h1>
      </div>
      <div className="HomePage-CompagnieList">
        {
          props.companiesList.map((companyElement) => {
            return(
              <Link to={`/company/${companyElement.slug}`}>
                <div className="HomePage-CompagnieBox" key={companyElement.id}>
                  <h3>{companyElement.name}</h3>
                  <div className="HomePage-CompagnieBoxImg">
                    <img src={companyElement.logo} alt="CompagnieLogo" />
                  </div>
                </div>
              </Link>
            )
          })
        }
      </div>
    </>
  );
}

export default HomePage;
