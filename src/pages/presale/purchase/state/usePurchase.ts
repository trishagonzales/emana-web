import * as React from 'react';
import * as Wagmi from 'wagmi';
import { parseEther } from 'viem';
import Toast from '@providers/Toast';
import { PaymentTokenToABI, PaymentTokenToAddress } from './useApprove';
import { PaymentToken } from '../PaymentSelection';

// export function usePurchaseBusd() {
//   const account = useAccount();

//   const toast = useToast();

//   const prepare = usePrepareContractWrite({
//     chainId: 31337,
//     account: account.address,
//     address: envConfig.emanaICOAddr,
//     abi: ABI.ico,
//     functionName: 'purchaseUsingBusd',
//     args: [parseEther('10'), zeroAddress],
//   });

//   console.log({ account, prepare });

//   const send = useContractWrite({
//     ...prepare.config,
//     onError: () =>
//       toast({
//         status: 'error',
//         title: 'Failed to purchase',
//       }),
//     onSuccess: () =>
//       toast({
//         status: 'success',
//         title:
//           'Successfully send purchase transaction, please wait for confirmation',
//       }),
//   });

//   const wait = useWaitForTransaction({ hash: send.data?.hash });

//   const event = useContractEvent({
//     address: envConfig.emanaICOAddr,
//     abi: ABI.ico,
//     eventName: 'Purchased',
//     listener: () =>
//       toast({
//         status: 'success',
//         title: 'Successfully purchased emana',
//       }),
//   });

//   return {
//     send,
//     wait,
//     event,
//   };
// }

const PaymentToFunctionName = {
  busd: 'purchaseUsingBusd',
  usdt: 'purchaseUsingUsdt',
  dai: 'purchaseUsingDai',
};

interface UsePurchaseConfig {
  paymentToken: PaymentToken;
  amount: number;
  referredBy: `0x${string}`;
}

export default function usePurchase(config: UsePurchaseConfig) {
  const { paymentToken, amount, referredBy } = config;

  const account = Wagmi.useAccount();
  const toast = React.useContext(Toast.Context);

  const prepare = Wagmi.usePrepareContractWrite({
    account: account.address,
    functionName: PaymentToFunctionName[paymentToken],
    address: PaymentTokenToAddress[paymentToken],
    abi: PaymentTokenToABI[paymentToken],
    args: [parseEther(String(amount)), referredBy],
  });

  const send = Wagmi.useContractWrite({
    ...prepare.config,
    onError: () =>
      toast({
        status: 'error',
        title: 'Failed to send approval',
      }),
    onSuccess: () =>
      toast({
        status: 'success',
        title:
          'Successfully send purchase transaction, please wait for confirmation',
      }),
  });

  const wait = Wagmi.useWaitForTransaction({ hash: send.data?.hash });

  Wagmi.useContractEvent({
    eventName: 'Approval',
    address: PaymentTokenToAddress[paymentToken],
    abi: PaymentTokenToABI[paymentToken],
    listener: () =>
      toast({
        status: 'success',
        title: 'Successfully purchased Emana',
      }),
  });

  return {
    ...send,
    exec: send.write,
    wait,
  };
}
