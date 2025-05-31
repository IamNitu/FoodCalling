import React from 'react'
import HeroSection from './HeroSection';
import Order from './Order';
import FoodIntro from './FoodIntro';
import FoodService from './FoodService';
import Feedback from './Feedback';
import BlogCard from './BlogCard';
import ReservationForm from './ReservationForm';
import Footer from './Footer';


function HomePage() {
  return (
    <div className='homepage'>
<HeroSection/>
        <Order/>
        <FoodIntro/>
        <FoodService />
        <Feedback/>
        <BlogCard/>
        <ReservationForm/>
        <Footer/>
    </div>
  )
}

export default HomePage