import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from 'react-router-dom';
import '../Users/App.css'

const Category = () => {
    return (
        <ListGroup variant="flush">
          <ListGroup.Item>
            <Link to='/AddCategory' className='text'>Add Category</Link>
          </ListGroup.Item>
          <ListGroup.Item>
            <Link to='/DeleteCategory' className='text'>Delete Category</Link>
          </ListGroup.Item>
          <ListGroup.Item>
            <Link to='/EditCategory' className='text'>Edit Category</Link>
          </ListGroup.Item>
          <ListGroup.Item>
            <Link to='/ViewCategory' className='text'>View Category</Link>
          </ListGroup.Item>
          <ListGroup.Item>
            <Link to='/AddProduct' className='text'>Add Product</Link>
          </ListGroup.Item>
          <ListGroup.Item>
            <Link to='/ViewProduct' className='text'>View Product</Link>
          </ListGroup.Item>
        </ListGroup>
  )
}

export default Category