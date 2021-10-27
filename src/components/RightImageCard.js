import React from "react";

export default function RightImageCard(props) {
  return (
    <>
      <div className="card ">
        <div className="row d-flex flex-column-reverse flex-lg-row align-items-center ">
          <div className="col-lg-8 ">
            <div className="card-body gap-3 d-grid">
              <h1 className="card-title" className={props.headingClass}>
                {props.heading}
                <span className='text-primary'>{props.headingSpan}</span>
              </h1>
              <p className="card-text fs-6">{props.para}</p>
              <p className="card-text">
                <a href="#" class="btn btn-lg btn-outline-success">
                  {props.buttonText}
                </a>
              </p>
            </div>
          </div>
          <div className="col-lg-4">
            <img
              src={props.imgSource}
              className="img-fluid rounded-start"
              alt="..."
            />
          </div>
        </div>
      </div>
      
    </>
  );
}
