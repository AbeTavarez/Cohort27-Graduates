import logo from "./logo1.svg";
import "./App.css";
import CardsList from "./components/CardsList/CardsList";
import { Container } from "react-bootstrap";


function App() {
  return (
    <div className="App">
    
      <header className="App-header">
        <img src={logo} alt="logo" />
        <a
          className="App-link"
          href="https://perscholas.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Per Scholas
        </a>
      </header>
      <Container>
        <CardsList />
      </Container>
    </div>
  );
}

export default App;
