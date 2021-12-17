import { SVGProps, memo } from "react";

interface MistyProps extends SVGProps<SVGSVGElement> {
  height?: string;
  width?: string;
}

const Misty = (props: MistyProps) => {
  const { height = "100px", width = "100px" } = props;
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 32.989 23.517"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M16.34 11.46a6.253 6.253 0 1 1-12.506 0 6.253 6.253 0 0 1 12.506 0"
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
        <path d="M16.34 11.46a6.253 6.253 0 1 1-12.506 0 6.253 6.253 0 0 1 12.506 0zM10.09.35v3.94M.47 5.91l3.412 1.97M.47 17.02l3.412-1.97M19.71 5.91l-3.412 1.97M5.22 3.03l1.725 2.988M.36 11.46h3.45M19.82 11.46h-3.45M14.96 3.03l-1.725 2.988" />
      </g>
      <path
        d="M25.18 23.16H6.901a3.404 3.404 0 1 1 0-6.808h.537a3.767 3.767 0 0 1 5.228-2.937A5.61 5.61 0 0 1 18.14 9.03c2.27 0 4.22 1.35 5.103 3.289.261-.067.533-.106.815-.106a3.284 3.284 0 0 1 3.284 3.284"
        fill="#fff"
        stroke="#231f20"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={0.706}
      />
      <g
        fill="none"
        stroke="#231f20"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={0.706}
      >
        <path d="M20.04 16.94h11.556M24.2 19.31h8.445M21.08 19.31h1.203M30.08 21.4h1.342M19.86 21.4h8.776" />
      </g>
    </svg>
  );
};

const Memo = memo(Misty);
export default Memo;
