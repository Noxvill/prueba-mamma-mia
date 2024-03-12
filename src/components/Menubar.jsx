import { NavLink } from "react-router-dom";
import { Navbar } from "react-bootstrap"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import './Menubar.css'
import { Link } from "react-router-dom";


export default function Menubar() {
const setActiveClass = ({ isActive }) => (isActive ? "active" : undefined);



return (
<div>
<Navbar  expand="lg" fixed="top" style={{ height: '80px', backgroundColor:'rgb(37, 150, 190)'}}>
        <Container>
        <Navbar.Brand>
          <img
            src="/pokemon-go.svg"
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="Pokemon Go Logo"
          />Pizzería Mamma mía!
        </Navbar.Brand>
  

        <Nav className="me-auto" style={{ marginLeft: '80%'}}>
      
        <NavLink className={`text-white ${setActiveClass}`} to="/Home" style={{ marginRight: '10px' }} >Home</NavLink>
        <NavLink className={`text-white ${setActiveClass}`} to="/Pokemones">Pokemones</NavLink>
         
      
        </Nav>
        </Container>
      </Navbar>

      </div>
);
}