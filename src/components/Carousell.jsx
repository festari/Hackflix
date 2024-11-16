import React from "react";
import "./Carousell.css"
import Carousel from "react-bootstrap/Carousel";

function Carousell() {
  return (
    <div className="Imagen">
      <Carousel data-bs-theme="dark">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/3e461415-cff4-49a9-9589-baed37615a07/demjz1j-714ecd7b-6200-467c-9572-1e59ae2dc2e7.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzNlNDYxNDE1LWNmZjQtNDlhOS05NTg5LWJhZWQzNzYxNWEwN1wvZGVtanoxai03MTRlY2Q3Yi02MjAwLTQ2N2MtOTU3Mi0xZTU5YWUyZGMyZTcuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.JCUXuHJ6TcZfQSsvdMssstYprc5nGaiOxz6FUBZ9ZfE"
            alt="First slide"
          />
          <Carousel.Caption>
            <div className="captions">
              <h5>Lorem</h5>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://wallpaperaccess.com/full/8642963.gif"
            alt="Second slide"
          />
          <Carousel.Caption>
            <div className="captions">
              <h5>Lorem</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.pinimg.com/originals/63/ac/dd/63acddddfa31f5cccaf0563ed8f69e57.gif"
            alt="Third slide"
          />
          <Carousel.Caption>
            <div className="captions">
              <h5>Lorem</h5>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Carousell;
