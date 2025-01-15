import { forwardRef } from "react";

export const IntersectionBlock = forwardRef((props, ref) => {
  return <div ref={ref}></div>;
});
