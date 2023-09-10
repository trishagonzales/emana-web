import * as Chakra from '@chakra-ui/react';
import * as Custom from '@ui/primitives';
import emanaLogo from '/logo/emana-logo.png';
import MobileNav from './MobileNav';
import WalletModal from '@providers/web3/WalletModal';

export default function Navbar() {
  return (
    <Header>
      <Chakra.Container maxW='max-width'>
        <Chakra.HStack py='sm' justify='space-between'>
          <BrandLogo />

          <Chakra.Show above='xl'>
            <Chakra.HStack spacing='lg'>
              <NavItem to='#about'>About</NavItem>
              <NavItem to='#why-choose-us'>Why Choose Us</NavItem>
              <NavItem to='#tokenomics'>Tokenomics</NavItem>
              <NavItem to='#roadmap'>Roadmap</NavItem>
              <NavItem to='#presale'>Presale</NavItem>
              <NavItem to='#team'>Team</NavItem>
              <NavItem to='#whitepaper'>Whitepaper</NavItem>
            </Chakra.HStack>
          </Chakra.Show>

          <Chakra.HStack spacing='md'>
            <WalletModal />
            <MobileNav />
          </Chakra.HStack>
        </Chakra.HStack>
      </Chakra.Container>
    </Header>
  );
}

const Header = Chakra.chakra('header', {
  baseStyle: {
    bg: 'bg-canvas',
    boxShadow: 'md',
    borderBottom: '1px',
    borderBottomColor: 'gray.800',
  },
});

function BrandLogo() {
  return (
    <Custom.Link to='/'>
      <Chakra.HStack>
        <Chakra.Image src={emanaLogo} w='40px' />
        <Chakra.Hide below='sm'>
          <Custom.Heading textStyle='title-sm' layerStyle='text-accent'>
            E-Mana
          </Custom.Heading>
        </Chakra.Hide>
      </Chakra.HStack>
    </Custom.Link>
  );
}

export function NavItem(props: Custom.LinkProps) {
  return (
    <Custom.Link to={props.to} variant='navbar'>
      {props.children}
    </Custom.Link>
  );
}
