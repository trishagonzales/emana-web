import * as Chakra from '@chakra-ui/react';
import Section from '@ui/Section';

export default function FAQs() {
  return (
    <Section id='faqs'>
      <Chakra.Container>
        <Chakra.VStack spacing='4xl'>
          <Section.Header>
            <Section.Title>Frequently Asked Questions</Section.Title>
          </Section.Header>

          <Chakra.Accordion w='min(700px, 100%)' allowToggle>
            <Chakra.AccordionItem>
              <h2>
                <Chakra.AccordionButton>
                  <Chakra.Box as='span' flex='1' textAlign='left'>
                    Section 1 title
                  </Chakra.Box>
                  <Chakra.AccordionIcon />
                </Chakra.AccordionButton>
              </h2>
              <Chakra.AccordionPanel pb={4}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </Chakra.AccordionPanel>
            </Chakra.AccordionItem>

            <Chakra.AccordionItem>
              <h2>
                <Chakra.AccordionButton>
                  <Chakra.Box as='span' flex='1' textAlign='left'>
                    Section 2 title
                  </Chakra.Box>
                  <Chakra.AccordionIcon />
                </Chakra.AccordionButton>
              </h2>
              <Chakra.AccordionPanel pb={4}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </Chakra.AccordionPanel>
            </Chakra.AccordionItem>

            <Chakra.AccordionItem>
              <h2>
                <Chakra.AccordionButton>
                  <Chakra.Box as='span' flex='1' textAlign='left'>
                    Section 2 title
                  </Chakra.Box>
                  <Chakra.AccordionIcon />
                </Chakra.AccordionButton>
              </h2>
              <Chakra.AccordionPanel pb={4}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </Chakra.AccordionPanel>
            </Chakra.AccordionItem>

            <Chakra.AccordionItem>
              <h2>
                <Chakra.AccordionButton>
                  <Chakra.Box as='span' flex='1' textAlign='left'>
                    Section 2 title
                  </Chakra.Box>
                  <Chakra.AccordionIcon />
                </Chakra.AccordionButton>
              </h2>
              <Chakra.AccordionPanel pb={4}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </Chakra.AccordionPanel>
            </Chakra.AccordionItem>
          </Chakra.Accordion>
        </Chakra.VStack>
      </Chakra.Container>
    </Section>
  );
}
