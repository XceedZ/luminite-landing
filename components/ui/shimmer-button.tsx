import React, { ComponentPropsWithoutRef, CSSProperties } from "react"

import { cn } from "@/lib/utils"

export interface ShimmerButtonProps extends ComponentPropsWithoutRef<"button"> {
  shimmerColor?: string
  shimmerSize?: string
  borderRadius?: string
  shimmerDuration?: string
  background?: string
  className?: string
  children?: React.ReactNode
}

export const ShimmerButton = React.forwardRef<
  HTMLButtonElement,
  ShimmerButtonProps
>(
  (
    {
      shimmerColor = "#ffffff",
      shimmerSize = "0.05em",
      shimmerDuration = "3s",
      borderRadius = "100px",
      background,
      className,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <button
         style={
          {
            "--spread": "90deg",
            "--shimmer-color": shimmerColor,
            "--radius": borderRadius,
            "--speed": shimmerDuration,
            "--cut": shimmerSize,
            "--bg": background || "rgba(0, 0, 0, 0.3)",
          } as CSSProperties
        }
        className={cn(
          "group relative z-0 flex cursor-pointer items-center justify-center overflow-hidden [border-radius:var(--radius)] px-6 py-3 whitespace-nowrap text-foreground bg-background/50 backdrop-blur-md",
          "transform-gpu transition-transform duration-300 ease-in-out active:translate-y-px",
          "hover:bg-background/60",
          className
        )}
        ref={ref}
        {...props}
      >
        {/* Border shimmer wrapper - positioned outside to create border effect */}
        <div
          className={cn(
            "absolute -inset-[2px] -z-10 [border-radius:var(--radius)]",
            "bg-[conic-gradient(from_calc(270deg-(var(--spread)*0.5)),transparent_0,var(--shimmer-color)_var(--spread),transparent_var(--spread))]",
            "animate-spin-around",
            "[mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)]",
            "[mask-composite:xor]",
            "[padding:2px]"
          )}
        />

        {/* Inner background to cover the shimmer except border */}
        <div
          className={cn(
            "absolute inset-0 [border-radius:var(--radius)] bg-background/50 backdrop-blur-md -z-10"
          )}
        />

        {/* Content */}
        <span className="relative z-10">{children}</span>

        {/* Highlight */}
        <div
          className={cn(
            "absolute inset-0 size-full",
            "[border-radius:var(--radius)] shadow-[inset_0_-8px_10px_rgba(255,255,255,0.05)]",
            "transform-gpu transition-all duration-300 ease-in-out",
            "group-hover:shadow-[inset_0_-6px_10px_rgba(255,255,255,0.1)]",
            "group-active:shadow-[inset_0_-10px_10px_rgba(255,255,255,0.15)]"
          )}
        />
      </button>
    )
  }
)

ShimmerButton.displayName = "ShimmerButton"
