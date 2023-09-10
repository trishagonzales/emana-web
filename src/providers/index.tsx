import { type PropsWithChildren } from 'react';
import { ChakraProvider, DarkMode } from '@chakra-ui/react';
import { theme } from '@theme/index';
import { WagmiProvider } from './web3/WagmiProvider';
import Toast from './Toast';

export default function Providers(props: PropsWithChildren) {
  return (
    <>
      <ChakraProvider theme={theme}>
        <DarkMode>
          <WagmiProvider>
            <Toast.Provider>{props.children}</Toast.Provider>
          </WagmiProvider>
        </DarkMode>
      </ChakraProvider>
    </>
  );
}
