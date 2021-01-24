import { useOrder } from "../_app";
import { CartItem } from "../../styles/cart";
import { AiOutlineClose } from "react-icons/ai";
import { IconContext } from "react-icons/lib";

import { useTransition } from "react-spring";
import TotalComp from "../../components/cart/TotalComp";

export default function Cart() {
  const { orders, removeOrder } = useOrder();

  const transitions = useTransition(orders, (item) => item.quantity, {
    from: { transform: "translate3d(-100px,0px,0)", opacity: 0 },
    enter: { transform: "translate3d(0,0px,0)", opacity: 1 },
    leave: { transform: "translate3d(-100px,0px,0)", opacity: 0 },
    trail: 50,
    unique: true,
  });

  // const trail = useTrail(orders.length, {
  //   to: { transform: "translate3d(0,0px,0)" },
  //   from: { transform: "translate3d(-100px,0px,0)" },
  //   reset: false,
  // });

  return (
    <div style={{ display: "flex", width: "100%" }}>
      <div
        style={{
          flex: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {orders.length > 0 ? (
          transitions.map(({ item, props, key }, index) => {
            if (item.info) {
              return (
                <CartItem style={props} image={item.info.images[0].url}>
                  <div className="icon" onClick={() => removeOrder(index)}>
                    <IconContext.Provider
                      value={{
                        color: "red",
                        size: "35px",
                        style: {
                          padding: 10,
                        },
                        className: "icon",
                      }}
                    >
                      <AiOutlineClose />
                    </IconContext.Provider>
                  </div>
                  <div className="price">
                    {Number(item.info.price) * item.quantity}
                  </div>
                  <div className="description">{item.description}</div>
                  <div className="type">{item.info.title}</div>
                </CartItem>
              );
            }
            return null;
          })
        ) : (
          <h1>No items</h1>
        )}
      </div>
      <TotalComp />
    </div>
  );
}
