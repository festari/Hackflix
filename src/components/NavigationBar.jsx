import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-router-dom";
import "./NabegationBar.css";

function NavigationBar({ setSearchQuery }) {
  return (
    <>
      <div>
        <Navbar
          key={false}
          expand={false}
          className="bg-body-tertiary"
          fixed="top"
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
              variant="secondary"
              className="ms-2 spacebuttom"
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
                className="me-2 searcher"
                aria-label="Search"
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Button variant="secondary" className="buttom-style">
                Buscar
              </Button>
            </Form>
            <div
              className="d-flex align-items-center ms-auto"
              style={{ marginRight: "10px" }}
            >
              <Link to="/Register">
                <Button variant="secondary" className="me-2">
                  Registrate!
                </Button>
              </Link>
              <Link to="/Login">
                <Button variant="secondary" className="me-2">
                  Inicia sesion
                </Button>
              </Link>
            </div>

            <Navbar.Toggle aria-controls={`offcanvasNavbar-false-${false}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-false-${false}`}
              aria-labelledby={`offcanvasNavbarLabel-false-${false}`}
              placement="end"
              data-bs-theme="light"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title
                  id={`offcanvasNavbarLabel-false-${false}`}
                  className="w-100 text-center"
                >
                  <h2 style={{ color: "black", margin: 0 }} className="font">
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
                  <Button variant="secondary">Buscar</Button>
                </Form>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link to="/home" className="buttom-style-nav">
                    <Link to="/home">
                      <Button variant="secondary" className="buttonSpace">
                        Inicio
                      </Button>
                    </Link>
                  </Nav.Link>

                  <Nav.Link href="/Info" className="buttom-style-nav">
                    <Link to="/Info">
                      <Button variant="secondary" className="buttonSpace">
                        ¿Quienes Somos?
                      </Button>
                    </Link>
                  </Nav.Link>

                  <Nav.Link href="/ourselection" className="buttom-style-nav">
                    <Link to="/ourselection">
                      <Button variant="secondary" className="buttonSpace">
                        Nuestra Seleccion
                      </Button>
                    </Link>
                  </Nav.Link>

                  <Link to="/About-Us" className="buttom-style-nav">
                    <Nav.Link href="/About-us">
                      <Button variant="secondary" className="buttonSpace">
                        Sobre Nosotros
                      </Button>
                    </Nav.Link>
                  </Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      </div>
    </>
  );
}

export default NavigationBar;
