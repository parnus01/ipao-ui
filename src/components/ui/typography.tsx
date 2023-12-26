// import * as React from "react";
// import { VariantProps, cva } from "class-variance-authority";
// import { cn } from "@/lib/utils"
// import {Slot} from "@radix-ui/react-slot";


// const typographyVariants = cva("...", {
//   variants: {
//     variant: {
//       heading1: "text-[40px] leading-[56px] font-bold",
//       heading2: "text-[32px] leading-[48px] font-bold",
//       heading3: "text-[24px] leading-[36px] font-bold",
//       heading4: "text-[20px] leading-[32px] font-bold",
//       body1: " text-[16px] leading-[24px]",
//       body2: " text-[14px] leading-[24px]",
//       caption: "text-[12px] leading-[20px]",
//       mutedText: "text-sm text-muted-foreground",
//     },
//     weight: {
//       bold: "font-bold",
//       regular: "font-normal",
//     }
//   },
// });

// type VariantPropType = VariantProps<typeof typographyVariants>;

// const variantElementMap: Record<
//   NonNullable<VariantPropType["variant"]>,
//   string
// > = {
//   heading1: "div",
//   heading2: "div",
//   heading3: "div",
//   heading4: "div",
//   body1: "div",
//   body2: "div",
//   caption: "div",
//   mutedText: "div",
// };

// export interface TypographyProps
//     extends React.HTMLAttributes<HTMLElement>,
//         VariantProps<typeof typographyVariants> {
//     asChild?: boolean
//     as?: string
// }


// const Typography = React.forwardRef<HTMLElement, TypographyProps>(
//     ({className, variant, weight, as, asChild, ...props}, ref) => {
//         const Comp = asChild ? Slot : as ?? (variant ? variantElementMap[variant] : undefined) ?? "div"
//         return (
//             <Comp
//                 className={cn(typographyVariants({variant, weight, className}))}
//                 ref={ref}
//                 {...props}
//             />
//         )
//     }
// )


// Typography.displayName = "Typography"

// export {Typography, typographyVariants}