import { StyleProps, VStack, chakra } from '@chakra-ui/react';
import { Link } from '@shared/ui/typography';

export default function AccountSidebar(props: StyleProps) {
  return (
    <chakra.aside {...props}>
      <VStack spacing='md' align='start'>
        <NavItem to='/balance'>Balance</NavItem>
        <NavItem to='/claim'>Balance</NavItem>
        <NavItem to='/referral'>Affiliates</NavItem>
        <NavItem to='/settings'>Settings</NavItem>
      </VStack>
    </chakra.aside>
  );
}

const NavItem = chakra(Link, {
  baseStyle: {},
});
