import React, { useEffect, useState } from 'react'
import Category from './Category'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import axios from 'axios'
import { Link, NavLink, useNavigate } from 'react-router-dom';

const ViewProduct = () => {
  const [alldata, setAlldata] = useState();
  const navigate = useNavigate();
  const viewproductHandler = async () => {
    const data = await axios.get('http://localhost:11000/product');
    setAlldata(data?.data);
  }
  useEffect(() => {
    viewproductHandler();
  }, []);

  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-2'>
          <div className='row'>
            <div className='col'>
              <Category />
            </div>
          </div>
        </div>
        <div className='col-10' style={{borderLeft:'1px solid gray'}}>
          <div className='row'>
            <div className='col'>
              <Table striped>
                <thead>
                  <tr>
                    <th>S.No</th>
                    <th>Product Name</th>
                    <th>Product Price</th>
                    <th>Product Qty</th>
                    <th>Product Category</th>
                    <th>Product Discription</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    alldata?.map((data, index) => (
                      <tr>
                        <td>{index+1}</td>
                        <td>{data.name}</td>
                        <td>{data.price}</td>
                        <td>{data.qty}</td>
                        <td>{data.category}</td>
                        <td>{data.discription}</td>
                        <td>
                          <ButtonGroup size="sm">
                            <Button variant="secondary" onClick={() => navigate(`/Delete/${data?._id}`)}>Delete</Button>
                            <Button variant="secondary" onClick={() => navigate(`/Edit/${data?._id}`)}>Edit</Button>
                          </ButtonGroup>
                        </td>
                      </tr>
                    ))
                  }
                </tbody>
              </Table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ViewProduct