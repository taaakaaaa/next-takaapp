import React from "react";
import { Image } from "../../styles/commissions";
import dynamic from "next/dynamic";

const SimpleImageSlider = dynamic(import("react-simple-image-slider"), {
  ssr: false,
});

import { useSpring } from "react-spring";

export default function ImageCard({
  images,
  direction,
}: {
  images: {
    url: string;
  }[];
  direction: boolean;
}) {
  const props = useSpring({
    from: {
      opacity: 0,
      transform: "scale(0) translateX(-50%)",
    },
    to: {
      opacity: 1,
      transform: "scale(1) translateX(-5vw)",
    },
    delay: 200,
  });

  return (
    <Image column={direction} style={props}>
      <SimpleImageSlider
        //@ts-ignore
        className="image"
        navStyle={2}
        bgColor={"#f0f0f0"}
        showNavs={true}
        showBullets={true}
        width={"100%"}
        height={"100%"}
        images={images}
      />
    </Image>
  );
}
