import React from "react";
import ManagementCard from "./ManagementCard";

export default function Management() {
  return (
    <>
      <div className="container">
        <div className="header p-2 m-4 fs-2 fw-bold">
          <h1 className="text-center">Management</h1>
        </div>
        <div className="container d-flex justify-content-center">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-xl-4 ">
            <div className="col">
              <ManagementCard
                imgSource={`${process.env.PUBLIC_URL} /images/Adam-AUwal-Abaniy.jpg`}
                buttonText="(Late) Sheikh Muhammad Auwal Adam (Albaniy)"
                buttonText2="| Founder"
              />
            </div>
            <div className="col">
              <ManagementCard
                imgSource={`${process.env.PUBLIC_URL} /images/Prof-Nafiu-Abdu.jpg`}
                buttonText="Prof. Abdurrafiu Abdulganiyyu"
                buttonText2="| Director"
              />
            </div>
            <div className="col">
              <ManagementCard
                imgSource={`${process.env.PUBLIC_URL} /images/Dr-Kabir-Asgar.jpg`}
                buttonText="Dr. Kabir Abubakar Amin (Asgar)"
                buttonText2="| Deputy Director"
              />
            </div>
            <div className="col">
              <ManagementCard
                imgSource={`${process.env.PUBLIC_URL} /images/yahaya-abdullahi.jpeg`}
                buttonText="Shiekh Yahaya Abdullahi"
                buttonText2="| Chairman, Board of Trustees"
              />
            </div>
          </div>
        </div>
        <div className=" my-4 row justify-content-center">
          <button className="btn w-50 btn-outline-success py-3 fs-5" type='button'>
            View All Staff
          </button>
        </div>
      </div>
    </>
  );
}
