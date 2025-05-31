import React from 'react'
import services from '/services.jpg';
import Footer from './Footer';
import FoodService from './FoodService';
import ReservationForm from './ReservationForm';
import Feedback from './Feedback';

function Services() {
  return (
    <div className='service-page'>
<div className='service-banner'>
   
      <img src={services} alt='' />
       <h1>Services</h1>
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae libero illum totam accusantium a omnis ex eius, quae dicta magnam. Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
    </div>


<FoodService/>
<Feedback/>
 <ReservationForm/>
    <Footer/>
    </div>
  )
}

export default Services