import { Text, VStack } from '@chakra-ui/react';
import { Heading } from '@ui/primitives/typography';
import envConfig from '@utils/envConfig';
import { useBalance } from 'wagmi';

export default function Balance() {
  const emanaBalance = useBalance({
    address: envConfig.emanaAddr,
    formatUnits: 'ether',
    watch: true,
  });

  return (
    <VStack minH='100px' w='full'>
      <Heading textStyle='heading'>Emana Balance</Heading>

      <Text textStyle='title-md'>
        {emanaBalance.data ? emanaBalance.data?.formatted : '0.00'}
      </Text>
    </VStack>
  );
}
