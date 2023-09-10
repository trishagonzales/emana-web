import * as React from 'react';
import { useToast } from '@chakra-ui/react';

const Context = React.createContext<ReturnType<typeof useToast>>(
  {} as ReturnType<typeof useToast>
);

function Provider(props: React.PropsWithChildren) {
  const toast = useToast({
    position: 'top',
    isClosable: true,
  });

  return <Context.Provider value={toast}>{props.children}</Context.Provider>;
}

export default { Context, Provider };
