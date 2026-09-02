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

function App() {

  return (
    <>

    <Routes>
       <Route path="/" element={<LandingPage />} />
       <Route path='/all' element={<All />}/>
       <Route path="/job/:id" element={<JobSingle />} />
       <Route path="/topcompany" element={<TopCompaniesPage />} />
       <Route path="/category/:cate" element={<CategoryPage />}/>
       <Route path="/about" element={<About />}/>
       <Route path="/contact" element={<Contact />}/>
    </Routes>
    </>
  )
}

export default App
