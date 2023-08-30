import { HStack, Text, VStack, chakra } from '@chakra-ui/react';
import { SectionHeader, SectionTitle } from '@shared/ui/section';

export default function AccountBalance() {
  return (
    <chakra.main>
      <SectionHeader>
        <SectionTitle>Current Balance</SectionTitle>
      </SectionHeader>

      <SectionHeader>
        <SectionTitle>Purchase E-Mana</SectionTitle>
      </SectionHeader>
    </chakra.main>
  );
}

function CurrentBalance() {
  return (
    <HStack justify='space-between' bg='bg-subtle' p='md'>
      <Text textStyle='title-sm'>$</Text>
      <Text textStyle='title-sm'>0.00</Text>
    </HStack>
  );
}

// function Purchase() {
//   return (

//   )
// }
