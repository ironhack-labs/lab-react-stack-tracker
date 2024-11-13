import React from 'react';

const HomePage = ({ companies, technologies }) => {
  if (!Array.isArray(companies)) {
    return <div>Error: companies is not an array</div>;
  }

  return (
    <>
      <h3>StackTracker: Discover Tech Stacks Used by Top Companies</h3>
      <div>
        <article>
          {companies.map((company) => (
            <div key={company.slug}>
              <h3>{company.name}</h3>
              <p>{company.description}</p>
              <p>
                <a href={`/company/${company.slug}`}>View {company.name}</a>
              </p>
            </div>
          ))}
        </article>
      </div>
    </>
  );
};

export default HomePage;