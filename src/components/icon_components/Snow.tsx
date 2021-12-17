import { SVGProps, memo } from "react";

interface SnowProps extends SVGProps<SVGSVGElement> {
  height?: string;
  width?: string;
}

const Snow = (props: SnowProps) => {
  const { height = "100px", width = "100px" } = props;
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 25.792 22.665"
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
        <path d="M12.058 14.48H3.753a3.404 3.404 0 1 1 0-6.808h.538a3.767 3.767 0 0 1 5.227-2.937A5.611 5.611 0 0 1 14.991.351c2.27 0 4.22 1.35 5.103 3.289.262-.066.534-.106.815-.106a3.283 3.283 0 0 1 3.284 3.284c0 .501-.116.974-.317 1.4a3.397 3.397 0 0 1 1.56 2.858 3.404 3.404 0 0 1-3.404 3.404h-1.89M16.228 12.57v3.819M14.528 13.55l3.307 1.91M14.528 15.51l3.307-1.91M9.078 15.83v3.82M7.379 16.81l3.307 1.91M7.379 18.77l3.307-1.91M14.998 19.29v3.023M13.648 20.06l2.618 1.511M13.648 21.61l2.618-1.511" />
      </g>
    </svg>
  );
};

const Memo = memo(Snow);
export default Memo;
