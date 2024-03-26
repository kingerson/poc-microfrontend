import { FC, ReactNode } from "react";
import "./style.scss";

interface Props {
  children?: ReactNode;
  size?: "sm" | "md" | "lg";
}

const Loader: FC<Props> = ({ children, size }) => {
  return (
    <div className={`loader loader--${size}`}>
      <span className={`loader__spinner loader__spinner--${size}`}></span>
      {children && <div>{children}</div>}
    </div>
  );
};

export default Loader;
