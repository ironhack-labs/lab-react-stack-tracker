import { useParams } from "react-router-dom";

function TechnologyPage({technologies}) {
  const {slug} = useParams();
  console.log(slug);
  
  return (
    <div>
      <h1>Technology Details</h1>
    </div>
  );
}

export default TechnologyPage;
