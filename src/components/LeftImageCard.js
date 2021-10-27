import React from "react";
// ("https://source.unsplash.com/600x600/?nature,sea");
// About DHSN
export default function LeftImageCard(props) {
  return (
    <div className="container">
      <div className="card my-5">
        <div className="row d-flex align-items-center">
          <div className="col-lg-4">
            <img
              src={props.imgSource}
              className="img-fluid rounded-start"
              alt="..."
            />
          </div>
          <div className="col-lg-8 ">
            <div className="card-body gap-3 d-grid">
              <h1 className="card-title" className={props.headingClassLeft}>
                {props.heading}
              </h1>
              <p className="card-text fs-6">{props.para}</p>
              <p className="card-text">
                <a href="#" class="btn btn-lg btn-outline-success">
                  {props.buttonText}
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
