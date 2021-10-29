import React from "react";
export default function RightImageCard(props) {
  return (
    <>
      <div className="card p-3 ">
        <div className="row d-flex flex-column-reverse flex-lg-row align-items-center ">
          <div className="col-lg-8 ">
            <div className="card-body gap-3 d-grid">
     {/* eslint-disable-next-line */}
              <h1 className="card-title" className={props.headingClassRight}>
                {props.headingRight}
                <span className='text-success'>{props.headingSpan}</span>
              </h1>
              <p className="card-text fs-6">{props.paraRight}</p>
              <p className="card-text">
                <a href="/" class="btn btn-lg btn-outline-success">
                  {props.buttonTextRight}
                </a>
              </p>
            </div>
          </div>
          <div className="col-lg-4">
            <img
              src={props.imgSourceRight}
              className="img-fluid rounded-start "
              alt={props.imgAltRight}
            />
          </div> 
        </div>
      </div>
      
    </>
  );
}
