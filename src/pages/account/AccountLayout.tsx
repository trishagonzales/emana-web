import { Box, Container, Flex } from '@chakra-ui/react';
import AccountSidebar from './AccountSideBar';
import { Outlet } from 'react-router-dom';

export default function AccountLayout() {
  return (
    <>
      <Container>
        <Flex>
          <AccountSidebar w='clamp(100px, 10vw, 200px)' />
          <Box ml={['md', '2xl']}>
            <Outlet />
          </Box>
        </Flex>
      </Container>
    </>
  );
}
