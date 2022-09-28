import { useSelector } from "react-redux";

const Listener = () => {
  const data = useSelector((state) => state);

  console.log("data: " + JSON.stringify(data));

  const colour = data.colours["colour"];
  const shape = data.shapes["shape"];
  const number = data.numbers["number"];

  return (
    <div
      style={{
        backgroundColor: "#FFDE59",
        padding: "15px",
        marginTop: "15px",
      }}
    >
      <h2>{"You selected " + colour + ", " + shape + " and " + number}</h2>
    </div>
  );
};

export default Listener;
