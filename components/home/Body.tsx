import React from "react";

import { TwitchContainer, ContactContainer } from "../../styles/home";
import dynamic from "next/dynamic";

//@ts-ignore
const ReactTwitchEmbedVideo = dynamic(import("react-twitch-embed-video"), {
  ssr: false,
});

export default function Body() {
  return (
    <>
      <TwitchContainer>
        <h1>Watch Live at Twitch</h1>
        {/* 
        //@ts-ignore */}
        <ReactTwitchEmbedVideo channel="taaakaaaa" />
      </TwitchContainer>
      <ContactContainer>
        <h1>Contact</h1>
        <div className="social">
          <img
            onClick={() =>
              window.open("https://twitter.com/_taaakaaaa", "_blank")
            }
            src="/Twitter.png"
            alt="Twitter"
          />

          <img src="/Instagram.png" alt="Instagram" />
        </div>
      </ContactContainer>
    </>
  );
}
