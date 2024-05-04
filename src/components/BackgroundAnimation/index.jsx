import "./index.css";
const BackgroundAnimation = () => {
  return (
    <div
      className="-z-1 w-full h-[100vh] absolute left-[-30px] top-0 bg-no-repeat"
      style={{
        backgroundImage: `url(../../assets/images/layer-three.png)`,
      }}
    ></div>
  );
};
export default BackgroundAnimation;
