import type { PropsWithChildren } from 'react';
import { configureChains, Connector, createConfig, WagmiConfig } from 'wagmi';
import { publicProvider } from 'wagmi/providers/public';
import { bsc, bscTestnet, localhost } from 'wagmi/chains';
import { MetaMaskConnector } from 'wagmi/connectors/metaMask';
import { jsonRpcProvider } from 'wagmi/providers/jsonRpc';
import envConfig from '@utils/envConfig';

const NodeEnvToChains = {
  development: localhost,
  test: bscTestnet,
  production: bsc,
};

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [NodeEnvToChains[envConfig.nodeEnv]],
  [
    jsonRpcProvider({
      rpc: () => ({
        http: envConfig.rpcUrl,
      }),
    }),
    publicProvider(),
  ]
);

const config = createConfig({
  autoConnect: true,
  connectors: [new MetaMaskConnector({ chains })],
  publicClient,
  webSocketPublicClient,
});

type WalletType = 'METAMASK';

export function getWalletConnector(
  wallet: WalletType,
  connectors: Connector[]
) {
  const wallets: Record<WalletType, Connector> = {
    METAMASK: connectors[0],
  };
  return wallets[wallet];
}

export function WagmiProvider(props: PropsWithChildren) {
  return <WagmiConfig config={config}>{props.children}</WagmiConfig>;
}
