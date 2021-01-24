import React from "react";

import { TwitchContainer, ContactContainer } from "../../styles/home";
import {
  TwitchEmbed,
  //@ts-ignore
} from "react-twitch-embed";

export default function Body() {
  return (
    <>
      <TwitchContainer>
        <h1>Watch Live at Twitch</h1>
        <TwitchEmbed
          channel="taaakaaaa"
          id="taaakaaaa"
          theme="dark"
          muted
          onVideoPause={() => console.log(":(")}
        />
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
