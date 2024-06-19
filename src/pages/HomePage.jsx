import "../App.css";
import CompanyCard from "../components/CompanyCard";

function HomePage(props) {
  return (
    <div className="companyList">
      {
        props.companies.map(company => {
          return(
            <CompanyCard key={company.id} company={company} />
          )
        })
      }
    </div>
  );
}

export default HomePage;
