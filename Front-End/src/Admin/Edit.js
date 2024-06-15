import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react'
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Category from './Category';

const Edit = () => {
    const params = useParams();
    const navigate = useNavigate();
    const [validated, setValidated] = useState(false);
    const [category, setCategory] = useState();

    const editHandler = async () => {
        const data = await axios.put(`http://localhost:11000/product/${params.id}`);
        //    navigate('/ViewProduct');
        console.log(data);
    }
    useEffect(() => {
        editHandler();
    }, []);

    const categoryHandler = async () => {
        const data = await axios.get('http://localhost:11000/category');
        setCategory(data?.data);
    }
    useEffect(() => {
        categoryHandler();
    }, []);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        setValidated(true);
    };

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
                <div className='col-10'>
                    <div className='row'>
                        <div className='col'>

                            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                                <Row className="mb-3" >
                                    <Form.Group as={Col} md="10" controlId="validationCustom01">
                                        <Form.Label>Product name</Form.Label>
                                        <Form.Control
                                            required
                                            type="text"
                                            placeholder="Product name"
                                        />
                                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                    </Form.Group>
                                </Row>
                                <Row className="mb-3" >
                                    <Form.Group as={Col} md="10" controlId="validationCustom02">
                                        <Form.Label>Product price</Form.Label>
                                        <Form.Control
                                            required
                                            type="text"
                                            placeholder="Product price"
                                        />
                                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                    </Form.Group>
                                </Row>
                                <Row className="mb-3" >
                                    <Form.Group as={Col} md="10" controlId="validationCustom02">
                                        <Form.Label>Product qty</Form.Label>
                                        <Form.Control
                                            required
                                            type="text"
                                            placeholder="Product qty"
                                        />
                                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                    </Form.Group>
                                </Row>
                                <Row className="mb-3" >
                                    <Form.Group as={Col} md="10" controlId="validationCustom01">
                                        <Form.Label>Product category</Form.Label>
                                        <Form.Select
                                            required
                                            aria-label="Default select example">
                                            {category?.map((data, index) => <option value={index + 1}>{data.name}</option>)}
                                        </Form.Select>
                                    </Form.Group>
                                </Row>
                                <Row className="mb-3" >
                                    <Form.Group as={Col} md="10" controlId="validationCustom01">
                                        <Form.Group controlId="formFile" className="mb-3">
                                            <Form.Label>Choose image</Form.Label>
                                            <Form.Control
                                                required
                                                type="file"
                                            />
                                        </Form.Group>
                                    </Form.Group>
                                </Row>
                                <Row className="mb-3" >
                                    <Form.Group as={Col} md="10" controlId="validationCustomUsername">
                                        <Form.Label>Product discription</Form.Label>
                                        <InputGroup hasValidation>
                                            <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                                            <Form.Control
                                                type="text"
                                                aria-describedby="inputGroupPrepend"
                                                required
                                                as="textarea" rows={2}
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                Please choose a username.
                                            </Form.Control.Feedback>
                                        </InputGroup>
                                    </Form.Group>
                                </Row>
                                <Button type="submit">Submit form</Button>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Edit;