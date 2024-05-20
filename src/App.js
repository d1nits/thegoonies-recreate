import "./styles.css";
import Plx from "react-plx";

export default function App() {
  return (
    <div>
      <Plx
        parallaxData={[
          {
            start: 0,
            end: 400,
            properties: [
              {
                startValue: 1,
                endValue: 0,
                property: "opacity",
              },
            ],
          },
        ]}
        style={{
          position: "absolute",
          top: "350px",
          left: "486px",
          width: "372px",
          height: "77px",
          objectFit: "contain",
          zIndex: 4,
        }}
      >
        <img
          style={{ width: "100%" }}
          src="foreground@2x.png"
          alt="foreground"
        />
      </Plx>

      <Plx
        parallaxData={[
          {
            start: 0,
            end: 800,
            properties: [
              {
                startValue: 1,
                endValue: 1.18,
                property: "scale",
              },
            ],
          },
        ]}
        style={{
          position: "absolute",
          top: 0,
          right: "11px",
          width: "1440px",
          height: "834px",
          objectFit: "cover",
          zIndex: 3,
        }}
      >
        <img style={{ width: "100%" }} src="headerbg@2x.png" alt="background" />
      </Plx>

      <Plx
        parallaxData={[
          {
            start: 0,
            end: 700,
            easing: "ease-in",
            properties: [
              {
                startValue: 1,
                endValue: 1.6,
                property: "scale",
              },
            ],
          },
        ]}
        style={{
          position: "absolute",
          top: 0,
          left: "-20px",
          width: "1471px",
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          zIndex: 5,
        }}
      >
        <img style={{ width: "100%" }} src="header@2x.png" alt="Goonies" />
      </Plx>
    </div>
  );
}
