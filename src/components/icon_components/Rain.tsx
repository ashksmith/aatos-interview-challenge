import { SVGProps, memo } from "react";

interface RainProps extends SVGProps<SVGSVGElement> {
  height?: string;
  width?: string;
}

const Rain = (props: RainProps) => {
  const { height = "100px", width = "100px" } = props;
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 28.928 27.769"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M16.336 11.46a6.253 6.253 0 1 1-12.506 0 6.253 6.253 0 0 1 12.506 0"
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
        <path d="M16.336 11.46a6.253 6.253 0 1 1-12.506 0 6.253 6.253 0 0 1 12.506 0zM10.086.35v3.94M.463 5.9l3.412 1.97M.463 17.02l3.412-1.97M19.706 5.9l-3.412 1.97M5.22 3.03l1.725 2.988M.353 11.46h3.45M19.816 11.46h-3.45M14.956 3.03l-1.725 2.988" />
      </g>
      <path
        d="M6.893 16.35h.537a3.767 3.767 0 0 1 5.228-2.937 5.607 5.607 0 0 1 10.576-1.095c.261-.067.533-.106.816-.106a3.284 3.284 0 0 1 3.283 3.284c0 .501-.115.975-.316 1.4a3.404 3.404 0 0 1-1.845 6.262H6.892a3.404 3.404 0 1 1 0-6.808"
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
        <path d="M6.893 16.35h.537a3.767 3.767 0 0 1 5.228-2.937 5.607 5.607 0 0 1 10.576-1.095c.261-.067.533-.106.816-.106a3.284 3.284 0 0 1 3.283 3.284c0 .501-.115.975-.316 1.4a3.404 3.404 0 0 1-1.845 6.262H6.892a3.404 3.404 0 1 1 0-6.808zM6.489 27.41l1.168-2.695M12.316 27.41l1.168-2.695M18.136 27.41l1.168-2.695M23.956 27.41l1.168-2.695" />
      </g>
    </svg>
  );
};

const Memo = memo(Rain);
export default Memo;
