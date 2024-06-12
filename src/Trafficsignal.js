function Trafficsignal({ color, isActive, onClick }) {
  const glowStyle = isActive ? "0 0 10px 5px yellow" : "none";

  return (
    <div
      className="traffic-signal"
      style={{
        backgroundColor: color,
        boxShadow: glowStyle,
      }}
      onClick={onClick}
    ></div>
  );
}

export default Trafficsignal;
