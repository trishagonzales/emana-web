import {
  HStack,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  VStack,
  useDisclosure,
} from '@chakra-ui/react';
import { Button } from '@ui/primitives/button';
import { MetamaskButton, WalletConnectButton } from './WalletButtons';
import { useConnect } from 'wagmi';

export default function WalletModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const connectProps = useConnect();

  return (
    <>
      <Button variant='primary' onClick={onOpen}>
        Connect Wallet
      </Button>

      <Modal onClose={onClose} isOpen={isOpen} isCentered size='lg'>
        <ModalOverlay />
        <ModalContent borderRadius='DEFAULT' bg='bg-subtle'>
          <ModalCloseButton />
          <ModalBody>
            <HStack spacing='md' h='min(400px, 90dvh)' justify='center'>
              <MetamaskButton connectProps={connectProps} />
              {/* <WalletConnectButton connectProps={connectProps} /> */}
            </HStack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
