const IconAlertCircle = ({ className = "" }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 16 16"
    width={16}
    height={16}
    fill="none"
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1Zm0 13A6 6 0 1 1 8 2a6 6 0 0 1 0 12Zm.5-10h-1v5.5h1V4Zm-.917 7.126a.75.75 0 1 1 .834 1.248.75.75 0 0 1-.834-1.248Z"
      clipRule="evenodd"
    />
  </svg>
);

export default IconAlertCircle;
