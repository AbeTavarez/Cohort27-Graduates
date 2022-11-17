import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const App = () => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src="C:\Users\Kelvin Freeman\Desktop\Coding\PerScholas\Assignments\Cohort27\Module 3\MyReactPractice\co38a4834950b81f65b4187b7\node_modules\serve-index\public\icons" />
      <Card.Body>
        <Card.Title>Kelvin Freeman</Card.Title>
        <Card.Text>
          I look forward to graduating.
        </Card.Text>
        <Card.Link href="#">GitHub</Card.Link>

        <Button variant="primary">GitHub</Button>
      </Card.Body>
    </Card>
  );
};

export default App