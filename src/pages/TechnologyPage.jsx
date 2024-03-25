import technologies from "../technologies.json";

function TechnologyPage() {

  return (
    <div>     
    <h2>StackTracker: Check the available technologies</h2>
      {
        technologies.map((technology) => {
          return (
            <div key={technology.id} className='technologiesList'>
                <h3>{technology.name}</h3>
                <img src={technology.image} alt={technology.id} />
                <p>{technology.description}</p>
            </div>
          )
        })
      }
    </div>
  );
}

export default TechnologyPage;