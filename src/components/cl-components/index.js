import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const CLCard = () => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src="https://avatars.githubusercontent.com/u/110962234?v=4" />
      <Card.Body>
        <Card.Title>Chris Legette</Card.Title>
        <Card.Text>
        Now, this is a story all about how
        My life got flipped-turned upside down
        And I'd like to take a minute
        Just sit right there
        I'll tell you how I became the prince of a town called Bel-Air.
        </Card.Text>
        {/* <Card.Link href="https://github.com/chrisleg19">GitHub</Card.Link> */}
        <a href="https://github.com/chrisleg19" target="_blank"><Button variant="primary">GitHub</Button></a>
      </Card.Body>
    </Card>
  );
};

export default CLCard;
