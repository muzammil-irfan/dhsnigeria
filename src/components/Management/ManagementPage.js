import React from 'react'
import ManagementCard from '../Home/ManagementCard'
export default function ManagementPage() {
    return (
        <>
        <div className="container d-flex justify-content-center p-3">
          <div className="row  ">
            <div className="my-3 col-md-6 col-12">
              <ManagementCard
                imgSource={`${process.env.PUBLIC_URL} /images/Adam-AUwal-Abaniy.jpg`}
                buttonText="(Late) Sheikh Muhammad Auwal Adam (Albaniy)"
                buttonText2="| Founder"
              />
            </div>
            <div className="my-3 col-md-6 col-12">
              <ManagementCard
                imgSource={`${process.env.PUBLIC_URL} /images/Prof-Nafiu-Abdu.jpg`}
                buttonText="Prof. Abdurrafiu Abdulganiyyu"
                buttonText2="| Director"
              />
            </div>
            <div className="my-3 col-md-6 col-12">
              <ManagementCard
                imgSource={`${process.env.PUBLIC_URL} /images/Dr-Kabir-Asgar.jpg`}
                buttonText="Dr. Kabir Abubakar Amin (Asgar)"
                buttonText2="| Deputy Director"
              />
            </div>
            <div className="my-3 col-md-6 col-12">
              <ManagementCard
                imgSource={`${process.env.PUBLIC_URL} /images/yahaya-abdullahi.jpeg`}
                buttonText="Shiekh Yahaya Abdullahi"
                buttonText2="| Chairman, Board of Trustees"
              />
          </div>
            </div>
        </div>
        </>
    )
}
