import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Acordian({data}) {
    return (
        <Accordion defaultActiveKey="1">
            <Accordion.Item eventKey="0">
                <Accordion.Header>About</Accordion.Header>
                <Accordion.Body>
                    <Card.Title>{data.name}</Card.Title>
                    <Card.Text>{data.discription}</Card.Text>
                    <Button variant="primary">Buy now</Button>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
}

export default Acordian;