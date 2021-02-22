import { useEffect, useState } from "react";
import axios from "axios";

import { useRouter } from "next/router";

import { Button } from "../../styles/commissions";
import { ContactContainer } from "../../styles/contact";
import { cardProps, cardPropsContact, useOrder } from "../../pages/_app";

export default function Finish() {
  const { orders, contactInfo, cleanOrders } = useOrder();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<null | string>(null);
  const history = useRouter();

  useEffect(() => {
    if (orders.length > 0) {
      placeOrder();
    } else {
      history.push("/commissions");
    }
  }, []);

  const placeOrder = () => {
    axios
      .post("https://stark-springs-93239.herokuapp.com/", {
        orders,
        contactInfo,
      })
      .then((response) => {
        setLoading(false);
        cleanOrders();
      })
      .catch((response) => {
        setLoading(false);
        setError("Error placing order.");
      });
  };

  if (loading) {
    return (
      <ContactContainer>
        <img style={{ height: "50vh" }} src="/Loading.gif" alt="Loading..." />
        <h1>Placing order...</h1>
      </ContactContainer>
    );
  }

  if (error) {
    <ContactContainer>
      <h1>{error}</h1>

      <Button
        style={{ width: 700 }}
        onClick={() => {
          placeOrder();
        }}
      >
        Retry
      </Button>
    </ContactContainer>;
  }

  return (
    <ContactContainer>
      <h1>Order placed! we will enter in contact with you.</h1>

      <Button
        style={{ width: 700 }}
        onClick={() => {
          history.push("/");
        }}
      >
        Home
      </Button>
    </ContactContainer>
  );
}
