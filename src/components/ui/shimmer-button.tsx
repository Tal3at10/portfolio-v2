import React, { CSSProperties } from "react";
import { cn } from "@/lib/utils";

export interface ShimmerButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  shimmerColor?: string;
  shimmerSize?: string;
  borderRadius?: string;
  shimmerDuration?: string;
  background?: string;
  className?: string;
  children?: React.ReactNode;
}

const ShimmerButton = React.forwardRef<HTMLButtonElement, ShimmerButtonProps>(
  (
    {
      shimmerColor = "#ffffff",
      borderRadius = "100px",
      background = "rgba(0, 0, 0, 0.85)",
      className,
      children,
      style,
      ...props
    },
    ref,
  ) => {
    return (
      <button
        ref={ref}
        style={
          {
            background,
            borderRadius,
            touchAction: "manipulation",
            ...style,
          } as CSSProperties
        }
        className={cn(
          "group relative z-0 flex cursor-pointer items-center justify-center overflow-hidden whitespace-nowrap border border-white/15 px-6 py-3 text-white backdrop-blur-md",
          "transition-all duration-300 ease-in-out hover:border-white/30 hover:scale-[1.02] active:translate-y-px",
          className,
        )}
        {...props}
      >
        {/* Shimmer linear beam */}
        <div
          className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none"
          style={{
            background: `linear-gradient(90deg, transparent 0%, ${shimmerColor}20 50%, transparent 100%)`,
          }}
        />
        {children}
      </button>
    );
  },
);

ShimmerButton.displayName = "ShimmerButton";

export { ShimmerButton };
