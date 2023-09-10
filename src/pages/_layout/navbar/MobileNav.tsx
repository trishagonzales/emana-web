import * as React from 'react';
import * as Chakra from '@chakra-ui/react';
import * as Custom from '@ui/primitives';
import { MdMenu } from 'react-icons/md';

export default function MobileNav() {
  const disclose = Chakra.useDisclosure();
  const btnRef = React.useRef<HTMLButtonElement>(null);

  return (
    <>
      <Chakra.Hide above='xl'>
        <MenuButton
          ref={btnRef}
          aria-label='open navigation sidebar'
          onClick={disclose.onOpen}
        >
          <MdMenu />
        </MenuButton>
        <Chakra.Drawer
          isOpen={disclose.isOpen}
          placement='right'
          onClose={disclose.onClose}
          finalFocusRef={btnRef}
        >
          <Chakra.DrawerOverlay />
          <Chakra.DrawerContent bg='bg-default'>
            <Chakra.DrawerCloseButton />

            <Chakra.DrawerBody>
              <NavMenu as='nav' spacing='xl' align='start'>
                <MobileNavItem onClick={disclose.onClose} to='#about'>
                  About
                </MobileNavItem>
                <MobileNavItem onClick={disclose.onClose} to='#why-choose-us'>
                  Why Choose Us
                </MobileNavItem>
                <MobileNavItem onClick={disclose.onClose} to='#tokenomics'>
                  Tokenomics
                </MobileNavItem>
                <MobileNavItem onClick={disclose.onClose} to='#team'>
                  Team
                </MobileNavItem>
                <MobileNavItem onClick={disclose.onClose} to='#faqs'>
                  FAQs
                </MobileNavItem>
                <MobileNavItem onClick={disclose.onClose} to='#whitepaper'>
                  Whitepaper
                </MobileNavItem>
                <MobileNavItem to='' mt='auto'>
                  Logout
                </MobileNavItem>
              </NavMenu>
            </Chakra.DrawerBody>
          </Chakra.DrawerContent>
        </Chakra.Drawer>
      </Chakra.Hide>
    </>
  );
}

const MenuButton = Chakra.chakra(Chakra.IconButton, {
  baseStyle: {
    variant: 'ghost',
    fontSize: 'xl',
    padding: '0.6em 0.90em',
  },
});

const NavMenu = Chakra.chakra(Chakra.VStack, {
  baseStyle: {
    h: 'full',
    px: 'lg',
    py: '2xl',
  },
});

function MobileNavItem(props: Custom.LinkProps) {
  return (
    <Custom.Link p='sm' to={props.to} variant='navbar'>
      {props.children}
    </Custom.Link>
  );
}
