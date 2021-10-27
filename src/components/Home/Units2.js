import RightImageCard from "../RightImageCard";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
export default function Units2() {
  const buttonText = "Read More";
  const env = process.env.PUBLIC_URL;
  const dhs = `${env}/images/dhs.png`
  const asia = `${env}/images/asia.png`
  const sachis = `${env}/images/sachis.png`
  const aici = `${env}/images/aici.png`
  const headingClass = 'h4';
  return (
    <>
    <div className="container">
      <Tabs >
        <TabList >
          <Tab>DHS Unit</Tab>
          <Tab>ASIA Unit</Tab>
          <Tab>SACHIS Unit</Tab>
          <Tab>AICI Unit</Tab>
        </TabList>
      
      <TabPanels>
        <TabPanel p={0}>
          <RightImageCard
          headingClassRight={headingClass}
            imgSourceRight={dhs}
            headingRight="Daarul Hadeethis Salafiyyah"
            headingSpan="(DHS)"
            paraRight="This is a centre that is headed by a Coordinator and operates as a unit under the general DHSN, it activities are centered for the Islamic foundation and propagations."
            buttonTextRight={buttonText}
          />
        </TabPanel>
        <TabPanel p={0}>
          <RightImageCard
          headingClassRight={headingClass}
            imgSourceRight={asia}
            headingRight="Albaniy Science International Academy"
            headingSpan="(ASIA)"
            paraRight="This comprises of Pre-primary and Primary school (Day), Junior and Senior Secondary School (boarding). The school is structured for as standard science based learning environment and has students from both national and international countries."
            buttonTextRight={buttonText}
          />
        </TabPanel>
        <TabPanel p={0}>
          <RightImageCard
          headingClassRight={headingClass}
            imgSourceRight={sachis}
            headingRight="Sheikh Albaniy College of Higher Islamic Studies"
            headingSpan="(SACHIS)"
            paraRight="This unit focus on training intellectual Islamic scholars. It consist of a secondary school (Day &nbsp; Boarding)  and diploma programs, headed by a Principal and a Provost respectively. The school is structured for an Islamic, Arabic, Art and Science based learning environment and has students from both national and international countries."
            buttonTextRight={buttonText}
          />
        </TabPanel>
        <TabPanel p={0}>
          <RightImageCard
          headingClassRight={headingClass}
            imgSourceRight={aici}
            headingRight="ICT and Capacity Building Unit"
            headingSpan="(AICI)"
            paraRight="This is a unit serving for the proposed (soon to be established) Albaniy Institute of Computing and ICT, it is headed by a Head of Unit, it’s a unit that manages all the ICT affairs of DHSN at large, other unit ICT, The Media, E-learning, Workshops, Trainings, Certificates and Diploma in Computer Sciences (programs) etc."
            buttonTextRight={buttonText}
          />
        </TabPanel>
      </TabPanels>
      </Tabs>
      </div>
    </>
  );
}
