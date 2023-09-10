type NodeEnv = 'development' | 'test' | 'production';
type Config = typeof localhost | typeof testnet | typeof mainnet;

const localhost = {
  rpcUrl: import.meta.env.VITE_LOCALHOST_RPC_URL as string,
  emanaAddr: import.meta.env.VITE_LOCALHOST_EMANA_ADDRESS as `0x${string}`,
  emanaICOAddr: import.meta.env
    .VITE_LOCALHOST_EMANA_ICO_ADDRESS as `0x${string}`,
  busdAddr: import.meta.env.VITE_LOCALHOST_BUSD_MOCK_ADDRESS as `0x${string}`,
  usdtAddr: import.meta.env.VITE_LOCALHOST_USDT_MOCK_ADDRESS as `0x${string}`,
  daiAddr: import.meta.env.VITE_LOCALHOST_DAI_MOCK_ADDRESS as `0x${string}`,
} as const;

const testnet = {
  rpcUrl: import.meta.env.TESTNET_RPC_URL as string,
  emanaAddr: import.meta.env.TESTNET_EMANA_ADDRESS as `0x${string}`,
  emanaICOAddr: import.meta.env.TESTNET_EMANA_ICO_ADDRESS as `0x${string}`,
  busdAddr: import.meta.env.TESTNET_BUSD_MOCK_ADDRESS as `0x${string}`,
  usdtAddr: import.meta.env.TESTNET_USDT_MOCK_ADDRESS as `0x${string}`,
  daiAddr: import.meta.env.TESTNET_DAI_MOCK_ADDRESS as `0x${string}`,
} as const;

const mainnet = {
  rpcUrl: import.meta.env.MAINNET_RPC_URL as string,
  emanaAddr: import.meta.env.MAINNET_EMANA_ADDRESS as `0x${string}`,
  emanaICOAddr: import.meta.env.MAINNET_EMANA_ICO_ADDRESS as `0x${string}`,
  busdAddr: import.meta.env.TESTNET_BUSD_MOCK_ADDRESS as `0x${string}`,
  usdtAddr: import.meta.env.TESTNET_USDT_MOCK_ADDRESS as `0x${string}`,
  daiAddr: import.meta.env.TESTNET_DAI_MOCK_ADDRESS as `0x${string}`,
} as const;

const nodeEnv: NodeEnv = import.meta.env.VITE_NODE_ENV as NodeEnv;

if (nodeEnv === 'development') {
  throwIfVariablesIncomplete(localhost);
} else if (nodeEnv === 'test') {
  throwIfVariablesIncomplete(testnet);
} else if (nodeEnv === 'production') {
  throwIfVariablesIncomplete(mainnet);
}

function throwIfVariablesIncomplete(config: Config) {
  Object.keys(config).forEach((key) => {
    if (!config[key as keyof typeof config]) throw `${key} is undefined`;
  });
}

const NodeEnvToConfig: Record<NodeEnv, Config> = {
  development: localhost,
  test: testnet,
  production: mainnet,
};

export default {
  nodeEnv,
  ...NodeEnvToConfig[nodeEnv],
};
