import { useRouter } from "next/router";

import { useOrder } from "../../pages/_app";
import { Total } from "../../styles/cart";

export default function TotalComp() {
  const { orders, total } = useOrder();
  const history = useRouter();

  return (
    <Total>
      <div className="title">TOTAL</div>
      <div className="price">{total}</div>
      <button
        onClick={() => {
          if (orders.length > 0) history.push("/contact");
        }}
      >
        Continue
      </button>
    </Total>
  );
}
