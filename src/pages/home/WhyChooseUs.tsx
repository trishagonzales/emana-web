import * as Chakra from '@chakra-ui/react';
import * as Custom from '@ui/primitives';
import Section from '@ui/Section';

import { BsShieldFillCheck, BsGlobeAmericas } from 'react-icons/bs';
import { GiMagnifyingGlass } from 'react-icons/gi';
import { FaPaperPlane } from 'react-icons/fa';

export default function WhyChooseUs() {
  return (
    <Section id='why-choose-us' bg='bg-canvas'>
      <Chakra.Container>
        <Chakra.VStack spacing='2xl'>
          <Section.Header>
            <Section.Caption>Features</Section.Caption>
            <Section.Title>Why Choose Us</Section.Title>
          </Section.Header>

          <Chakra.Grid
            w='min(1200px, 96%)'
            columnGap='xs'
            rowGap='lg'
            templateColumns={[
              '1fr',
              'repeat(2, 1fr)',
              'repeat(2, 1fr)',
              'repeat(4, 1fr)',
            ]}
            sx={{
              '@media (max-width: 590px)': {
                templateColumns: '1fr',
              },
            }}
          >
            <FeatureItem
              icon={<FeatureIcon as={BsShieldFillCheck} />}
              title='Secure'
              body={`Leverage blockchain's security features to ensure that transactions are tamper-proof and safeguarded against potential fraud.`}
            />
            <FeatureItem
              icon={<FeatureIcon as={GiMagnifyingGlass} />}
              title='Transparent'
              body={`All transactions are stored on the blockchain, creating an unchangeable and auditable record of every contribution, bolstering accountability.`}
            />
            <FeatureItem
              icon={<FeatureIcon as={BsGlobeAmericas} />}
              title='Global Reach'
              body={`Enable donors from around the world to contribute seamlessly using various cryptocurrencies, making charitable giving accessible to all.`}
            />
            <FeatureItem
              icon={<FeatureIcon as={FaPaperPlane} />}
              title='Efficient'
              body={`By reducing intermediaries and administrative costs, your donations have a greater direct impact on the causes you care about.`}
            />
          </Chakra.Grid>
        </Chakra.VStack>
      </Chakra.Container>
    </Section>
  );
}

interface FeatureItemProps {
  icon: React.ReactNode;
  title: string;
  body: string;
}

function FeatureItem(props: FeatureItemProps) {
  const { icon, title, body } = props;

  return (
    <Chakra.GridItem>
      <Chakra.VStack
        mx='auto'
        w='max(240px, 94%)'
        h='250px'
        p='lg'
        layerStyle='box-muted'
      >
        {icon}
        <Custom.Heading textStyle='heading'>{title}</Custom.Heading>
        <Chakra.Text
          w='200px'
          flex='auto'
          color='fg-subtle'
          textStyle='body-sm'
          lineHeight='md'
          textAlign='center'
        >
          {body}
        </Chakra.Text>
      </Chakra.VStack>
    </Chakra.GridItem>
  );
}

const FeatureIcon = Chakra.chakra(Chakra.Icon, {
  baseStyle: {
    fontSize: 'lg',
    color: 'primary.500',
  },
});
