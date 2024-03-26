import { FC } from "react";
import "./style.scss";
import { Loader } from "../Loader";

type ColorScheme = "primary" | "secondary" | "danger" | "warning" | "text";

type Variant = "outline" | "solid" | "text" | "link";

type Size = "xs" | "sm" | "md" | "lg";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  alignIcon?: "left" | "right";
  className?: string;
  colorScheme?: ColorScheme;
  IconComponent?: React.ReactNode;
  loading?: boolean;
  size?: Size;
  text: string | React.ReactNode;
  variant?: Variant;
}

const Button: FC<Props> = ({
  type,
  colorScheme = "primary",
  size = "md",
  variant = "solid",
  text,
  loading = false,
  className,
  alignIcon = "left",
  IconComponent,
  disabled = false,
  ...buttonProps
}) => {
  const classMapping = {
    button: true,
    [`button__${colorScheme}-${variant}`]: true,
    [`button--${size}`]: true,
    "button--disabled": !!disabled,
    "button--loading": !!loading,
    [`button--icon-${alignIcon}`]: !!IconComponent,
    [className || ""]: !!className,
  };

  const classResult = Object.entries(classMapping)
    .filter(([, value]) => value)
    .map(([key]) => key)
    .join(" ");

  if (!buttonProps.onClick && !type) {
    return (
      <div className={classResult}>
        <div className="button__icon">{IconComponent}</div>
        <span className="button__text">{text}</span>
      </div>
    );
  }

  return (
    <button
      className={classResult}
      type={type || "button"}
      disabled={disabled || loading}
      {...buttonProps}
    >
      <div className="button__icon">{IconComponent}</div>
      <span className="button__text">
        {loading ? <Loader size="md" /> : text}
      </span>
    </button>
  );
};

export default Button;
