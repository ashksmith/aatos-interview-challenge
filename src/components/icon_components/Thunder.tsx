import { SVGProps, memo } from "react";

interface ThunderProps extends SVGProps<SVGSVGElement> {
  height?: string;
  width?: string;
}

const Thunder = (props: ThunderProps) => {
  const { height = "100px", width = "100px" } = props;
  return (
    <svg
      width={height}
      height={width}
      viewBox="0 0 25.942 21.155"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g
        fill="none"
        stroke="#231f20"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={0.706}
      >
        <path d="M6.71 14.479H3.904a3.404 3.404 0 1 1 0-6.808h.537a3.767 3.767 0 0 1 5.228-2.937A5.61 5.61 0 0 1 15.141.35c2.27 0 4.22 1.35 5.104 3.289.261-.067.533-.106.815-.106a3.284 3.284 0 0 1 3.284 3.284c0 .501-.116.975-.317 1.4a3.404 3.404 0 0 1-1.845 6.262H18.52" />
        <path d="m15.88 7.926-2.242 5.172h3.678l-2.03 4.416M10.24 11.066l-1.245 2.873h2.043l-1.82 3.958M.35 20.799l1.168-2.695M6.18 20.799l1.168-2.695M12 20.799l1.168-2.695M17.82 20.799l1.168-2.695M23.65 20.799l1.168-2.695" />
      </g>
    </svg>
  );
};

const Memo = memo(Thunder);
export default Memo;
