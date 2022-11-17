import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const LSCard = () => {
    return (
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="https://avatars.githubusercontent.com/u/110977901?s=96&v=4" />
          <Card.Body>
            <Card.Title>Lachezar Shishmanov</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <a href='https://github.com/LachezarShishmanov' target='_blank'>
          <Button variant="primary">GitHub</Button>
        </a>
          </Card.Body>
        </Card>
      );
    };

export default LSCard;
