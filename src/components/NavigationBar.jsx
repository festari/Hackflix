import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-router-dom";

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
              <Navbar className="bg-body-tertiary">
                <Container>
                  <Navbar.Brand href="/">
                    <img
                      alt=""
                      src="https://img.icons8.com/?size=100&id=13479&format=png&color=000000"
                      width="30"
                      height="30"
                      className="d-inline-block align-top"
                    />
                    Hackflix
                  </Navbar.Brand>
                </Container>
              </Navbar>

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
