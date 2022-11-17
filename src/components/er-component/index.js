import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const ERCard = () => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img
        variant="top"
        src="https://pbs.twimg.com/profile_images/1482781155107774467/UYsOLlgY_400x400.jpg"
      />
      <Card.Body>
        <Card.Title>Essence Rigby</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <a
          className="App-link"
          href="https://github.com/codedependant74"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button variant="primary">GitHub</Button>
        </a>
      </Card.Body>
    </Card>
  );
};

export default ERCard;
