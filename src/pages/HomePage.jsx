import { Link } from 'react-router-dom'

function HomePage(props) {
  return (
    <>
      <section className='Logos'>
        {props.companiesArr.map((companyObj, i) => (
          <div key={companyObj.slug}>
            <h3 className='Logos-children'>
              {companyObj.name} <br />
              <Link to={`/company/${companyObj.slug}`}>
                <img src={companyObj.logo} alt="" />
              </Link>
            </h3>
            <hr />
          </div>
        ))}
      </section>
    </>
  );
}

export default HomePage;
