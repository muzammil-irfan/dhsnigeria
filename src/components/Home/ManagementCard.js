import React from "react";
import { Link } from "react-router-dom";
export default function ManagementCard(props) {
  return (
    <>
      <div className="card  bg-light border-success py-3 m-2">
        <img src={props.imgSource} className="card-img-top rounded-circle p-3 " alt='Server Problem' />
        <div className="py-3 d-flex justify-content-center ">
          <Link to={props.buttonUrl} className=" btn align-items-center d-flex btn-outline-success   text-start mx-3 w-75" style={{height:'7rem'}} >
            {props.buttonText}<br/>{props.buttonText2}
          </Link>
        </div>
      </div>
    </>
  );
}
