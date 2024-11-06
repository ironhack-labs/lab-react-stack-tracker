import { Route, Routes } from "react-router-dom"
import HomePage from "../pages/HomePage/HomePage"
import CompanyPage from "../pages/CompanyPage/CompanyPage"
import TechnologyPage from "../pages/TechnologyPage/TechnologyPage"

const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/company/:companySlug' element={<CompanyPage />} />
            <Route path='/tech/:slug' element={<TechnologyPage />} />
        </Routes>
    )
}
export default AppRoutes