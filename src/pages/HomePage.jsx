function HomePage({ companies }) {

  console.log(companies)

  return (
    <div>
      <h1>StackTracker: Discover Tech Stacks Used by Top Companies</h1>
      <hr />
      <div className="allCompanies">
        {companies.map(elm => {
          const { name, logo, id } = elm
          return (

            <article className="company" key={id}>
              {name}

              <img className='logo' src={logo} />

            </article>
          )
        })}
      </div>
    </div>
  );
}

export default HomePage;
