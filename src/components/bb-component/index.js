import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const bbCard = () => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src="https://avatars.githubusercontent.com/u/39171176?v=4" />
      <Card.Body>
        <Card.Title>Abraham Tavarez</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Card.Link href="#">GitHub</Card.Link>
        {/* <Button variant="primary">GitHub</Button> */}
      </Card.Body>
    </Card>
  );
};

export default bbCard;
