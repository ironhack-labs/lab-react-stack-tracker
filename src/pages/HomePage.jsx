import CompanyCard from "../components/CompanyCard";
import companiesData from "../companies.json";

function HomePage() {
  return (
    <div id="homePage">
      <h2>StackTracker: Discover Tech Stacks Used by Top Companies</h2>
      {companiesData.map((element) => (
        <CompanyCard key={element.id} company={element} />
      ))}
    </div>
  );
}

export default HomePage;
