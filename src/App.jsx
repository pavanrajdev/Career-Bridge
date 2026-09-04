import { useState } from 'react'
import './App.css'
import LandingPage from './Pages/LandingPage';
import {  Routes,Route} from "react-router-dom";
import All from './Pages/All';
import JobSingle from './Pages/Singles/JobSingle';
import ScrollToTop from './Components/ScrollToTop';
import TopCompanies from './Components/TopCompanies';
import TopCompaniesPage from './Pages/TopCompaniesPage';
import CategoryPage from './Pages/CategoryPage';
import jobs from './Jobs/job';
import About from './Pages/About';
import Contact from './Pages/Contact';
import MyApplications from './Pages/MyApplications';
import Signin from './Registrations/SignIn';
import Signup from './Registrations/SignUp';
import CandidateProfile from './Pages/UserProfile/CandidateProfile';
import SearchPage from './SearchPage';

function App() {

  return (
    <>

    <Routes>
       <Route path="/" element={<Signup />} />
       <Route path="/signin" element={<Signin />} />
       <Route path="/home" element={<LandingPage />} />
       <Route path='/profile' element={<CandidateProfile /> }/>
       <Route path='/all' element={<All />}/>
       <Route path="/job/:id" element={<JobSingle />} />
       <Route path="/topcompany" element={<TopCompaniesPage />} />
       <Route path="/category/:cate" element={<CategoryPage />}/>
       <Route path="/about" element={<About />}/>
<Route path="/search" element={<SearchPage />} />
       <Route path="/contact" element={<Contact />}/>
       <Route path="/myapplications" element={<MyApplications />}/>
    </Routes>
    </>
  )
}

export default App
