import { Container, HStack, Text, VStack, chakra } from '@chakra-ui/react';

export default function Footer() {
  return (
    <chakra.footer>
      <Container>
        <VStack>
          <Text textStyle='body-sm'></Text>
        </VStack>
      </Container>
    </chakra.footer>
  );
}
