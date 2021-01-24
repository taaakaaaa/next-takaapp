import React from "react";

import {
  AiFillHome,
  AiOutlineFileImage,
  AiFillShopping,
  AiFillSnippets,
} from "react-icons/ai";

import { NavBarContainer, Title, Icons } from "../../styles/layout";

import { useRouter } from "next/router";
import NavItem, { NavItemProps } from "./NavItem";

export default function Navbar() {
  const history = useRouter();
  const listIcons: Array<NavItemProps> = [
    {
      icon: <AiFillHome />,
      size: 180,
      label: "home",
      link: "/",
    },
    {
      icon: <AiOutlineFileImage />,
      size: 200,
      label: "portfolio",
      link: "/portfolio",
    },
    {
      icon: <AiFillSnippets />,
      size: 240,
      label: "commissions",
      link: "/commissions",
    },
    {
      icon: <AiFillShopping />,
      size: 160,
      label: "cart",
      link: "/cart",
    },
  ];

  return (
    <NavBarContainer>
      <Title>
        T <br />
        A <br />
        K <br />
        A <br />
      </Title>
      <hr />
      <Icons>
        {listIcons.map((itemIcon, index) => (
          <NavItem key={index} {...itemIcon} history={history} />
        ))}
      </Icons>
    </NavBarContainer>
  );
}
