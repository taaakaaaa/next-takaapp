import { IconContext } from "react-icons/lib";
import { AiOutlineFileImage } from "react-icons/ai";
import { animated, useSpring } from "react-spring";

export default function teste() {
  const [{ y }, set] = useSpring(() => ({ y: 0 }));

  return (
    <>
      <div
        onClick={() => {
          set({ y: y.getValue() === 400 ? 0 : 400 });
        }}
        style={{ position: "fixed", top: 0, left: 0 }}
      >
        {" "}
        <IconContext.Provider
          value={{
            color: "black",
            size: "30px",
          }}
        >
          <AiOutlineFileImage />
        </IconContext.Provider>
      </div>
      <animated.div
        style={{
          width: y.interpolate((v) => `${v}px`),
          height: "100vh",
          background: "#FFF2F2",
        }}
      >
        <br />
        <br />
        <br />
        <br />
        Taka
      </animated.div>
    </>
  );
}
