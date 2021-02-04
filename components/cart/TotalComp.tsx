import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";

import { useOrder } from "../../pages/_app";
import { Total } from "../../styles/cart";

export default function TotalComp() {
  const { orders, total } = useOrder();
  let { t } = useTranslation();
  const history = useRouter();

  return (
    <Total>
      <div className="title">{t("cart:total")}</div>
      <div className="price">{total}</div>
      <button
        onClick={() => {
          if (orders.length > 0) history.push("/contact");
        }}
      >
        {t("cart:next")}
      </button>
    </Total>
  );
}
