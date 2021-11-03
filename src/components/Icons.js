import React from "react";
import { IconButton, LinkOverlay,LinkBox } from "@chakra-ui/react";
import { AiFillTwitterCircle } from "react-icons/ai";
import { GrYoutube } from "react-icons/gr";
import { BsFacebook } from "react-icons/bs";
export default function Icons(props) {
  const iconTags = [
    {
      tag: <BsFacebook size="28px" />,
      name: "Facebook",
      link: "https://web.facebook.com/Albaniyzaria",
    },
    {
      tag: <AiFillTwitterCircle size="28px" />,
      name: "Twitter",
      link: "https://twitter.com/daarul_hadeeth",
    },
    {
      tag: <GrYoutube size="28px" />,
      name: "Youtube",
      link: "https://www.youtube.com/channel/UCuHQzwilIUv3vnpySgx8Tiw",
    },
  ];
  return (
    <>
      {iconTags.map((icon) => {
        return (
          <LinkBox>
            <LinkOverlay href={icon.link}>
              <IconButton
                aria-label={icon.name}
                variant="unstyled"
                size="lg"
                isRound={true}
                icon={icon.tag}
                _focus={props.hover}
              />
            </LinkOverlay>
          </LinkBox>
        );
      })}
    </>
  );
}
