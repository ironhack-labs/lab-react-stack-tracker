import React from "react";
import { Link } from "react-router-dom";


function HomePage({companies}) {

  const styleLogo = {
    width:"10%"
  }
  
  return (
    <div>
      <h1>StackTracker: Discover Tech Stacks Used by Top Companies</h1>
      <div className="companies-list-container">
        {
          companies.map((elem, index) => (
            <Link to={`/company/${elem.slug}`}key={index}>
              <div >
            <p>
              {elem.name}
            </p>
            <img src={`${elem.logo}`} alt=""style={styleLogo} />
            </div></Link>
          )

          )
        }
      </div>
    </div>
  );
}

export default HomePage;
