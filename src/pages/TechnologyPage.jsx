import { useParams } from 'react-router-dom';

function TechnologyPage(props) {
  console.log(props)
  const { slug } = useParams();
 console.log(slug)
  const technology = props.technologiesToDisplay.find(element => {
    const normalizedSlug = element.slug.trim().toLowerCase();
    const normalizedCompanySlug = slug.trim().toLowerCase();
    return normalizedSlug == normalizedCompanySlug
  })

  return (
    <div>
      <h1>Techno page</h1>
      {technology && (
        <>
        <div className='logo-company'>
        <div className='logo-around'>
          <img src={technology.image} />
        </div>

      </div>
        <div>
          <h3>{technology.name}</h3>
        </div>
        </>
      )}
    </div>
  );
}

export default TechnologyPage;
