import { PropsWithChildren } from 'react';
import { Heading } from './typography';
import { StyleProps, Text, VStack } from '@chakra-ui/react';

type Props = PropsWithChildren & StyleProps;

export function SectionHeader(props: Props) {
  const { children, ...rest } = props;

  return (
    <VStack my='3xl' {...rest}>
      {children}
    </VStack>
  );
}

export function SectionTitle(props: Props) {
  const { children, ...rest } = props;

  return (
    <Heading textStyle='title-lg' as='h2' {...rest}>
      {children}
    </Heading>
  );
}

export function SectionSubtitle(props: Props) {
  const { children, ...rest } = props;

  return (
    <Text textStyle='body-lg' color='fg-muted' {...rest}>
      {children}
    </Text>
  );
}
