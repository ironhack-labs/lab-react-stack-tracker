import { useParams } from "react-router-dom";

function TechnologyPage(props) {
  const {slug} = useParams()
  const techDetails = props.technologyArray.find((technology) => {
    return technology.slug == slug
  })

  return (
    <div>
      <h1>Technology Details of {techDetails.name}</h1>
      <section>
        <img src={techDetails.image}/>
        <div>
          <h1>{techDetails.name}</h1>
          <p>About: {techDetails.description}</p>
        </div>
      </section>

      <a href="/">Go back to Homepage</a>
    </div>
  );
}

export default TechnologyPage;


