
import Nav from "react-bootstrap/Nav";

export default function TOC() {
    return (
      <Nav variant="pills">
     <Nav.Item>
       <Nav.Link href="#/Labs">Lab 1</Nav.Link>
     </Nav.Item>
     <Nav.Item>
       <Nav.Link href="#/Labs/Lab1">Lab 1</Nav.Link>
     </Nav.Item>
     <Nav.Item>
       <Nav.Link href="#/Labs/Lab2">Lab 2</Nav.Link>
     </Nav.Item>
     <Nav.Item>
       <Nav.Link href="#/Labs/Lab2">Lab 3</Nav.Link>
     </Nav.Item>
     <Nav.Item>
       <Nav.Link href="#/Kambaz">Kambaz</Nav.Link>
     </Nav.Item>
     <Nav.Item>
       <Nav.Link href="https://github.com/yogiyu1/kambaz-react-web-app">My GitHub</Nav.Link>
     </Nav.Item>
   </Nav>

    );
  }
  