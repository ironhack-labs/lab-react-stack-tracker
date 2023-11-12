function HomePage(props) {
  return (
    <div>
      <h2>StackTracker: Discover Tech Stacks Used by Top Companies</h2>

      {console.log(props.listOfCompanies[0])}

      {props.listOfCompanies.map(function(element){
        return (
          <ul>
            <li key={element.id}>{element.name} <img src={element.logo} /></li>
          </ul>
        )
        //console.log(element)
      })}


    


    </div>
  );
}

export default HomePage;
