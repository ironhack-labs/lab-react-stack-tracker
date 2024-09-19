import { useParams } from "react-router-dom";


function TechnologyPage({data}) {
  
  const params = useParams();
  const currentItem = data.find((tech) => tech.slug === params.slug);
  console.log(currentItem);

  return (
    <div id="tech-page">
      <h1>Technology Details</h1>
      <div className="company-card">
        <img src={currentItem.image} alt="tech logo" />
        <div className="company-info">
          <h2>{currentItem.name}</h2>
          <h4>About</h4>
          <p>{currentItem.description}</p>
        </div>
        
      </div>
    </div>
  );
}

export default TechnologyPage;
