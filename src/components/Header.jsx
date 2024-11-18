import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

function Imagen() {
  return (
    <>
      <div>
        <div className="header">
          <nav
            className="bg-dark border-bottom border-body"
            data-bs-theme="dark"
          >
            <nav className="navbar bg-body-tertiary">
              <div className="container-fluid d-flex justify-content-between">
                <a className="navbar-brand" href="#">
                  <img
                    src="https://img.icons8.com/isometric/50/film-reel.png"
                    alt="movie-projector--v1"
                  />
                  Hackflix
                </a>
                <InputGroup style={{ maxWidth: "300px" }}>
                  <Button
                    variant="outline-secondary"
                    id="button-addon1"
                    style={{ padding: "5px 10px" }}
                  >
                    Buscar
                  </Button>
                  <Form.Control
                    aria-label="Busca una película..."
                    aria-describedby="basic-addon1"
                    style={{ height: "40px", fontSize: "12px" }}
                  />
                </InputGroup>

                <div>
                  <Button variant="info" className="me-2">
                    Registrate!✍
                  </Button>
                  <Button variant="outline-success">👤Inicia Sesion</Button>
                </div>
              </div>
            </nav>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Imagen;
