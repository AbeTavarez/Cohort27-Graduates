import React from "react"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const LHCard = () => {
  return(
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src="https://avatars.githubusercontent.com/u/103510126?v=4" />
    <Card.Body>
      <Card.Title>Latoya</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the
        bulk of the card's content.
      </Card.Text>
      <Card.Link href="https://github.com/LatoyaHead"></Card.Link>
      <Button variant="primary">Github</Button>
    </Card.Body>
  </Card>
  )
}

export default LHCard