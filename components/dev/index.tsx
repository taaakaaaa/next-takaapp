import { useState } from "react";

import { useRouter } from "next/router";

import { ContactContainer } from "../../styles/contact";

export default function Finish() {
  const [loading, setLoading] = useState(true);
  const history = useRouter();

  return (
    <ContactContainer>
      <h1>This system was entirely created by one person!</h1>
      <h3>
        He's a fullstack developer that can do pretty much anything releted to
        web apps
      </h3>
      <h2>interested? just enter in contact</h2>
      <ul>
        <li
          onClick={() =>
            window.open(
              "https://discordapp.com/users/258365728783073281",
              "_blank"
            )
          }
        >
          <span style={{ marginRight: 10 }}>Discord:</span> Dudu#3132
        </li>
        <li onClick={() => window.open("mailto:dudubtway@gmail.com", "_blank")}>
          <span style={{ marginRight: 10 }}>Email:</span> dudubtway@gmail.com
        </li>
        <li
          onClick={() => window.open("https://twitter.com/dudubtway", "_blank")}
        >
          <span style={{ marginRight: 10 }}>Twitter:</span> @dudubtway
        </li>
      </ul>
    </ContactContainer>
  );
}
