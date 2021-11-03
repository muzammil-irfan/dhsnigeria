import { Container,Flex,Heading,Box } from "@chakra-ui/layout";
import React from "react";
import CenterImageCard from "../CenterImageCard";
export default function Units(props) {
  const env = `${process.env.PUBLIC_URL}/images`;
  const data = [
    {
      text:"This is a centre that is headed by a Coordinator and operates as a unit under the general DHSN, it activities are centered for the Islamic foundation and propagations.",
      image:`${env}/banner3.jpg`
    },
    {
      text:"This comprises of Pre-primary and Primary school (Day), Junior and Senior Secondary School (boarding). The school is structured for as standard science based learning environment and has students from both national and international countries.",
      image:`${env}/banner4.jpg`
    },
    {
      text:"This unit focus on training intellectual Islamic scholars. It consist of a secondary school (Day & Boarding) and diploma programs, headed by a Principal and a Provost respectively. The school is structured for an Islamic, Arabic, Art and Science based learning environment and has students from both national and international countries.",
      image:`${env}/banner5.jpg`
    }
  ];
  return (
    <>
    <Container maxW="7xl" align="center">
      <Heading textAlign='center'>
        Some Of Our Units
      </Heading>
      <Flex spacing={6} my={6} justifyContent="space-around" flexDirection={{base:"column",sm:"row"}}>
        {
          data.map((data)=>{
            return(
              <Box>
              <CenterImageCard maxWidth="350px" para={data.text} imgSource={data.image} buttonText="Read more"/>
              </Box>
            )
          })
        }
        
      </Flex>
    </Container>
        {/* <div className="album py-3 bg-light ">
          
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
              <div className="col">
                <div className="card ">
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
        </div> */}
      
    </>
  );
}
