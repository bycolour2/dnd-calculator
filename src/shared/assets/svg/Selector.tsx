import { SVGProps } from './svgTypes';

export const Selector = (props: SVGProps) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill={props.fill}
    className={props.class}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7.5 13.3333L4.16666 10L7.5 6.66668M12.5 6.66668L15.8333 10L12.5 13.3333"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
