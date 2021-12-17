import { SVGProps, memo } from "react";

interface ShowerRainProps extends SVGProps<SVGSVGElement> {
  height?: string;
  width?: string;
}

const ShowerRain = (props: ShowerRainProps) => {
  const { height = "100px", width = "100px" } = props;
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 30.744 25.158"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M21.68 6.59h-.458a3.213 3.213 0 0 0-4.46-2.505 4.782 4.782 0 0 0-9.02-.934 2.796 2.796 0 0 0-.695-.09 2.8 2.8 0 0 0-2.53 3.995 2.903 2.903 0 0 0 1.573 5.34h15.59a2.903 2.903 0 1 0 0-5.806"
        fill="#fff"
      />
      <path
        d="M21.68 6.59h-.458a3.213 3.213 0 0 0-4.46-2.505 4.782 4.782 0 0 0-9.02-.934 2.796 2.796 0 0 0-.695-.09 2.8 2.8 0 0 0-2.53 3.995 2.903 2.903 0 0 0 1.573 5.34h15.59a2.903 2.903 0 1 0 0-5.806z"
        fill="none"
        stroke="#231f20"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={0.706}
      />
      <path
        d="M8.71 8.33h.538a3.767 3.767 0 0 1 5.227-2.937 5.61 5.61 0 0 1 5.473-4.384c2.27 0 4.22 1.35 5.103 3.289.261-.067.533-.106.816-.106a3.283 3.283 0 0 1 3.283 3.284c0 .501-.115.975-.317 1.4a3.404 3.404 0 0 1-1.845 6.262H8.71a3.404 3.404 0 1 1 0-6.808"
        fill="#fff"
      />
      <g
        fill="none"
        stroke="#231f20"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={0.706}
      >
        <path d="M8.71 8.33h.538a3.767 3.767 0 0 1 5.227-2.937 5.61 5.61 0 0 1 5.473-4.384c2.27 0 4.22 1.35 5.103 3.289.261-.067.533-.106.816-.106a3.283 3.283 0 0 1 3.283 3.284c0 .501-.115.975-.317 1.4a3.404 3.404 0 0 1-1.845 6.262H8.71a3.404 3.404 0 1 1 0-6.808zM8.39 19.41l1.168-2.695M14.22 19.41l1.168-2.695M20.04 19.41l1.167-2.695M25.87 19.41l1.168-2.695M6.07 24.8l1.168-2.695M2.68 19.41l1.168-2.695M.35 24.8l1.168-2.695M11.89 24.8l1.168-2.695M17.71 24.8l1.168-2.695M23.54 24.8l1.168-2.695" />
      </g>
    </svg>
  );
};

const Memo = memo(ShowerRain);
export default Memo;
