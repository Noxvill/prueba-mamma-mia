import { Navbar } from "react-bootstrap"
import { Link} from "react-router-dom"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';


const Menubar = () =>{

    return(

<>
      <Navbar bg="danger" data-bs-theme="Danger" expand="lg" fixed="top">
        <Container>
        
          {/* <Navbar.Brand href="" className="text-light"><Link to="Home">home</Link></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="" className="text-light"><Link to="Contacto">Contacto</Link></Nav.Link>
            <Nav.Link href="" className="text-light"><Link to="/">Happy Cake</Link></Nav.Link>
          </Nav> */}
        </Container>
      </Navbar>
</>

    )

}

export default Menubar