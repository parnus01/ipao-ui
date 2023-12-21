import * as React from "react";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "@/lib/utils"
import {Slot} from "@radix-ui/react-slot";


const typographyVariants = cva("font-bold", {
  variants: {
    variant: {
      bold: "font-bold",
      h1: "text-[40px] leading-[56px]",
      h2: "text-[32px] leading-[48px]",
      h3: "text-[24px] leading-[36px]",
      h4: "text-[20px] leading-[32px]",
      h5: "text-[18px] leading-[28.62px]",
      p: "mb-0",
      small: "text-[14px]",
      body: "text-[14px] leading-[24px]",
      mutedText: "text-sm text-muted-foreground",
    },
  },
});

type VariantPropType = VariantProps<typeof typographyVariants>;

const variantElementMap: Record<
  NonNullable<VariantPropType["variant"]>,
  string
> = {
  bold: "div",
  h1: "div",
  h2: "div",
  h3: "div",
  h4: "div",
  h5: "div",
  p: "div",
  body:"div",
  small: "div",
  mutedText: "div",
};

export interface TypographyProps
    extends React.HTMLAttributes<HTMLElement>,
        VariantProps<typeof typographyVariants> {
    asChild?: boolean
    as?: string
}


const Typography = React.forwardRef<HTMLElement, TypographyProps>(
    ({className, variant, as, asChild, ...props}, ref) => {
        const Comp = asChild ? Slot : as ?? (variant ? variantElementMap[variant] : undefined) ?? "div"
        return (
            <Comp
                className={cn(typographyVariants({variant, className}))}
                ref={ref}
                {...props}
            />
        )
    }
)


Typography.displayName = "Typography"

export {Typography, typographyVariants}