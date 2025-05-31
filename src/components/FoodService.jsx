import React from 'react'
import cheesy from '/cheesy.jpg'
import tea from '/tea.jpg'
import wine from '/wine.jpg'
import parking from '/parking.jpg'
import dining from '/dining.jpg'

function FoodService() {
  return (
    <div className='foodservice'>
<div className='foodservice-component'>
<div className='foodservice-options'>
    <div className='foodservice-header'>
 <p>Food Services</p>
        <h1>We Provide Best Services</h1>
    </div>

    <div className='foodservice-body'>
       <div className='foodservice-1'>
       <div className='service-1'>
       <img src={tea} alt='' />
        <h3>Afternoon Tea</h3>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit eveniet quis minus error tempora!</p>
       </div>
       <div className='service-2'>
       <img src={wine} alt='' />
        <h3>Wine & Cocktails</h3>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit eaque veniam molestias iste maiores.</p>
       </div>
        
       </div>
       <div className='foodservice-2'>
<div className='service-3'>
<img src={parking} alt='' />
  <h3>Valet Parking</h3>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit itaque, rem adipisci architecto perferendis.</p>
</div>
       <div className='service-4'>
       <img src={dining} alt='' />
        <h3>Private Dining</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit totam adipisci quis neque. Natus.</p>
       </div>
       </div>
    </div>
</div>

<div className='foodservice-img'>
    <img src={cheesy} alt='' />
</div>
</div>
    </div>
  )
}

export default FoodService