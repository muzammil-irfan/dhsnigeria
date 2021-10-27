import React from 'react'
import Navbar from '../Navbar';
import LeftImageCard from '../LeftImageCard';
export default function AboutPage() {
    const imgSource = `${process.env.PUBLIC_URL}/images/dhsn-about.PNG`;
  const heading = 'About DHSN';
  const headingClass = 'h1';
  const origionalPara = 'Daarul Hadeethis Salafiyyah Nigeria (DHSN) is a non-charitable Islamic foundation founded by a Prominent Nigerian Islamic scholar; (Late) Sheikh Muhammad Auwal Adam Albaniy Zaria and incumbently managed by a Director; Prof. Abdurrafiu Abdulganiyyu and a Deputy Director; Dr. Kabir Abubakar Amin (Asgar). It is a private institution that operate a full Islamic philosophy system in it activities and at present stake operates various Islamic and humanity programmes, Diploma programmes, Nursery school, Primary school and a Secondary school. DHSN also renders services such as Orphanage sponsorship, Scholarships, Motherless baby sponsorship, Awareness, Lectures etc. With the mission to develop, educate and train future leaders who are righteous, kindhearted and altruistic under the spirit of Islamic culture and philosophy.';
  const buttonText = 'Our journey';
    return (
        <>
        <LeftImageCard 
    imgSource={imgSource}
    heading={heading}
    headingClass={headingClass}
    para={origionalPara}
    buttonText={buttonText}
    />
        </>
    )
}
