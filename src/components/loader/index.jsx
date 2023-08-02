import { PuffLoader } from "react-spinners";

const Loader = () => {
  const loaderStyles = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100vw",
    height: "100vh",
    background: "",
  };
  return (
    <div style={loaderStyles}>
      <PuffLoader color="#0397D6" size={150} />
    </div>
  );
};

export default Loader;
