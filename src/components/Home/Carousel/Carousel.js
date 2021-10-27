import React from "react";
import Apply from "./Apply";
export default function Carousel(props) {
  const imageUrl =`${process.env.PUBLIC_URL}/images/main-banner.jpg`;
  return (
    <>
      <div className="container my-3 ">
        <div
          id="carouselExampleCaptions"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators ">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src={imageUrl}
                className="d-block w-100"
                alt="Carousel"
              />
              <div className="container">
                <div className="carousel-caption">
                  <h5>{props.heading}</h5>
                  <p className="carouselPara">{props.para1}</p>
                  <Apply />
                  <button type="button" class="btn btn-outline-light mx-2">
                    Portal
                  </button>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src={imageUrl}
                className="d-block w-100"
                alt="carousel"
              />
              <div className="container">
                <div className="carousel-caption">
                  <h5>{props.heading}</h5>
                  <p className="carouselPara">{props.para1}</p>
                  <Apply />
                  <button type="button" class="btn btn-outline-light mx-2">
                    Portal
                  </button>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src={imageUrl}
                className="d-block w-100"
                alt="carousel"
              />
              <div className="container">
                <div className="carousel-caption">
                  <h5>{props.heading}</h5>
                  <p className="carouselPara">{props.para1}</p>
                  <Apply />
                  <button type="button" class="btn btn-outline-light mx-2">
                    Portal
                  </button>
                </div>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </>
  );
}
