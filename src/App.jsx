import "./App.css";
import companies from "./companies.json";
import technologies from "./technologies.json";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CompanyPage from "./pages/CompanyPage";
import TechnologyPage from "./pages/TechnologyPage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage companies={companies} />} />
        <Route path="/company/:companySlug" element={<CompanyPage />} />
        <Route path="/tech/:slug" element={<TechnologyPage />} />





      </Routes>
    </div>
  );
}


/*



        <Route
          path="/projects/:projectId"
          element={<ProjectDetailsPage projects={projects} />}
        />



Iteration 4 | Display Companies as a List
In the HomePage component, render the list of companies.

Each list item should be a React Router Link showing the company name and logo.

The component should take 1 prop:

companies: The array of companies coming from the App. 
This is the data from companies.json that you stored in the state of App in Iteration 1.

To allow users to navigate to a specific company's details page, embed the company's slug in the URL for each Link. When any of the company name on the HomePage are clicked, the company slug should show up in the URL, and the user should be navigated to the company details page (CompanyPage).



*/
export default App;

