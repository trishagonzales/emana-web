import { ABI } from '@providers/web3/contracts';
import envConfig from '@utils/envConfig';
import { zeroAddress } from 'viem';
import { useAccount, useContractRead } from 'wagmi';

export default function useReferral() {
  const account = useAccount();

  const { data } = useContractRead<
    typeof ABI.ico,
    'getReferral',
    `0x${string}`
  >({
    address: envConfig.emanaICOAddr,
    functionName: 'getReferral',
    abi: ABI.ico,
    args: [account.address],
  });

  return {
    referredBy: data ?? zeroAddress,
    hasReferral: data !== zeroAddress,
  };
}
