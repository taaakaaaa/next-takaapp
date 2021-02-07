import styled from "styled-components";

export const TwitchContainer = styled.div`
  /* padding: 30px 60px; */
  height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  background: black;

  h1 {
    color: white;
    margin: 0px;
    padding: 0px;
    font-size: 3.36rem;
    font-weight: 600;
    letter-spacing: 4px;
    padding-bottom: 10px;
  }

  span {
    color: #cecece;
  }
`;

export const ContactContainer = styled.div`
  /* padding: 30px 60px; */
  height: 70vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  background: white;

  h1 {
    color: black;
    margin: 0px;
    padding: 0px;
    font-size: 3.36rem;
    font-weight: 600;
    letter-spacing: 4px;
    padding-bottom: 10px;
  }

  .social {
    width: 70%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    img {
      transition: 0.2s ease-in-out;
      cursor: pointer;
      width: 25vw;

      :hover {
        transform: scale(1.1);
        transition: 0.2s ease-in-out;
      }
    }
  }
`;

export const HeaderStyle = styled.header`
  /* background: blue; */
  /* width: 100vw; */
  height: 100vh;
  max-width: 100vw;
  display: flex;
  /* flex-direction: column; */
  align-items: center;
  justify-content: center;

  .main {
    /* margin: 0px 4vw; */
    max-width: 100vw;
    flex-grow: 3;
    flex-grow: 1;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    @media (max-width: 1300px) {
      transform: translateX(5vw);
    }

    @media (max-width: 850px) {
      transform: translateX(10vw);
    }
    z-index: 3;
    justify-content: space-evenly;
    /* padding: 4vw; */
    h1 {
      margin: 0px;
      padding: 0px;

      font-size: clamp(2rem, 3vw, 5rem);
      font-weight: 600;
      letter-spacing: 40px;
    }

    h2 {
      margin: 0px;
      padding: 0px;

      font-size: 1.4rem;
      letter-spacing: 5px;
      text-transform: uppercase;
      font-weight: 400;
      color: #515151;
      line-height: 35px;
    }

    .link {
      transition: 0.2s all;
      text-align: center;
      text-transform: uppercase;
      padding: 20px;
      color: white;
      text-decoration: none;
      background: black;
      margin: 20px 0px;
      border: none;
      width: 50%;

      font-size: 1.3rem;
      font-weight: 500;
      letter-spacing: 10px;

      :hover {
        background: rgba(0, 0, 0, 0.9);
        transform: translateY(-2px);
      }
    }
  }
`;

interface CardPorp {
  image: string;
}

export const CardContainer = styled.div`
  @media (max-width: 850px) {
    display: none;
  }

  min-width: 10vw;
  flex-grow: 1;
  flex: 3;
  text-align: center;
  height: 100%;
  width: 100%;

  .item {
    height: 90vh;
  }

  .thmb {
    height: 10vh;
  }
`;

export const Card = styled.div`
  height: 100%;
  width: 100%;
  background-image: ${({ image }: CardPorp) => `url("${image}");`};

  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  background-color: #fff2f2;

  position: relative;

  label {
    cursor: pointer;
    color: white;
    font-size: 1.6rem;
    letter-spacing: 5px;
    transition: 0.2s all;

    left: -20px;
    right: 20px;
    bottom: 20px;
    height: 80px;

    position: absolute;
    background: black;

    display: flex;
    justify-content: center;
    align-items: center;

    :hover {
      background: rgba(0, 0, 0, 0.9);
    }
  }
`;
