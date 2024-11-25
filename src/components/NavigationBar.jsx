import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-router-dom";
import InputGroup from "react-bootstrap/InputGroup";
import Login from "./pages/Login";
import "./NabegationBar.css";

function NavigationBar({ setSearchQuery }) {
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

              <Button
                as={Link}
                to="/ourselection"
                variant="outline-info"
                className="ms-2"
              >
                Nuestra Seleccion
              </Button>

              <div
                className="d-flex align-items-center ms-auto"
                style={{ marginRight: "10px" }}
              ></div>
              <Form className="d-flex mb-3">
                <Form.Control
                  type="search"
                  placeholder="Busca una película..."
                  className="me-2"
                  aria-label="Search"
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Button variant="outline-success">Buscar</Button>
              </Form>
              <div
                className="d-flex align-items-center ms-auto"
                style={{ marginRight: "10px" }}
              >
                <Button variant="info" className="me-2">
                  Registrate!
                </Button>
                <Button variant="outline-success" className="me-2">
                  <Link to="/Login">Inicia secion</Link>
                </Button>
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
                  <Offcanvas.Title
                    id={`offcanvasNavbarLabel-expand-${expand}`}
                    className="w-100 text-center"
                  >
                    <h2 style={{ color: "white", margin: 0 }} className="font">
                      HackFlix™
                    </h2>
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Form className="d-flex mb-3">
                    <Form.Control
                      type="search"
                      placeholder="Busca una película..."
                      className="me-2"
                      aria-label="Search"
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <Button variant="outline-success">Buscar</Button>
                  </Form>
                  <Nav className="justify-content-end flex-grow-1 pe-3">
                    <Button variant="light" className="buttonSpace">
                      <Nav.Link to="/home">
                        <Link to="/home">Inicio</Link>
                      </Nav.Link>
                    </Button>

                    <Button variant="light" className="buttonSpace">
                      <Nav.Link href="/Info">
                        <Link to="/Info">¿Quienes Somos?</Link>
                      </Nav.Link>
                    </Button>

                    <Button variant="light" className="buttonSpace">
                      <Nav.Link href="/ourselection">
                        <Link to="/ourselection">Nuestra Seleccion</Link>
                      </Nav.Link>
                    </Button>

                    <Button variant="light" className="buttonSpace">
                      <Link to="/About-Us">
                        <Nav.Link href="/About-us">Sobre Nosotros</Nav.Link>
                      </Link>
                    </Button>
                  </Nav>
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
