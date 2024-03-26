import { FC } from "react";
import "./style.scss";
import IconAlertCircle from "../Icons/IconAlertCircle";

interface Props {
  label?: string;
  iconRight?: JSX.Element;
  children: JSX.Element;
  htmlFor?: string;
  helperText?: string;
  error?: string;
  isDisabled?: boolean;
  isCompleted?: boolean;
  errorTestId?: string;
  IconComponent?: React.ReactNode;
  alignIcon?: "left" | "right";
  className?: string;
}

const LabelForm: FC<Props> = ({
  label,
  children,
  htmlFor,
  error,
  isDisabled,
  isCompleted,
  IconComponent,
  alignIcon,
  helperText,
  errorTestId = "",
  className = "",
}) => {
  const classMappingSub = {
    [`label-form__sub--disabled`]: !!isDisabled,
    [`label-form__sub--completed`]: !!isCompleted,
    [`label-form__sub--icon-${alignIcon}`]: !!IconComponent,
    [`label-form__sub--error`]: !!error,
  };

  const classResultSub = Object.entries(classMappingSub)
    .filter(([, value]) => value)
    .map(([key]) => key)
    .join(" ");

  return (
    <div
      data-testid={`label-form-${htmlFor}`}
      className={`label-form ${className}`}
    >
      <div className={`label-form__sub ${classResultSub}`}>
        {label && (
          <label
            htmlFor={htmlFor ?? undefined}
            data-testid={`label-form-${htmlFor}-label`}
            className={`label-form__label`}
          >
            {label}
          </label>
        )}
        {IconComponent}
      </div>
      <div
        data-testid={`label-form-${htmlFor}-input`}
        className="label-form__input"
      >
        {children}
      </div>
      {helperText && (
        <div
          data-testid={`label-form-${htmlFor}-helper-text`}
          className="label-form__helper-text"
        >
          {helperText}
        </div>
      )}
      {error && (
        <div
          data-testid={errorTestId || `label-form-${htmlFor}-error`}
          className="label-form__error"
        >
          <IconAlertCircle /> {error}
        </div>
      )}
    </div>
  );
};

export default LabelForm;
