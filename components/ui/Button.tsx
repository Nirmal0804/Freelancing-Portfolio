import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  external?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  className,
  variant = "primary",
  size = "md",
  href,
  external,
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center font-sans font-medium uppercase tracking-wider transition-all duration-200 active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none";

  const variants = {
    primary:
      "bg-primary text-on-primary border border-primary hover:bg-transparent hover:text-primary",
    secondary:
      "bg-surface-container-high text-on-surface border border-[#E5E2E1] hover:border-primary hover:text-primary",
    outline:
      "bg-transparent text-primary border border-primary hover:bg-primary hover:text-on-primary",
    ghost:
      "bg-transparent text-on-surface hover:text-primary",
  };

  const sizes = {
    sm: "px-4 py-2 text-[11px]",
    md: "px-5 py-2.5 text-xs",
    lg: "px-7 py-3.5 text-xs",
  };

  const classes = cn(baseStyles, variants[variant], sizes[size], className);

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={classes}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};
