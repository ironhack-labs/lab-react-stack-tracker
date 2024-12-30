import technologiesData from "../technologies.json";
import TechDetails from "../components/TechDetails";
import { useParams } from "react-router-dom";

function TechnologyPage() {
  const { techSlug } = useParams();
  const foundTech = technologiesData.find((oneTech) => oneTech.slug === techSlug);

  return (
    <div>
      <h2>Technology Details</h2>
      {!foundTech && <h3>Error 404: the page not found!</h3>}
      {foundTech && <TechDetails techStack={foundTech} />}
    </div>
  );
}

export default TechnologyPage;
