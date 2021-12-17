import { SVGProps, memo } from "react";

interface ClearSkyProps extends SVGProps<SVGSVGElement> {
  height?: string;
  width?: string;
}

const ClearSky = (props: ClearSkyProps) => {
  const { height = "100px", width = "100px" } = props;
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 25.884 29.45"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M21.03 14.72a8.088 8.088 0 1 1-16.177 0 8.088 8.088 0 0 1 16.177 0"
        fill="#fff"
      />
      <g
        fill="none"
        stroke="#231f20"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={2}
      >
        <path
          d="M21.03 14.72a8.088 8.088 0 1 1-16.177 0 8.088 8.088 0 0 1 16.177 0zM12.943.348v5.095M.496 7.534l4.413 2.548M.496 21.906l4.413-2.548M12.943 29.092v-5.095M25.39 21.906l-4.413-2.548M25.39 7.534l-4.413 2.548M6.648 3.816 8.88 7.68M.354 14.72h4.463M6.648 25.621l2.232-3.865M19.238 25.621l-2.232-3.865M25.531 14.72h-4.463M19.238 3.816 17.006 7.68"
          strokeWidth={0.70556}
        />
      </g>
    </svg>
  );
};

const Memo = memo(ClearSky);
export default Memo;
