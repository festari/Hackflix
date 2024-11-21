import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-router-dom";
import InputGroup from "react-bootstrap/InputGroup";

function NavigationBar() {
  return (
    <>
      <div>
        {[false].map((expand) => (
          <Navbar
            key={expand}
            expand={expand}
            className="bg-body-tertiary"
            data-bs-theme="dark"
            sticky="top"
          >
            <Container fluid>
              <Navbar.Brand href="/">
                <img
                  alt=""
                  src="https://img.icons8.com/isometric/50/film-reel.png"
                  width="30"
                  height="30"
                  className="d-inline-block align-top"
                />
                Hackflix
              </Navbar.Brand>

              <InputGroup style={{ maxWidth: "300px" }}>
                <Form.Control
                  aria-label="Busca una película..."
                  aria-describedby="basic-addon1"
                  style={{ height: "40px", fontSize: "12px" }}
                />
                <Button
                  variant="outline-secondary"
                  id="button-addon1"
                  style={{ padding: "5px 10px" }}
                >
                  Buscar
                </Button>
              </InputGroup>

              <div className="d-flex align-items-center">
                <Button variant="info" className="me-2">
                  Registrate!✍
                </Button>
                <Button variant="outline-success">👤Inicia Sesion</Button>
              </div>

              <Navbar.Toggle
                aria-controls={`offcanvasNavbar-expand-${expand}`}
              />
              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement="end"
                data-bs-theme="dark"
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                    <h1>Information</h1>
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Nav className="justify-content-end flex-grow-1 pe-3">
                    <Nav.Link href="#action1">
                      <Link to="/">Home</Link>
                    </Nav.Link>
                    <Nav.Link href="#action2">
                      <Link to="/Info">Info</Link>
                    </Nav.Link>
                    <Nav.Link href="#action3">
                      <Link to="/About-Us">About Us</Link>
                    </Nav.Link>
                  </Nav>
                  <Form className="d-flex">
                    <Form.Control
                      type="search"
                      placeholder="Search"
                      className="me-2"
                      aria-label="Search"
                    />
                    <Button variant="outline-success">Search</Button>
                  </Form>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
          </Navbar>
        ))}
      </div>
    </>
  );
}

export default NavigationBar;
