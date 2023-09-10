import { useConnect } from 'wagmi';
import { Image, StyleProps, VStack, chakra } from '@chakra-ui/react';
import { getWalletConnector } from '@providers/web3/WagmiProvider';
import { Heading } from '@ui/primitives/typography';
import metamaskLogo from '/logo/metamask-logo.png';

interface WalletButtonProps {
  styles?: StyleProps;
  connectProps: ReturnType<typeof useConnect>;
}

export function MetamaskButton(props: WalletButtonProps) {
  const { styles, connectProps } = props;
  const { connect, connectors } = connectProps;

  return (
    <ButtonBox
      onClick={() =>
        connect({ connector: getWalletConnector('METAMASK', connectors) })
      }
      {...styles}
    >
      <Image w='min(100px, 100%)' src={metamaskLogo} />
      <Heading textStyle='subheading'>Metamask</Heading>
    </ButtonBox>
  );
}

const ButtonBox = chakra(VStack, {
  baseStyle: {
    justifyContent: 'center',
    w: 'min(260px, 100%)',
    minH: '180px',
    p: 'sm',
    layerStyle: 'box-muted',
    cursor: 'pointer',
    _hover: {
      layerStyle: 'box-outline',
      bg: 'bg-default',
    },
  },
});
