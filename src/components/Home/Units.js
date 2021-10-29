import React from "react";
export default function Units(props) {
  const env = process.env.PUBLIC_URL;
  const image1 = `${env}/images/banner3.jpg`;
  const image2 = `${env}/images/banner4.jpg`;
  const image3 = `${env}/images/banner5.jpg`;
  return (
    <>
      <div className="container">
        <div className="album py-3 bg-light">
          <div className="container">
          <div className="header p-2 m-4 fs-2 fw-bold">
          <h1 className="text-center">Some Of Our Units</h1>
        </div>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
              <div className="col">
                <div className="card">
                  <img
                    className="bd-placeholder-img card-img-top"
                    src={image1}
                    alt='Server Problem'
                  />
                  <div className="card-body d-flex align-content-around flex-wrap" style={{height:'15rem'}}>
                    <p className="card-text">{props.cardText1} ...</p>
                    <a href="/" className="btn btn-lg btn-outline-success my-2 ">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card">
                  <img
                    className="bd-placeholder-img card-img-top"
                    src={image2}
                    alt='Server Problem'
                  />
                  <div className="card-body d-flex align-content-around flex-wrap" style={{height:'15rem'}}>
                    <p className="card-text">{props.cardText2} ...</p>
                    <a href="/" className="btn btn-lg btn-outline-success my-2">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card">
                  <img
                    className="bd-placeholder-img card-img-top"
                    src={image3}
                    alt='Server Problem'
                  />
                  <div className="card-body d-flex align-content-around flex-wrap" style={{height:'15rem'}}>
                    <p className="card-text">{props.cardText3} ...</p>
                    <a href="/" className="btn btn-lg btn-outline-success my-2">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
      
    </>
  );
}
