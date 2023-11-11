import {useParams} from "react-router-dom";


function TechnologyPage() {
  const {slug} = useParams();
  // console.log(useParams())
  console.log(slug)

  return (
    <div>
      <h2> "Technology Details"</h2>
    </div>
  );
}

export default TechnologyPage;
