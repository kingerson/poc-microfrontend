import "./style.scss";
import { Ref, forwardRef } from "react";

export interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  hasError?: boolean;
  fullWidth?: boolean;
  leftIcon?: React.ReactNode | string;
  rightIcon?: React.ReactNode | string;
  "data-testid"?: string;
  boxSize?: "sm" | "md" | "lg";
}

const InputText = (
  {
    hasError,
    fullWidth,
    leftIcon,
    rightIcon,
    className = "",
    boxSize = "md",
    ...props
  }: Props,
  ref?: Ref<HTMLInputElement>
) => {
  const inputClassNameMapping: { [key: string]: boolean } = {
    [className]: !!className,
    "input-text--error": !!hasError,
    "input-text--full-width": !!fullWidth,
  };
  const inputClassName = Object.entries(inputClassNameMapping)
    .filter(([, value]) => value)
    .map(([key]) => key)
    .join(" ");

  return (
    <div
      data-testid={`input-${props.name}-container`}
      className={`input-text input-text--${boxSize} ${inputClassName}`}
    >
      {leftIcon && (
        <span
          data-testid={`input-${props.name}-left-icon`}
          className={"input-text__icon input-text__icon--left"}
        >
          {leftIcon}
        </span>
      )}
      <input
        ref={ref || null}
        {...props}
        data-testid={props["data-testid"] ?? `${props.id}`}
        id={props.id || props.name}
        type={props.type || "text"}
        className={"input-text__input"}
      />
      {rightIcon && (
        <span
          data-testid={`input-${props.name}-right-icon`}
          className={"input-text__icon input-text__icon--right"}
        >
          {rightIcon}
        </span>
      )}
    </div>
  );
};

export default forwardRef(InputText);
