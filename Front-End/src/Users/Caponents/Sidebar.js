import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from 'react-router-dom';
import Home from '../Home';

const Sidebar = () => {
    const [category, setCategory] = useState();
    const categoryHandler = async () => {
        const data = await axios.get('http://localhost:11000/category');
        setCategory(data?.data);
    }
    useEffect(() => {
        categoryHandler();
    }, []);

    const viewCategoryHandler = async(props) => {
        const data = await props;
        console.log(data);
        <Home props={data}/>
    } 

    return (
        <ListGroup variant="secondary">
            <ListGroup.Item><h2>Category</h2></ListGroup.Item>
            {
                category?.map((dt) => (<ListGroup.Item>
                <Link 
                style={{ textDecoration: 'none' }} 
                onClick={() => viewCategoryHandler(dt)}>{dt.name}
                </Link>
                </ListGroup.Item>))
            }
        </ListGroup>
    )
}

export default Sidebar