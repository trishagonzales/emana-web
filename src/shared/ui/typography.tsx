import { PropsWithChildren } from "react";
import {
  Link as ReactRouterLink,
  LinkProps as ReactRouterLinkProps,
} from "react-router-dom";
import { ChakraProps, Text, TextProps, chakra } from "@chakra-ui/react";
import { semanticColors } from "@shared/theme/colors";

export type HeadingProps = PropsWithChildren & TextProps;

export function Heading(props: HeadingProps) {
  return <Text {...props}>{props.children}</Text>;
}

type LinkVariants = "ghost" | "link";
type LinkProps = PropsWithChildren<{
  variant?: LinkVariants;
}> &
  ReactRouterLinkProps;

const linkVariants: Record<LinkVariants, ChakraProps> = {
  ghost: {
    _hover: {
      bg: semanticColors["bg-subtle"],
    },
  },
  link: {
    color: semanticColors["fg-muted"],
    _hover: {
      color: semanticColors["fg-default"],
    },
  },
};

export function Link(props: LinkProps) {
  const { variant = "link", ...rest } = props;

  return (
    <chakra.a
      as={ReactRouterLink}
      textStyle="body"
      {...linkVariants[variant]}
      {...rest}
    />
  );
}
