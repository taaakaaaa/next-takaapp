import Link from "next/link";

import { useSpring, animated } from "react-spring";
import { HeaderStyle, CardContainer, Card } from "../../styles/home";

export default function Header() {
  const props = useSpring({
    to: { opacity: 1, transform: "translate3d(0px,0px,0px)" },
    from: { opacity: 0, transform: "translate3d(0px,-300px,0px)" },
  });

  return (
    <animated.div style={props}>
      <HeaderStyle>
        <div className="main">
          <div>
            <h1>
              TAKA
              <br />
              COMISSIONS
            </h1>
            <br />
            <br />
            <h2>
              Change Your Life
              <br />
              Do One Now
            </h2>
          </div>
          <Link href="/commissions">
            <a className="link" href="">
              Start
            </a>
          </Link>
        </div>
        <CardContainer>
          <Card image="https://pbs.twimg.com/media/Eqkwx7iXYAIFcaM?format=jpg&name=large">
            <label>teste</label>
          </Card>
        </CardContainer>
      </HeaderStyle>
    </animated.div>
  );
}
