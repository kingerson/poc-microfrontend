import { FC } from "react";

interface Props {
  className?: string;
  width?: number;
  height?: number;
}

const IconChevronDown: FC<Props> = ({
  className = "",
  width = 24,
  height = 24,
}) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      fill="currentColor"
      d="M12 16.5 4.5 9l1.05-1.05L12 14.4l6.45-6.45L19.5 9 12 16.5Z"
    />
  </svg>
);

export default IconChevronDown;
