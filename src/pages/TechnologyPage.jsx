import technologiesData from "../technologies.json";
import TechDetails from "../components/TechDetails";
import { Link, useSearchParams } from "react-router-dom";

function TechnologyPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const companySlug = searchParams.get("company");
  const techSlug = searchParams.get("tech");

  const foundTech = technologiesData.find((oneTech) => oneTech.slug === techSlug);

  return (
    <div>
      <h2>Technology Details</h2>
      {!foundTech && (
        <>
          <h3>Error 404: the page not found!</h3>
          <Link to={`/company?company=${companySlug}`}>
            <button>Back</button>
          </Link>
        </>
      )}
      {foundTech && <TechDetails techStack={foundTech} />}
    </div>
  );
}

export default TechnologyPage;
