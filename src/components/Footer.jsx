import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div style={{height:'300px'}} className='d-flex justify-content-center align-items-center w-100 flex-column'>
      <div className='d-flex justify-content-evenly w-100'>
        <div className='website' style={{width:'400px'}}>
        <h4>
        <i class="fa-solid fa-video text-warning me-3" style={{color:"blue"}}></i>
          E-Cart
        </h4>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non libero, a voluptas inventore dolorum nobis nam expedita consectetur magni aliquam explicabo quis odit necessitatibus dignissimos fugiat quibusdam perferendis amet culpa?
          </p>
          
        </div>
        <div className='links d-flex flex-column'>
          <h4 className='mb-3'>Links</h4>
          <Link to={'/'} style={{textDecoration:'none',}}>Home page  </Link>
          <Link to={'/cart'}style={{textDecoration:'none',}}> cart</Link>
          <Link to={'/wishlist'}style={{textDecoration:'none',}}> wishlist</Link>
        </div>
        <div className='guides d-flex flex-column'>
          <h4 className='mb-3'>Guides</h4>
          <Link to={'https://react.dev/'} style={{textDecoration:'none',color:'white'}}>React </Link>
          <Link to={'https://react-bootstrap.netlify.app/'} style={{textDecoration:'none',color:'white'}}>React Bootstrap</Link>
        </div>
        <div className='contacts d-flex flex-column'>
          <h4 className='mb-3'>Contact Us</h4>
          <div className='d-flex'>
            <input type="text" placeholder='Enter here' className='form-control' />
            <button className="btn btn-warning ms-3">Subscribe</button>
          </div>
          <div className='d-flex justify-content-evenly align-items-center mt-4'>
            <Link to={'/'} style={{textDecoration:'none'}}><i class="fa-brands fa-instagram"></i></Link>
            <Link to={'/home'} style={{textDecoration:'none'}}><i class="fa-brands fa-facebook"></i></Link>
            <Link to={'/wathchistory'} style={{textDecoration:'none'}}><i class="fa-brands fa-twitter"></i></Link>
            <Link to={'/wathchistory'} style={{textDecoration:'none'}}>
            <i class="fa-brands fa-linkedin"></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer