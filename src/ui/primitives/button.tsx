import {
  Button as ChakraButton,
  ButtonProps as ChakraButtonProps,
  forwardRef,
} from '@chakra-ui/react';
import { borderWidths } from '@theme/foundations';
import { layerStyles } from '@theme/layerStyles';
import { type PropsWithChildren } from 'react';

type Variants = 'primary' | 'secondary' | 'ghost' | 'link';
type ButtonProps = PropsWithChildren<{
  variant?: Variants;
}> &
  Omit<ChakraButtonProps, 'variant' | 'colorScheme'>;

const buttonVariant: Record<Variants, ChakraButtonProps> = {
  primary: {
    ...layerStyles['box-solid'],
    variant: 'solid',
    fontWeight: 'semibold',
    borderRadius: 'xl',
    _hover: {
      ...layerStyles['box-solid-emphasized'],
      borderRadius: 'xl',
    },
  },
  secondary: {
    ...layerStyles['box-outline'],
    bg: '#00000000',
    borderRadius: 'xl',
    _hover: {
      ...layerStyles['box-outline-emphasized'],
      borderRadius: 'xl',
    },
  },
  ghost: { variant: 'ghost', colorScheme: 'gray' },
  link: {
    colorScheme: 'gray',
    textDecor: 'none',
    color: 'fg-muted',
    _hover: { color: 'fg-emphasized' },
  },
};

export const Button = forwardRef((props: ButtonProps, ref) => {
  const { variant = 'secondary', ...rest } = props;

  return (
    <ChakraButton
    padding='1.4em 1.20em'
    borderWidth={borderWidths.DEFAULT}
      boxShadow='lg'
      size='sm'
      textStyle='subheading'
      fontWeight='medium'
      {...buttonVariant[variant]}
      {...rest}
      ref={ref}
    />
  );
});

type IconButtonProps = ButtonProps & {
  'aria-label': string;
};

export const IconButton = forwardRef((props: IconButtonProps) => {
  return <Button padding='1.5em 1.1em' variant='ghost' {...props} />;
});
