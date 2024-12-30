import CompanyCard from "../components/CompanyCard";

function HomePage({ companies }) {
  return (
    <div id="homePage">
      <h2>StackTracker: Discover Tech Stacks Used by Top Companies</h2>
      <ul>
        {companies.map((element) => (
          <CompanyCard key={element.id} company={element} />
        ))}
      </ul>
    </div>
  );
}

export default HomePage;
