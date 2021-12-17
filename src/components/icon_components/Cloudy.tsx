import { SVGProps, memo } from "react";

interface CloudyProps extends SVGProps<SVGSVGElement> {
  height?: string;
  width?: string;
}

const Cloudy = (props: CloudyProps) => {
  const { height = "100px", width = "100px" } = props;
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 27.908 15.49"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M18.846 6.59h-.459a3.213 3.213 0 0 0-4.458-2.505A4.784 4.784 0 0 0 9.26.346a4.783 4.783 0 0 0-4.353 2.805 2.787 2.787 0 0 0-.695-.09 2.801 2.801 0 0 0-2.8 2.8c0 .428.098.832.27 1.195a2.903 2.903 0 0 0 1.573 5.34h15.59a2.903 2.903 0 1 0 0-5.806"
        fill="#fff"
      />
      <path
        d="M18.846 6.59h-.459a3.213 3.213 0 0 0-4.458-2.505A4.784 4.784 0 0 0 9.26.346a4.783 4.783 0 0 0-4.353 2.805 2.787 2.787 0 0 0-.695-.09 2.801 2.801 0 0 0-2.8 2.8c0 .428.098.832.27 1.195a2.903 2.903 0 0 0 1.573 5.34h15.59a2.903 2.903 0 1 0 0-5.806z"
        fill="none"
        stroke="#231f20"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={0.706}
      />
      <path
        d="M5.873 8.32h.537a3.768 3.768 0 0 1 5.228-2.937A5.61 5.61 0 0 1 17.111 1c2.27 0 4.22 1.35 5.103 3.289a3.27 3.27 0 0 1 .816-.106 3.284 3.284 0 0 1 3.283 3.284c0 .501-.116.974-.317 1.4a3.404 3.404 0 0 1-1.845 6.262H5.874a3.404 3.404 0 0 1 0-6.808"
        fill="#fff"
      />
      <path
        d="M5.873 8.32h.537a3.768 3.768 0 0 1 5.228-2.937A5.61 5.61 0 0 1 17.111 1c2.27 0 4.22 1.35 5.103 3.289a3.27 3.27 0 0 1 .816-.106 3.284 3.284 0 0 1 3.283 3.284c0 .501-.116.974-.317 1.4a3.404 3.404 0 0 1-1.845 6.262H5.874a3.404 3.404 0 0 1 0-6.808z"
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

const Memo = memo(Cloudy);
export default Memo;
