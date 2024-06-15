import { useNavigate } from "react-router-dom";

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './App.css';

const Header = () => {
   const navigate = useNavigate();
   const auth = localStorage.getItem("user");
   const admin = localStorage.getItem('admin');

   const Logout = () => {
      localStorage.removeItem("user");
      localStorage.removeItem("admin");
      navigate('/');
   }
   return (
      <Navbar expand="lg" className="bg-warning">
         <Container fluid>
            <Navbar.Brand href="#">Cart Management System</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
               {
                  auth ? <Nav
                     className="ms-auto my-2 my-lg-0 font-weight-bold"
                     style={{ maxHeight: '120px' }}
                     navbarScroll
                  >
                     <Nav.Link href="/Cart">Cart</Nav.Link>
                     <Nav.Link href="/Order">Order</Nav.Link>
                     <Nav.Link onClick={Logout} href="/Logout">Logout</Nav.Link>
                  </Nav> :
                     <Nav
                        className="me-auto my-2 my-lg-0 font-weight-bold"
                        style={{ maxHeight: '120px' }}
                        navbarScroll
                     >
                        {admin ? <Nav.Link onClick={Logout} href="/Logout">Logout</Nav.Link> :
                           <><Nav.Link href="/Signup">Signup</Nav.Link>
                              <NavDropdown title="Login" id="navbarScrollingDropdown">
                                 <NavDropdown.Item href="/AdminLogin">Admin Login</NavDropdown.Item>
                                 <NavDropdown.Item href="/UserLogin">User Login</NavDropdown.Item>
                              </NavDropdown>
                           </>}
                     </Nav>
               }
               <Form className="d-flex">
                  <Form.Control
                     type="search"
                     placeholder="Search"
                     className="me-2"
                     aria-label="Search"
                  />
                  <Button variant="outline-light">Search</Button>
               </Form>
            </Navbar.Collapse>
         </Container>
      </Navbar>

   )
}
export default Header