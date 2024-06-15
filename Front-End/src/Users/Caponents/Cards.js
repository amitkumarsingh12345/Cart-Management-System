import Card from 'react-bootstrap/Card';
import Acordian from './Acordian';

function Cards({props}) {
  return (
    <Card style={{ width: '13rem' }}>
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
          <Acordian data={props}/>
      </Card.Body>
    </Card>
  );
}

export default Cards;