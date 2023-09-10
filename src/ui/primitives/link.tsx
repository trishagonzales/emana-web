import * as Chakra from '@chakra-ui/react';
import { letterSpacings } from '@theme/typography';
import { PropsWithChildren } from 'react';
import { Link as RouterLink } from 'react-router-dom';

type LinkVariant = 'unstyled' | 'navbar';

const styles: Record<LinkVariant, Chakra.StyleProps> = {
  unstyled: {},
  navbar: {
    textStyle: 'body',
    letterSpacing: letterSpacings['2xl'],
  },
};

export type LinkProps = PropsWithChildren<{
  to: string;
  variant?: LinkVariant;
}> &
  Omit<Chakra.LinkProps, 'variant'>;
// Omit<Chakra.StyleProps, 'variant'>;

export function Link(props: LinkProps) {
  const { variant = 'unstyled', children, ...rest } = props;

  return (
    <StyledLink {...styles[variant]} {...rest}>
      {children}
    </StyledLink>
  );
}

const StyledLink = Chakra.chakra(RouterLink);
