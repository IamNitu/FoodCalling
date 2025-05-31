import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import './Navbar.css';
import './Style.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./HeroSection.css";
import './Order.css';
import './FoodIntro.css';
import './FoodService.css';
import './Feedback.css';
import './BlogCard.css';
import './ReservationForm.css';
import './Footer.css';
import './AboutPage.css';
import './MessageFromChef.css';
import './Services.css';
import './Menu.css';
import HomePage from "./components/HomePage"; 
import AboutPage from './components/AboutPage'
import Contact from './components/Contact';
import Services from './components/Services';
import Menu from './components/Menu';
import Gallery from './components/Gallery'
import Blogs from './components/Blogs'
import './Contact.css';
import './Blogs.css';
import './Gallery.css';
import './MenuItemCard.css';
import BlogDetail from './components/BlogDetail';
import './BlogDetail.css';


function App() {
  

  return (
    <>

<Router>
<Navbar/>
<Routes>
      <Route path='/' element={<HomePage/>} /> 
     <Route path='/about' element={<AboutPage/>} /> 
      <Route path='/services' element= {<Services/>}/> 
      <Route path='/menu' element= {<Menu/>}/> 
     <Route path='/blogs' element= {<Blogs/>} /> 
     <Route path='/contact' element={<Contact/>} /> 
     <Route path='/gallery' element={<Gallery/>} />  
      <Route path="/blogs/:id" element={<BlogDetail />} />
  
   </Routes>
   </Router>
    </>
  )
}

export default App

