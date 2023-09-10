import envConfig from '@utils/envConfig';
import * as Wagmi from 'wagmi';
import { PaymentToken } from '../PaymentSelection';
import { PaymentTokenToABI, PaymentTokenToAddress } from './useApprove';
import { ABI } from '@providers/web3/contracts';

interface UseReadAppoveConfig {
  token: PaymentToken;
  isEnabled: boolean;
}

export default function useReadApprove(config: UseReadAppoveConfig) {
  const { token, isEnabled } = config;

  const account = Wagmi.useAccount();

  const { data } = Wagmi.useContractRead<
    (typeof ABI)[keyof typeof ABI],
    'allowance',
    bigint
  >({
    address: PaymentTokenToAddress[token],
    abi: PaymentTokenToABI[token],
    functionName: 'allowance',
    args: [account.address, envConfig.emanaICOAddr],
    enabled: isEnabled,
  });

  return { value: data ?? 0 };
}
