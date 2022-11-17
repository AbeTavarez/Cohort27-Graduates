import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'

const Asow = () => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c15c4f2f-039f-48eb-8339-cad57b2b5353/da0373y-5e90f4d3-e020-4e2c-ad35-7bead062a572.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2MxNWM0ZjJmLTAzOWYtNDhlYi04MzM5LWNhZDU3YjJiNTM1M1wvZGEwMzczeS01ZTkwZjRkMy1lMDIwLTRlMmMtYWQzNS03YmVhZDA2MmE1NzIuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.WHfdoujXOK7FXQm5ufsD1ADvOXyhpxlrJG1ofYhSy-g" />
      <Card.Body>
        <Card.Title>ABDULAI SOW</Card.Title>
        <Card.Text>
          Hey there, I am Abdulai Sow the COO of Tooli teas. we produce the best tea from West Africa. Give it a try today!
        </Card.Text>
        <a href="https://github.com/abdulai1sow" target='_blank'>
          <Button variant="primary" >Github</Button>
        </a>
      </Card.Body>
    </Card>
  )
}

export default Asow