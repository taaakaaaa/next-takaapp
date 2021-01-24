import "../styles/globals.css";

import { RoutesContainer } from "../styles/layout";
import NavBar from "../components/layout";
import { AppProps } from "next/dist/next-server/lib/router/router";
import { createContext, useContext, useEffect, useState } from "react";
import { CardItemProps } from "../public/data";

// function getdefData() {
//   var data = localStorage.getItem("orders");
//   if (data) {
//     return JSON.parse(data);
//   } else {
//     return [];
//   }
// }

export interface cardPropsContact {
  twitter?: string;
  discord?: string;
  email?: string;
}

export interface cardProps {
  quantity: number;
  description: string;
  info?: CardItemProps;
}

const OrderContext = createContext({
  orders: [],
  contactInfo: {},
  addOrder: (newOrder: cardProps) => {},
  removeOrder: (newOrder: number) => {},
  total: 0,
});

export const useOrder = () => {
  return useContext(OrderContext);
};

function MyApp({ Component, pageProps }: AppProps) {
  const order = useProviderOrder();

  return (
    <OrderContext.Provider value={order}>
      <RoutesContainer>
        <Component {...pageProps} />
      </RoutesContainer>
      <NavBar />
    </OrderContext.Provider>
  );
}

function useProviderOrder() {
  const [orders, setOrders] = useState<Array<cardProps>>([]);
  const [contactInfo, setContactInfo] = useState<cardPropsContact>({});
  const [total, setTotal] = useState(0);

  useEffect(() => {
    let totalTemp = 0;

    for (let i = 0; i < orders.length; i++) {
      const element = orders[i];
      totalTemp += Number(element.info?.price) * element.quantity;
    }

    setTotal(totalTemp);
  }, [orders, setOrders]);

  const addOrder = (newOrder: cardProps) => {
    setOrders([...orders, newOrder]);
  };

  const removeOrder = (index: number) => {
    const newOrder = orders.filter((item, i) => index !== i);

    setOrders(newOrder);
  };

  return { orders, contactInfo, addOrder, removeOrder, total };
}

export default MyApp;
