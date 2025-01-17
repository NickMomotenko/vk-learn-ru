import React, { forwardRef } from "react";

type IntersectionBlockProps = React.HTMLProps<HTMLDivElement>;

export const IntersectionBlock = forwardRef<
  HTMLDivElement,
  IntersectionBlockProps
>((props, ref) => {
  return <div ref={ref} {...props}></div>;
});
