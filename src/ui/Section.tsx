import type { PropsWithChildren } from 'react';
import * as Custom from '@ui/primitives/index';
import {
  ChakraStyledOptions,
  StackProps,
  StyleProps,
  Text,
  VStack,
  chakra,
} from '@chakra-ui/react';

type Props = PropsWithChildren & StyleProps;

function Root(props: Props & ChakraStyledOptions) {
  const { children, ...rest } = props;

  return (
    <chakra.section minH='590px' py={['xl', '2xl', '3xl']} {...rest}>
      {children}
    </chakra.section>
  );
}

function Header(props: Props & StackProps) {
  const { children, ...rest } = props;

  return <VStack {...rest}>{children}</VStack>;
}

function Caption(props: Props) {
  const { children, ...rest } = props;

  return (
    <Text textStyle='caption-heading' {...rest}>
      {children}
    </Text>
  );
}

function Title(props: Props) {
  const { children, ...rest } = props;

  return (
    <Custom.Heading textStyle='title-sm' as='h2' {...rest}>
      {children}
    </Custom.Heading>
  );
}

function Subtitle(props: Props) {
  const { children, ...rest } = props;

  return (
    <Text textStyle='body-lg' color='fg-muted' {...rest}>
      {children}
    </Text>
  );
}

export default Object.assign(Root, {
  Header,
  Caption,
  Title,
  Subtitle,
});
