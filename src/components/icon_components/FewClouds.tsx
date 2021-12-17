import { SVGProps, memo } from "react";

interface FewCloudsProps extends SVGProps<SVGSVGElement> {
  height?: string;
  width?: string;
}

const FewClouds = (props: FewCloudsProps) => {
  const { height = "100px", width = "100px" } = props;
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 28.928 23.517"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M16.339 11.464a6.253 6.253 0 1 1-12.506 0 6.253 6.253 0 0 1 12.506 0"
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
        <path d="M16.339 11.464a6.253 6.253 0 1 1-12.506 0 6.253 6.253 0 0 1 12.506 0zM10.086.352v3.94M.463 5.908l3.412 1.97M.463 17.02l3.412-1.97M19.709 5.908l-3.412 1.97M5.219 3.035l1.725 2.988M.353 11.464h3.45M19.819 11.464h-3.45M14.953 3.035l-1.725 2.988" />
      </g>
      <path
        d="M6.892 16.356h.538a3.767 3.767 0 0 1 5.227-2.937 5.61 5.61 0 0 1 5.473-4.384c2.27 0 4.22 1.35 5.103 3.288a3.284 3.284 0 0 1 4.099 3.178c0 .502-.115.975-.316 1.4a3.404 3.404 0 0 1-1.845 6.262H6.89a3.404 3.404 0 0 1 0-6.807"
        fill="#fff"
      />
      <path
        d="M6.892 16.356h.538a3.767 3.767 0 0 1 5.227-2.937 5.61 5.61 0 0 1 5.473-4.384c2.27 0 4.22 1.35 5.103 3.288a3.284 3.284 0 0 1 4.099 3.178c0 .502-.115.975-.316 1.4a3.404 3.404 0 0 1-1.845 6.262H6.89a3.404 3.404 0 0 1 0-6.807z"
        fill="none"
        stroke="#231f20"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={0.706}
      />
    </svg>
  );
};

const Memo = memo(FewClouds);
export default Memo;
