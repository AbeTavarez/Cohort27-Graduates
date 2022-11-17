import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const NTCard = () => {
    return (
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://avatars.githubusercontent.com/u/110924630?s=60&v=4" />
        <Card.Body>
          <Card.Title>Nelia T</Card.Title>
          <Card.Text>
                Salt Life
          </Card.Text>
          {/* <Card.Link href="#">Github</Card.Link> */}

          <a href="https://github.com/MaNeliaTerrell" target='_blank' ><Button variant="primary">Github</Button></a>
        </Card.Body>
      </Card>
    );
};

export default NTCard