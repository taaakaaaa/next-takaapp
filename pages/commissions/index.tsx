import React from "react";

import Section from "../../components/commissions/Section";
import list from "../../public/data";

const Commissions = () => {
  return (
    <div>
      {list.map((listItem, index) => (
        <Section key={index} content={listItem} />
      ))}
    </div>
  );
};

export default Commissions;
