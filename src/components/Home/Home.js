import React from 'react'
import About from './About';
import Carousel from './Carousel/Carousel'
import Management from './Management';
import Units from './Units';
import Units2 from "./Units2";


export default function Home() {
    const para1="Daarul Hadeethis Salafiyyah Nigeria (DHSN) is a non-charitable Islamic foundation founded by a Prominent Nigerian Islamic scholar; (Late) Sheikh Muhammad Auwal Adam Albaniy Zaria.";
    const UnitText1 = 'This is a centre that is headed by a Coordinator and operates as a unit under the general DHSN, it activities are centered for the Islamic foundation and propagations.';
    const UnitText2 = 'This comprises of Pre-primary and Primary school (Day), Junior and Senior Secondary School (boarding). The school is structured for as standard science based learning environment and has students from both national and international countries.';
    const UnitText3 = 'This unit focus on training intellectual Islamic scholars. It consist of a secondary school (Day & Boarding) and diploma programs, headed by a Principal and a Provost respectively. The school is structured for an Islamic, Arabic, Art and Science based learning environment and has students from both national and international countries.';
    return (
        <>
        <Carousel heading="Welcome to DHSN" para={para1} />
        <About />
        <Units 
        cardText1={UnitText1.slice(0,125)} 
        cardText2={UnitText2.slice(0,125)} 
        cardText3={UnitText3.slice(0,125)}/>
        <Units2 />
        <Management />
        </>
    )
}
