import { HStack, chakra } from '@chakra-ui/react';
import { Button } from '@ui/primitives/button';
import { Heading } from '@ui/primitives/typography';
import { FaFileDownload } from 'react-icons/fa';

export default function DownloadWhitepaper() {
  return (
    <chakra.section id='whitepaper' bg='bg-subtle'>
      <HStack
        mx='auto'
        maxW='page-width'
        px='md'
        py='xl'
        justify='space-between'
      >
        <Heading textStyle='title-xs'>Get Whitepaper</Heading>

        <Button
          size='md'
          rightIcon={<FaFileDownload />}
          aria-label='download whitepaper'
        >
          Download
        </Button>
      </HStack>
    </chakra.section>
  );
}
