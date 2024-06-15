import React, { useEffect, useState } from 'react'
import './App.css';
import Sidebar from './Caponents/Sidebar';
import Carousels from './Caponents/Carousels';
import Cards from './Caponents/Cards';
import axios from 'axios';

const Home = (props) => {
    const [allproduct, setAllproduct] = useState();
    const productHandler = async() => {
       const data = await axios.get('http://localhost:11000/product');
       setAllproduct(data?.data);
    }
    useEffect( () => {
        productHandler(); 
    },[]);

    return (
        <div className='container-fluid p-0 pt-4'>
            <div className='row'>

                {/* Sidebar Component*/}
                <div className='col-2 h-100'>
                    <div className='row'>
                        <div className='col'>
                            <Sidebar />
                        </div>
                    </div>
                </div>
                {/* Sidebar Component*/}
                <div className='col-10' style={{ height: '200px', borderLeft: '1px solid light' }}>
                    <div className='row'>
                        <div className='col'>
                            <Carousels />
                        </div>
                    </div>

                    {/* cards Component */}
                    <div className='row my-3 ps-0' style={{ borderLeft: '1px solid light', height: '20px'}}>
                        <div className='p-0 pe-5 mx-0 .flex-sm-column' style={{ display: 'flex',justifyContent: 'space-between',flexWrap: 'wrap'}}>
                            {
                                allproduct?.map( (dt) => (
                                    <div className='col-2 m-2' >
                                      <Cards props={dt}/>
                                   </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home