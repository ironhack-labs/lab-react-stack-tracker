import CompanyCard from "../components/CompanyCard";
import companiesData from "../companies.json";

function HomePage() {
  return (
    <>
      <h1>StackTracker: Discover Tech Stacks Used by Top Companies</h1>
      <div id="homePage">
        {companiesData.map((element) => (
          <CompanyCard key={element.id} company={element} />
        ))}
      </div>
    </>
  );
}

export default HomePage;
