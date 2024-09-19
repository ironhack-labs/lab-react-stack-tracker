function HomePage({companiesArr}) {
  return (
    <div className="page">
      <h1>StackTracker: Discover Tech Stacks Used by Top Companies</h1>
      <section className="companyList">
        {companiesArr.map((company, index) => (
          <div className="companyCard" key={index}>
            <h4>{company.name}</h4>
            <img className="companyLogo" src={company.logo} alt="" />  
          </div>
          ))}
      </section>
    </div>
  );
}

export default HomePage;
