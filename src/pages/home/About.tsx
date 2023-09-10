import * as Chakra from '@chakra-ui/react';
import * as Custom from '@ui/primitives';
import Section from '@ui/Section';
import aboutImg from '/image/about.png';
import { FaArrowRight } from 'react-icons/fa';

export default function About() {
  return (
    <AboutSection>
      <Chakra.Container>
        <Chakra.Stack
          direction={['column', 'column', 'column', 'row']}
          align='center'
        >
          <ColumnLeft>
            <TextBox align='start' spacing='lg'>
              <Section.Header align='start'>
                <Section.Caption>About</Section.Caption>
                <Section.Title>What is E-Mana?</Section.Title>
              </Section.Header>

              <Chakra.Text textStyle='body' w='min(460px, 100%)'>
                E-Mana is where technology meets compassion. A pioneering
                charity organization harnessing the power of smart contracts and
                cryptocurrency to revolutionize the way we give and make an
                enduring impact to the world. With our blockchain-backed
                approach, we're introducing a new level of transparency,
                accountability, and efficiency to charitable initiatives. Join
                us in this exciting journey to reshape the future of
                philanthropy, making every token count.
              </Chakra.Text>
              <Custom.Button rightIcon={<FaArrowRight />}>
                Learn More
              </Custom.Button>
            </TextBox>
          </ColumnLeft>

          <ColumnRight>
            <Chakra.Image src={aboutImg} w='400px' />
          </ColumnRight>
        </Chakra.Stack>
      </Chakra.Container>
    </AboutSection>
  );
}

const AboutSection = Chakra.chakra(Section, {
  baseStyle: {
    id: 'about',
    bgGradient: 'radial-gradient(circle at 73%, #172554 0%, #030712 21%)',
  },
});

const ColumnLeft = Chakra.chakra(Chakra.Center, {
  baseStyle: {
    flex: '1',
    // ml: '5%',
  },
});

const TextBox = Chakra.chakra(Chakra.VStack, {
  baseStyle: {
    w: 'min(480px, 100%)',
  },
});

const ColumnRight = Chakra.chakra(Chakra.Center, {
  baseStyle: {
    flex: '1',
  },
});
