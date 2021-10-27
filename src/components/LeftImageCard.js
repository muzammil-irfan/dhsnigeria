import React from "react";
import { Link } from "react-router-dom";
// ("https://source.unsplash.com/600x600/?nature,sea");
// About DHSN
export default function LeftImageCard(props) {
  return (
    <div className="container">
      <div className="card my-5">
        <div className="row d-flex align-items-center">
          <div className="col-lg-4">
            <img
              src={props.imgSourceLeft}
              className="img-fluid rounded-start"
              alt="..."
            />
          </div>
          <div className="col-lg-8 ">
            <div className="card-body gap-3 d-grid">
              {/* eslint-disable-next-line */}
              <h1 className="card-title" className={props.headingClassLeft}>
                {props.headingLeft}
              </h1>
              <p className="card-text fs-6">{props.paraLeft}</p>
              <p className="card-text">
                <Link to={props.linkLeft} class="btn btn-lg btn-outline-success">
                  {props.buttonTextLeft}
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
