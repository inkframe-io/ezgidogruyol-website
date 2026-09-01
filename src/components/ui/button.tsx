import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-full font-medium whitespace-nowrap transition-colors disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        // Primary CTA — solid accent-blue pill
        primary:
          "bg-accent-blue text-white hover:bg-[color-mix(in_srgb,var(--color-accent-blue)_88%,black)]",
        // Secondary — hairline outline
        secondary:
          "border border-hairline text-fg hover:border-fg bg-canvas",
        // Ghost — quiet text button
        ghost: "text-muted hover:text-fg",
      },
      size: {
        default: "h-11 px-5 text-sm",
        sm: "h-9 px-4 text-sm",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

type ButtonBaseProps = VariantProps<typeof buttonVariants> & {
  className?: string;
};

type ButtonAsButton = ButtonBaseProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type ButtonAsAnchor = ButtonBaseProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

type ButtonProps = ButtonAsButton | ButtonAsAnchor;

function Button({ className, variant, size, ...props }: ButtonProps) {
  const classes = cn(buttonVariants({ variant, size }), className);

  if (typeof props.href === "string") {
    return <a className={classes} {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)} />;
  }

  return (
    <button
      className={classes}
      {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}
    />
  );
}

export { Button, buttonVariants };
