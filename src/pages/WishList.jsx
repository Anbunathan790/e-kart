import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import { addToWishlist, removeFromWishlist } from '../redux/slices/wishlistSlice';
import { addToCart } from '../redux/slices/cartSlice';

function WishList() {
  const wishlistArray=useSelector((state)=>state.wishlistReducer)
  console.log(wishlistArray);
  const dispatch=useDispatch()
  const handleWishlist=(item)=>{
    dispatch(addToCart(item))
    dispatch(removeFromWishlist(item.id))
  }
  return (
    <div>
      <Row className='mb-5'>
   
      {
        wishlistArray?.length>0?
          wishlistArray?.map((item)=>(
        <Col className='mb-5'>
    <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={item.thumbnail} style={{height:'200px'}} />
        <Card.Body>
          <Card.Title>
            <h3>{item.title}</h3>
          </Card.Title>
          <Card.Text>
            <p>Price £: {item.price}</p>
          </Card.Text>
        <div className='d-flex justify-content-between'>
        <Button  onClick={()=>dispatch(removeFromWishlist(item.id))}  variant="primary"><i class="fa-solid fa-trash"></i></Button>
        <Button onClick={()=>handleWishlist(item)} variant="primary"><i class="fa-solid fa-cart-shopping"></i></Button>
        </div>
        </Card.Body>
      </Card>
    </Col>))
    :<p>Nothing to display</p>}
  </Row></div>
  )
}

export default WishList