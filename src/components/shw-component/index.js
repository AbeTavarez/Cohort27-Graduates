import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const ShWCard = () => {
    return(
        <div>
            <h1>Shanel Hickman Whitmore</h1>
        </div>
        <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="https://media-exp1.licdn.com/dms/image/D5635AQEZxOHOVX8geA/profile-framedphoto-shrink_200_200/0/1663429235492?e=1669309200&v=beta&t=X3BpKToLZOCuYV6uNmAMtDtBhbdET9PAGSM-DFsPNWU" />
        <Card.Body>
          <Card.Title>Austin Sampson</Card.Title>
          <Card.Text>
My name is Shanel. I will be a graduate of the Per Scholas Full Stack Software Engineering Program in less than a week! So Excited!
          </Card.Text>
          <Card.Link href="#">GitHub</Card.Link>
          {/* <Button variant="primary">GitHub</Button> */}
        </Card.Body>
      </Card>
    )
}