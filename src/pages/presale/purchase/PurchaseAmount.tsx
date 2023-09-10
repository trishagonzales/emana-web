import * as Chakra from '@chakra-ui/react';
import * as Custom from '@ui/primitives';

export function usePurchaseAmount() {
  const amount = Chakra.useNumberInput({
    step: 5,
    defaultValue: 10,
    min: 10,
    precision: 2,
  });

  const decrementBtn = amount.getDecrementButtonProps();
  const incrementBtn = amount.getIncrementButtonProps();
  const numberInput = amount.getInputProps();

  return {
    ...amount,
    uiProps: {
      decrementBtn,
      incrementBtn,
      numberInput,
    },
  };
}

type UIProps = ReturnType<typeof usePurchaseAmount>['uiProps'];

interface PurchaseAmountProps {
  uiProps: UIProps;
}

export function PurchaseAmount(props: PurchaseAmountProps) {
  return (
    <Chakra.FormControl>
      <Chakra.FormLabel>Enter Amount</Chakra.FormLabel>

      <Chakra.HStack
        sx={{
          '& button': {
            borderRadius: 'DEFAULT',
            variant: 'ghost',
          },
        }}
      >
        <DecrementButton {...props.uiProps.decrementBtn} />
        <NumberInput {...props.uiProps.numberInput} />
        <IncrementButton {...props.uiProps.incrementBtn} />
      </Chakra.HStack>
    </Chakra.FormControl>
  );
}

function DecrementButton(props: UIProps['decrementBtn']) {
  return <Custom.Button {...props}>-</Custom.Button>;
}

function IncrementButton(props: UIProps['incrementBtn']) {
  return <Custom.Button {...props}>-</Custom.Button>;
}

type NumberInputProps = UIProps['numberInput'];

function NumberInput(props: NumberInputProps) {
  return (
    <Chakra.InputGroup>
      <Chakra.InputLeftElement
        h='full'
        pointerEvents='none'
        color='gray.300'
        fontSize='1.2em'
        children='$'
      />
      <Chakra.Input borderRadius='DEFAULT' py='22.5px' {...props} />
    </Chakra.InputGroup>
  );
}
