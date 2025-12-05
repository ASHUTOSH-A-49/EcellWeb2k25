import React from "react";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all duration-300",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm",
        hero: "bg-primary text-primary-foreground font-semibold shadow-md hover:shadow-lg hover:bg-primary/90 hover:-translate-y-0.5",
        outline: "border border-border bg-transparent hover:bg-muted",
        glass: "bg-white/10 backdrop-blur-sm border border-white/20",
      },
      size: {
        default: "h-10 px-5",
        lg: "h-12 px-8 text-base",
        sm: "h-9 px-4",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

// No Slot → simple component
const Button = React.forwardRef(function Button(
  { className, variant, size, ...props },
  ref
) {
  return (
    <button
      ref={ref}
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  );
});

export { Button, buttonVariants };
