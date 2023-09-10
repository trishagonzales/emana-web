import Toast from '@providers/Toast';
import { ABI } from '@providers/web3/contracts';
import envConfig from '@utils/envConfig';
import { useContext } from 'react';
import { parseEther } from 'viem';

import {
  useAccount,
  useContractEvent,
  useContractWrite,
  usePrepareContractWrite,
  useWaitForTransaction,
} from 'wagmi';
import { PaymentToken } from '../PaymentSelection';

// export function useApproveBusd() {
//   const account = useAccount();

//   const toast = useToast();

//   const prepare = usePrepareContractWrite({
//     chainId: 31337,
//     account: account.address,
//     address: envConfig.busdAddr,
//     abi: ABI.busd,
//     functionName: 'approve',
//     args: [envConfig.emanaICOAddr, parseEther('10')],
//   });

//   console.log({ account, prepare });

//   const send = useContractWrite({
//     ...prepare.config,
//     onError: () =>
//       toast({
//         status: 'error',
//         title: 'Failed to send approval',
//       }),
//     onSuccess: () =>
//       toast({
//         status: 'success',
//         title: 'Successfully send approval, please wait for confirmation',
//       }),
//   });

//   const wait = useWaitForTransaction({ hash: send.data?.hash });

//   const event = useContractEvent({
//     address: envConfig.busdAddr,
//     abi: ABI.busd,
//     eventName: 'Approval',
//     listener: () =>
//       toast({
//         status: 'success',
//         title: 'Successfully approved',
//       }),
//   });

//   return {
//     send,
//     wait,
//     event,
//   };
// }

export const PaymentTokenToAddress = {
  busd: envConfig.busdAddr,
  usdt: envConfig.usdtAddr,
  dai: envConfig.daiAddr,
};

export const PaymentTokenToABI = {
  busd: ABI.busd,
  usdt: ABI.usdt,
  dai: ABI.dai,
};

interface UseApproveConfig {
  token: PaymentToken;
  amount: number;
}

export default function useApprove(config: UseApproveConfig) {
  const { token, amount } = config;
  const account = useAccount();
  const toast = useContext(Toast.Context);

  const prepare = usePrepareContractWrite({
    account: account.address,
    functionName: 'approve',
    address: PaymentTokenToAddress[token],
    abi: PaymentTokenToABI[token],
    args: [envConfig.emanaICOAddr, parseEther(String(amount))],
  });

  const send = useContractWrite({
    ...prepare.config,
    onError: () =>
      toast({
        status: 'error',
        title: 'Failed to send approval',
      }),
    onSuccess: () =>
      toast({
        status: 'success',
        title: 'Successfully send approval, please wait for confirmation',
      }),
  });

  const wait = useWaitForTransaction({ hash: send.data?.hash });

  useContractEvent({
    eventName: 'Approval',
    address: PaymentTokenToAddress[token],
    abi: PaymentTokenToABI[token],
    listener: () =>
      toast({
        status: 'success',
        title:
          'Successfully approved payment. You can now start purchasing emana',
      }),
  });

  return {
    ...send,
    exec: send.write,
    wait,
  };
}
