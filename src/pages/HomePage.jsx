import {useState} from 'react';
import {Link} from 'react-router-dom'

function HomePage({companies}) {


  const [companiesList, setCompaniesList] = useState(companies);




  return (
    <div>
      <h1>StackTracker: Discover Tech Stacks Used by Top Companies</h1>

      <div className="companies-container">
        {
          companiesList.map(element => {

          return (
            <Link to={`/company/${element.slug}`} className="card-link" key={element.id}>
              <div key={element.id}>
                <h2>{element.name}</h2>
                <img className="logo" src={element.logo} />
              </div>
            </Link>
          )

          })
        }
      </div>

    </div>



  );
}

export default HomePage;
