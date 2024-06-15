import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './App.css';

const Home = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            }
        ]
    };

    const stl = {
        width: '100%'
    }

    return (
        <div>
            <h2>React Slick Carousel Example</h2>
            <Slider {...settings}>
                <div style={stl}>
                    <img style={stl} src="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Slide 1"/>
                </div>
                <div>
                    <img style={stl} src="https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Slide 2" />
                </div>
                <div>
                    <img style={stl} src="image3.jpg" alt="Slide 3" />
                </div>
                {/* Add more slides here */}
            </Slider>
        </div>


    );
}
export default Home

// import Button from 'react-bootstrap/Button';
// import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import './App.css';

//   return(
   //   <div className="container-fluid bg-warning fs-5">
   //      <div className="row text-start">
   //          { 
   //       auth?<>
   //         <div className="col-md-1 py-3">
   //            <NavLink className="text-decoration-none active" to="/">Home</NavLink>
   //         </div>
   //         <div className="col-md-1 py-3">
   //            <NavLink className="text-decoration-none active" to="/Products">Products</NavLink>
   //         </div>
   //         <div className="col-md py-3">
   //            <NavLink className="text-decoration-none active" onClick={Logout} to="/Logout">Logout</NavLink>
   //         </div>
   //         <div className="col-md-1 py-3">
   //            <NavLink className="text-decoration-none active" to="/Admin">Admin</NavLink>
   //         </div>
   //      </>:<>
   //        <div className="col-md-1 py-3">
   //           <NavLink className="text-decoration-none active" to="/Signup">Signup</NavLink>
   //        </div>
   //       <div className="col-md py-3">
   //          <NavLink className="text-decoration-none active" to="/Login">Login</NavLink>
   //       </div>
   //      </>
   //     } 
   //      </div> 
   //   </div>
 // <Navbar expand="lg" className="bg-warning">
      //    <Container fluid>
      //       <Navbar.Brand href="#">Cart Management System</Navbar.Brand>
      //       <Navbar.Toggle aria-controls="navbarScroll" />
      //       <Navbar.Collapse id="navbarScroll">


      //          {
      //             auth ? <Nav
      //                className="ms-auto my-2 my-lg-0 font-weight-bold"
      //                style={{ maxHeight: '120px' }}
      //                navbarScroll
      //             >
      //                <Nav.Link href="/Cart">Cart</Nav.Link>
      //                <Nav.Link href="/Order">Order</Nav.Link>
      //                <Nav.Link onClick={Logout} href="/Logout">Logout</Nav.Link>
      //             </Nav> :
      //                <Nav
      //                   className="me-auto my-2 my-lg-0 font-weight-bold"
      //                   style={{ maxHeight: '120px' }}
      //                   navbarScroll
      //                >
      //                   <Nav.Link href="/Signup">Signup</Nav.Link>
      //                   <NavDropdown title="Login" id="navbarScrollingDropdown">
      //                      <NavDropdown.Item href="/AdminLogin">Admin Login</NavDropdown.Item>
      //                      <NavDropdown.Item href="/UserLogin">User Login</NavDropdown.Item>
      //                   </NavDropdown>
      //                </Nav>
      //          }
      //          <Form className="d-flex">
      //             <Form.Control
      //                type="search"
      //                placeholder="Search"
      //                className="me-2"
      //                aria-label="Search"
      //             />
      //             <Button variant="outline-light">Search</Button>
      //          </Form>
      //       </Navbar.Collapse>
      //    </Container>
      // </Navbar>

   //fdfdgf

