import * as Chakra from '@chakra-ui/react';
import Section from '@ui/Section';
import Balance from './Balance';
import Purchase from './purchase/Purchase';

export default function PresalePage() {
  return (
    <Section py='xl' bg='bg-default'>
      <Chakra.Container maxW='page-width'>
        <Chakra.VStack>
          <Balance />

          <Chakra.Tabs w='full'>
            <Chakra.TabList>
              <Chakra.Tab>Purchase</Chakra.Tab>
              <Chakra.Tab>Claim</Chakra.Tab>
              <Chakra.Tab>Settings</Chakra.Tab>
            </Chakra.TabList>

            <Chakra.TabPanels minH='65dvh' bg='bg-subtle'>
              <Chakra.TabPanel>
                <Purchase />
              </Chakra.TabPanel>
              <Chakra.TabPanel>
                <p>two!</p>
              </Chakra.TabPanel>
              <Chakra.TabPanel>
                <p>three!</p>
              </Chakra.TabPanel>
            </Chakra.TabPanels>
          </Chakra.Tabs>
        </Chakra.VStack>
      </Chakra.Container>
    </Section>
  );
}
