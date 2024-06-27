function HomePage( { companies } ) {
  return (
    <div>
      <h1>StackTracker: Discover Tech Stacks Used by Top Companies</h1>
      <ul className="company-ul">
        {companies.map(company => (
          <li key={company.id} className="company-li">
            <h3>{company.name}</h3>
            <img src={company.logo} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HomePage;
