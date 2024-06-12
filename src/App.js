import { useState } from "react";

import Trafficlight from "./Trafficlight.js";
import Trafficstick from "./Trafficstick.js";
import Trafficbox from "./Trafficbox.js";
import Trafficsignal from "./Trafficsignal.js";

export default function App() {
  const [activeSignal, setActiveSignal] = useState(null);

  const handleClick = (color) => {
    setActiveSignal(color === activeSignal ? null : color);
  };

  return (
    <Trafficlight>
      <Trafficstick />
      <Trafficbox>
        <Trafficsignal
          color="red"
          isActive={activeSignal === "red"}
          onClick={() => handleClick("red")}
        />
        <Trafficsignal
          color="#FFBF00"
          isActive={activeSignal === "#FFBF00"}
          onClick={() => handleClick("#FFBF00")}
        />
        <Trafficsignal
          color="green"
          isActive={activeSignal === "green"}
          onClick={() => handleClick("green")}
        />
      </Trafficbox>
    </Trafficlight>
  );
}
