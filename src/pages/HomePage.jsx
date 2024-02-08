import { Link } from "react-router-dom"

function HomePage(props) {
  return (
    <>
      <div className="HomePage">
        <h1>StackTracker: Discover Tech Stacks Used by Top Companies</h1>
      </div>
      <div className="HomePage-CompagnieList">
        {
          props.compagnieList.map((compagnieElement) => {
            return(
              <Link to={`/company/${compagnieElement.slug}`}>
                <div className="HomePage-CompagnieBox" key={compagnieElement.id}>
                  <h3>{compagnieElement.name}</h3>
                  <div className="HomePage-CompagnieBoxImg">
                    <img src={compagnieElement.logo} alt="CompagnieLogo" />
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
