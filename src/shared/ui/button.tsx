import {
  Button as ChakraButton,
  ButtonProps as ChakraButtonProps,
} from "@chakra-ui/react";
import { borderWidths } from "@shared/theme/foundations";
import { layerStyles } from "@shared/theme/layer-styles";
import { forwardRef, type PropsWithChildren } from "react";

// type Variants = "primary" | "secondary" | "outline" | "ghost" | "link";
type Variants = "primary" | "secondary" | "tertiary" | "link";
type ButtonProps = PropsWithChildren<{
  variant?: Variants;
}> &
  Omit<ChakraButtonProps, "variant" | "colorScheme">;

const buttonVariant: Record<Variants, ChakraButtonProps> = {
  primary: {
    variant: "solid",
    boxShadow: "button",
    ...layerStyles["box-solid"],
    _hover: {
      ...layerStyles["box-solid-emphasized"],
    },
  },
  secondary: {
    variant: "outline",
    colorScheme: "gray",
    borderColor: "gray.200",
  },
  tertiary: { variant: "ghost", colorScheme: "gray" },
  link: { variant: "link", colorScheme: "gray" },
};

export const Button = forwardRef((props: ButtonProps, ref) => {
  const { variant = "secondary", ...rest } = props;

  return (
    <ChakraButton
      ref={ref}
      padding="1.5em 1.25em"
      borderWidth={borderWidths.DEFAULT}
      borderRadius="DEFAULT"
      size="sm"
      {...buttonVariant[variant]}
      {...rest}
    />
  );
});

type IconButtonProps = ButtonProps & {
  "aria-label": string;
};

export const IconButton = forwardRef((props: IconButtonProps) => {
  return <Button padding="1.5em 1.1em" {...props} />;
});
