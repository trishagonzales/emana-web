import * as Chakra from '@chakra-ui/react';
import chart from '/image/tokenomics.png';
import chartLegend from '/image/tokenomics-legend.png';
import Section from '@ui/Section';

export default function Tokenomics() {
  return (
    <Section id='tokenomics' bg='gray.900'>
      <Chakra.Container>
        <Chakra.VStack spacing='xl'>
          <Section.Header>
            <Section.Caption>Tokenomics</Section.Caption>
            <Section.Title>Token Allocation</Section.Title>
          </Section.Header>

          <Chakra.Stack
            align='center'
            direction={['column', 'column', 'row']}
            gap={['2xl', '2xl', 'sm']}
            justify='center'
            layerStyle='box-muted'
            py='xl'
          >
            <Chakra.Image src={chartLegend} w='min(320px, 80%)' />
            <Chakra.Image
              src={chart}
              w='min(460px, 80%)'
              style={{
                filter: 'brightness(80%)',
              }}
            />
          </Chakra.Stack>
        </Chakra.VStack>
      </Chakra.Container>
    </Section>
  );
}
