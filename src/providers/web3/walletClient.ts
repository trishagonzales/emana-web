import { createWalletClient, custom } from 'viem';
import { localhost } from 'viem/chains';

export const walletClient = createWalletClient({
  chain: localhost,
  transport: custom(window.ethereum),
});
