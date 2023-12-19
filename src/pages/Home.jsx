import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import useFetch from '../hooks/useFetch';
import { useDispatch, useSelector } from 'react-redux';
import { addToWishlist } from '../redux/slices/wishlistSlice';
import { addToCart } from '../redux/slices/cartSlice';

function Home() {
  const data=useFetch('https://dummyjson.com/products')
  console.log(data);
const dispatch=useDispatch()
  return (
<Row className='mb-5'>
  { data?.length>0?
  data?.map(item=>(
    <Col className='mb-5'>
  <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={item.thumbnail} style={{height:'200px'}} />
      <Card.Body>
        <Card.Title>{item.title}</Card.Title>
        <Card.Text>
          {item.description.slice(0,20)}...
          <p>Price £: {item.price}</p>
        </Card.Text>
      <div className='d-flex justify-content-between'>
      <Button onClick={()=>dispatch(addToWishlist(item))} variant="primary"><i class="fa-solid fa-heart"></i></Button>
      <Button onClick={()=>dispatch(addToCart(item))} variant="primary"><i class="fa-solid fa-cart-shopping"></i></Button>
      </div>
      </Card.Body>
    </Card>
  </Col>))
  :<p>Nothing to show</p>
  }
</Row>
  )
}

export default Home