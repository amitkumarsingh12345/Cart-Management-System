import Carousel from 'react-bootstrap/Carousel';

function Carousels() {
    return (
        <Carousel data-bs-theme="white">
            <Carousel.Item className='h-25' style={{ height: '200px' }}>
                <img
                    className="d-block w-100"
                    src="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="First slide"
                    style={{ height: '200px' }}
                />
                <Carousel.Caption className='text-white'>
                    <h5>Cart Management System</h5>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={{ height: '200px' }}>
                <img
                    className="d-block w-100"
                    src="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Second slide"
                    style={{ height: '200px' }}
                />
                <Carousel.Caption >
                    <h5>Cart Management System</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={{ height: '200px' }}>
                <img
                    className="d-block w-100"
                    src="https://images.pexels.com/photos/750073/pexels-photo-750073.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Third slide"
                    style={{ height: '200px' }}
                />
                <Carousel.Caption className='text-light'>
                    <h5>Cart Management System</h5>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default Carousels;