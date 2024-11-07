import {Route, Routes} from 'react-router-dom'

import HomePage from './../pages/HomePage'
import TechnologyPage from './../pages/TechnologyPage'
import CompanyPage from './../pages/CompanyPage'


const AppRoutes = () => {
    return(
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/company/:companySlug' element={<CompanyPage />} />
            <Route path='/tech/:slug' element={<TechnologyPage />} />

        </Routes>
    )
}

export default AppRoutes