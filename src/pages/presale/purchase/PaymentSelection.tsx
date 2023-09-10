import * as React from 'react';
import * as Chakra from '@chakra-ui/react';

export type PaymentToken = 'busd' | 'usdt' | 'dai';

export function usePaymentSelection() {
  const [selectedToken, setToken] = React.useState<PaymentToken>('busd');

  return {
    selectedToken,
    onSelectToken: (token: PaymentToken) => setToken(token),
  };
}

type PaymentSelectionProps = ReturnType<typeof usePaymentSelection>;

export function PaymentSelection(props: PaymentSelectionProps) {
  return (
    <Chakra.HStack w='full' align='start'>
      <Chakra.FormLabel flex='1'>Pay using</Chakra.FormLabel>
      <Chakra.Select
        flex='2'
        borderRadius='DEFAULT'
        value={props.selectedToken}
        onChange={(e) => props.onSelectToken(e.target.value as PaymentToken)}
      >
        <option value='busd'>BUSD</option>
        <option value='usdt'>Tether (USDT)</option>
      </Chakra.Select>
    </Chakra.HStack>
  );
}
