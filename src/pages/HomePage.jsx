import "../App.css"

import {Link} from 'react-router-dom'

function HomePage(props) {
  // console.log(props.comp)
  return (
    <>
      <h1>StackTracker: Discover Tech Stacks Used by Top Companies</h1>
      <div className='companies'>
          {props.comp.map((elem)=>{
            // console.log(elem.id)
            return(
              <Link to={`/company/${elem.slug}`}  key={elem.id}>
                <div className='ficha-company'>
                  <h1 className='company-name'>{elem.name}</h1>
                  <div className='logos'>
                    <img src={elem.logo} alt="" />
                  </div>
                </div>
              </Link>
            )
          })}
      </div>
    </>
  );
}

export default HomePage;
