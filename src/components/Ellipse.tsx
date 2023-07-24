import { CSSProperties, FC } from "react";

interface EllipseProps {
  top?: CSSProperties["top"];
  left?: CSSProperties["left"];
  right?: CSSProperties["right"];
  bottom?: CSSProperties["bottom"];
}

const Ellipse: FC<EllipseProps> = (props) => {
  return (
    <div
      className="z-50 border-2 rounded-full w-96 h-96 ellipse"
      style={{
        top: props?.top,
        left: props?.left,
        right: props?.right,
        bottom: props?.bottom,
      }}
    ></div>
  );
};

export default Ellipse;
