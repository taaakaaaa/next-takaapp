import React from "react";
import { CardProps } from "../../public/data";
import { SectionContainer } from "../../styles/commissions";
import SectionCard from "./SectionCard";

export default function Section({ content }: { content: CardProps }) {
  return (
    <SectionContainer>
      <h1>{content.type}</h1>
      {content.content.map((item, index) => (
        <SectionCard key={index} cat={content.type} item={item} />
      ))}
    </SectionContainer>
  );
}
