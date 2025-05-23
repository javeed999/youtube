import { ThreeDots } from "react-loader-spinner";

const Loader = ({ color = "#ffffff", height = 50, width = 50 }) => {
  return (
    <div className="loader-container" data-testid="loader">
      <ThreeDots color={color} height={height} width={width} />
    </div>
  );
};

export default Loader;
