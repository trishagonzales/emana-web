import * as Chakra from '@chakra-ui/react';
import Section from '@ui/Section';
import * as Custom from '@ui/primitives';

export default function PresaleInfo() {
  return (
    <Section id='presale' pos='relative'>
      <Chakra.Container zIndex='100'>
        <Chakra.VStack spacing='xl'>
          <Section.Header>
            <Section.Caption>Details</Section.Caption>
            <Section.Title>Presale Information</Section.Title>
          </Section.Header>

          <Chakra.Grid
            templateColumns='repeat(3, 1fr)'
            gap='md'
            w='min(1100px, 100%)'
          >
            <PresaleItem title='Start' body='September 15, 2023' />
            <PresaleItem title='End' body='October 15, 2023' />
            <PresaleItem title='Available tokens for sale' body='200,000,000' />
            <PresaleItem
              title='Price'
              body='1 BUSD = 50 EMN, 1 BNB = 9,000 EMN'
            />
            <PresaleItem title='Minimum Purchase' body='$ 10' />
            <PresaleItem title='Accepted currencies' body='BUSD, BNB' />
          </Chakra.Grid>

          <Custom.Button variant='primary' w='min(150px, 100%)'>
            Buy Now
          </Custom.Button>
        </Chakra.VStack>
      </Chakra.Container>
    </Section>
  );
}

interface PresaleProps {
  title: string;
  body: string;
}

function PresaleItem(props: PresaleProps) {
  return (
    <Chakra.GridItem>
      <Chakra.VStack w='100%' mx='auto' p='md' layerStyle='box-muted'>
        <Chakra.Text textStyle='subheading'>{props.title}</Chakra.Text>
        <Chakra.Text textStyle='body-sm' color='fg-subtle'>
          {props.body}
        </Chakra.Text>
      </Chakra.VStack>
    </Chakra.GridItem>
  );
}
