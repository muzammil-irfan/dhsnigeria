import Apply from "./Apply";
import React from "react";
import {
  Box,
  IconButton,
  useBreakpointValue,
  Stack,
  Heading,
  Text,
  Container,
} from "@chakra-ui/react";
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
// And react-slick as our Carousel Lib
import Slider from "react-slick";

// Settings for the slider
const settings = {
  dots: false,
  arrows: false,
  fade: false,
  infinite: true,
  autoplay: false,
  speed: 500,
  autoplaySpeed: 3000,
  slidesToShow: 1,
  slidesToScroll: 1,
};
const imageUrl = `${process.env.PUBLIC_URL}/images/main-banner.jpg`;
export default function CaptionCarousel(props) {
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = React.useState(null);

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: "90%", md: "50%" });
  const side = useBreakpointValue({ base: "30%", md: "40px" });
  // This list contains all the data for carousels
  // This can be static or loaded from a server
  const cards = [
    {
      title: props.heading,
      text: props.para,
      image: imageUrl,
    },
    {
      title: props.heading,
      text: props.para,
      image: imageUrl,
    },
    {
      title: props.heading,
      text: props.para,
      image: imageUrl,
    },
  ];

  return (
    <div className="container">
      <Box
        mt={2}
        position={"relative"}
        height={"500px"}
        width={"full"}
        overflow={"hidden"}
      >
        {/* CSS files for react-slick */}
        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
        {/* Left Icon */}
        <IconButton
          aria-label="left-arrow"
          variant=""
          position="absolute"
          left={side}
          top={top}
          transform={"translate(0%, -50%)"}
          zIndex={2}
          onClick={() => slider?.slickPrev()}
        >
          <BiLeftArrowAlt size="40px" />
        </IconButton>
        {/* Right Icon */}
        <IconButton
          aria-label="right-arrow"
          variant="ghost"
          position="absolute"
          right={side}
          top={top}
          transform={"translate(0%, -50%)"}
          zIndex={2}
          onClick={() => slider?.slickNext()}
        >
          <BiRightArrowAlt size="40px" />
        </IconButton>
        {/* Slider */}
        <Slider {...settings} ref={(slider) => setSlider(slider)}>
          {cards.map((card, index) => (
            <Box
              key={index}
              height={'500px'}
              position="relative"
              backgroundPosition="center"
              backgroundRepeat="no-repeat"
              backgroundSize="fit"
              backgroundImage={`url(${card.image})`}

            >
              {/* This is the block you need to change, to customize the caption */}
              <Container justify='center' size="" color='#fff' height="500px" position="relative">
                <Stack
                  w={{base:'90%',md:'full'}}
                  maxW={"lg"}
                  position="absolute"
                  top="50%"
                  transform="translate(0, -50%)"
                >
                  <Heading align='center'fontSize={{ base: '16px', md: '2xl' }}>
                  {card.title}
                </Heading>
                  <Text align='center' fontSize={{ base: "10px", md: "lg" }} >
                    {card.text}
                  </Text>
                  <Box
                  align='center'
                  spacing={4}
                  >
                    <Apply />
                    </Box>
                </Stack>
              </Container>
            </Box>
          ))}
        </Slider>
      </Box>
    </div>
  );
}
