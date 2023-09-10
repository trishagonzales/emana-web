import { Link } from 'react-router-dom';
import * as Chakra from '@chakra-ui/react';
import * as Custom from '@ui/primitives';
import Section from '@ui/Section';
import heroBg from '/background/hero.png';
import busdIcon from '/icon/busd-icon.svg';
import usdtIcon from '/icon/tether-icon.svg';
import daiIcon from '/icon/dai-icon.svg';
import { Timer } from './Timer';

export default function Hero() {
  const time = new Date();
  // time.setSeconds(time.getSeconds() + 600); // 10 minutes timer
  time.setHours(time.getHours() + 60000); // 10 minutes timer

  return (
    <>
      <HeroSection id='home'>
        <Chakra.Stack
          direction={['column', 'column', 'column', 'row']}
          position='relative'
        >
          <BackgroundImage />

          <ColumnLeft>
            <TitleBox align='start' spacing='lg'>
              <Section.Caption fontSize='md'>
                A new era of giving
              </Section.Caption>
              <Custom.Heading textStyle='title-md'>
                E-Mana Coin, Empowering Charity through Blockchain
              </Custom.Heading>
              <Custom.Heading textStyle='body-lg' w='min(480px, 100%)'>
                A secure and transparent smart contract-based platform for
                helping those in need
              </Custom.Heading>
            </TitleBox>
          </ColumnLeft>

          <ColumnRight>
            <CountdownBox justify='space-between'>
              <Custom.Heading textStyle='title-xs'>
                Token sale ends in:
              </Custom.Heading>

              <Chakra.Divider />
              <Chakra.Box mx='lg'>
                <Timer expiryTimestamp={time} />
              </Chakra.Box>

              <Chakra.Divider />
              <CountdownButtons />

              <Chakra.Divider />
              <AcceptedPayments />
            </CountdownBox>
          </ColumnRight>
        </Chakra.Stack>
      </HeroSection>
    </>
  );
}

const HeroSection = Chakra.chakra('section');

function BackgroundImage() {
  return (
    <Chakra.Image
      src={heroBg}
      maxH='550px'
      // flex='1.2'
      position='absolute'
      opacity='.16'
      objectFit='cover'
      sx={{
        'mask-image': 'linear-gradient(to right, black 50%, transparent 100%)',
      }}
    />
  );
}

const ColumnLeft = Chakra.chakra(Chakra.Center, {
  baseStyle: {
    h: 'min(550px, 350px + 10vw)',
    flex: ['auto', 'auto', 'auto', '1'],
  },
});

const TitleBox = Chakra.chakra(Chakra.VStack, {
  baseStyle: {
    w: 'min(500px, 100%)',
    mt: '-5%',
  },
});

const ColumnRight = Chakra.chakra(Chakra.Center, {
  baseStyle: {
    h: 'min(550px, 480px + 5vw)',
    flex: ['auto', 'auto', 'auto', '1'],
  },
});

const CountdownBox = Chakra.chakra(Chakra.VStack, {
  baseStyle: {
    w: 'min(460px, 100%)',
    minH: '440px',
    ml: ['0', '0', '0', '-8%'],
    p: 'lg',
    spacing: 'lg',
    borderRadius: 'DEFAULT',
    bg: 'whiteAlpha.50',
    layerStyle: 'box-emphasized',
  },
});

function CountdownButtons() {
  return (
    <Chakra.HStack spacing='md' justify='center'>
      <Link to='/presale'>
        <Custom.Button w='min(170px, 100%)' variant='primary'>
          Buy Token
        </Custom.Button>
      </Link>
      <Custom.Button w='min(170px, 100%)'>Get Whitepaper</Custom.Button>
    </Chakra.HStack>
  );
}

function AcceptedPayments() {
  return (
    <Chakra.HStack spacing='sm'>
      <Chakra.Text textStyle='body-sm'>Accepts : </Chakra.Text>
      <Chakra.Image w='28px' src={busdIcon} />
      <Chakra.Image w='26px' src={usdtIcon} />
      <Chakra.Image w='26px' src={daiIcon} />
    </Chakra.HStack>
  );
}
