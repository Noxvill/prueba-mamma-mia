import { NavLink } from "react-router-dom";
import { Navbar } from "react-bootstrap"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import './Menubar.css'
import { Link } from "react-router-dom";
import { useContext } from "react";
import { PizzasContext } from "../context/PizzaProv";

export default function Menubar() {
const setActiveClass = ({ isActive }) => (isActive ? "active" : undefined);
const { carrito } = useContext(PizzasContext);
const total = carrito.reduce((a, { count, price }) => a + price * count, 0);


return (
<div>
<Navbar  expand="lg" fixed="top" style={{ height: '80px', backgroundColor:'rgb(37, 150, 190)'}}>
        <Container>

        <Link
            to="/">
        <Navbar.Brand>
          <img
            src="/pizza-icon.webp"
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="Pizzas mamma mía"
          />&nbsp;Pizzería Mamma mía!
        </Navbar.Brand>
        </Link>

        <Nav className="me-auto" style={{ marginLeft: '80%'}}>
      
        {/* <NavLink className={`text-white ${setActiveClass}`} to="/Home" style={{ marginRight: '10px' }} >Home</NavLink>
        <NavLink className={`text-white ${setActiveClass}`} to="/Pokemones">Pokemones</NavLink>
          */}
      <h4 className="mb-0">
          {""} Total: ${(total)}
            </h4>
        </Nav>
        </Container>
      </Navbar>

      </div>
);
}