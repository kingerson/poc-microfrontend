import { FC, forwardRef, useState } from "react";
import IconEye from "../Icons/IconEye";
import IconEyeOff from "../Icons/IconEyeOff";
import { InputText } from "../InputText";
import "./style.scss";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  hasError?: boolean;
  forceFullWidth?: boolean;
  leftIcon?: React.ReactNode | string;
  rightIcon?: React.ReactNode | string;
  fullWidth?: boolean;
  "data-testid"?: string;
  boxSize?: "sm" | "md" | "lg";
}

const InputPasswordMask: FC<Props> = forwardRef<HTMLInputElement, Props>(
  (props, ref) => {
    const [isVisibility, setIsVisibility] = useState(false);

    const handleClick = () => {
      setIsVisibility(!isVisibility);
    };

    return (
      <InputText
        ref={ref || null}
        type={isVisibility ? "text" : "password"}
        rightIcon={
          <button
            type="button"
            data-testid="btn-password-visibility"
            className="input-password__button"
            onClick={handleClick}
          >
            {isVisibility ? <IconEye /> : <IconEyeOff />}
          </button>
        }
        {...props}
      />
    );
  }
);

InputPasswordMask.displayName = "InputPasswordMask";

export default InputPasswordMask;
