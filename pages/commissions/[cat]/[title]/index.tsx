import React from "react";
import { useRouter } from "next/router";
import { config, useSpring, animated } from "react-spring";

import Card from "../../../../components/commissions/Card";
import list from "../../../../public/data";
import { Title } from "../../../../styles/commissions";
import { useOrder } from "../../../_app";

function ComItem(item) {
  const history = useRouter();
  const props = useSpring({
    from: { transform: "translate3d(100px,0px,0px)" },
    to: { transform: "translate3d(0px,0px,0px)" },
    reset: true,
    config: config.default,
  });
  const { addOrder } = useOrder();

  const finish = (
    quantity: number | string,
    description: string,
    afther: string
  ) => {
    addOrder({
      description: description,
      quantity: Number(quantity),
      info: item,
    });

    history.push(afther);
  };

  return (
    <>
      {item && <Card content={item} finish={finish} />}
      <>
        <Title>
          <animated.div style={props}>
            {item &&
              item.title &&
              item.title
                .toUpperCase()
                .split("")
                .map((item, index) => (
                  <span key={index}>
                    {item} <br />{" "}
                  </span>
                ))}
          </animated.div>
        </Title>
      </>
    </>
  );
}

ComItem.getInitialProps = ({ query }) => {
  const { cat, title } = query;

  console.log(cat, title);

  var items = list
    .find((item1) => item1.type === cat)
    ?.content.find((item2) => item2.title === title);

  return items;
};

export default ComItem;
