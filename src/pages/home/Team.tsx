import type { PropsWithChildren } from 'react';
import * as Chakra from '@chakra-ui/react';
import * as Custom from '@ui/primitives';
import * as Fa from 'react-icons/fa';
import emilio from '/profile/emilio.jpg';
import Section from '@ui/Section';

export default function Team() {
  return (
    <Section id='team' bg='bg-default'>
      <Chakra.Container>
        <Chakra.VStack spacing='2xl'>
          <Section.Header>
            <Section.Caption>Our Team</Section.Caption>
            <Section.Title>Meet the minds behind E-Mana</Section.Title>
          </Section.Header>

          <Chakra.SimpleGrid
            columns={3}
            w='min(900px, 100%)'
            mx='auto'
            justifyItems='center'
            rowGap='xl'
          >
            <TeamItem
              imgSrc={emilio}
              name='Emilio Roso'
              role='CEO/Co-founder'
            />
            <TeamItem imgSrc='' name='John Doe' role='' />
            <TeamItem imgSrc='' name='John Doe' role='' />
            <TeamItem imgSrc='' name='John Doe' role='' />
            <TeamItem imgSrc='' name='John Doe' role='' />
            <TeamItem imgSrc='' name='John Doe' role='' />
          </Chakra.SimpleGrid>
        </Chakra.VStack>
      </Chakra.Container>
    </Section>
  );
}

interface TeamItemProps {
  imgSrc: string;
  name: string;
  role: string;
}

function TeamItem(props: TeamItemProps) {
  const { imgSrc, name, role } = props;

  return (
    <TeamItemBox>
      <Chakra.Box>
        <ProfileImage src={imgSrc} />
      </Chakra.Box>

      <Chakra.VStack spacing='xs' p='xs' mt='auto'>
        <Custom.Heading>{name}</Custom.Heading>
        <Chakra.Text textStyle='body-sm' color='fg-subtle'>
          {role}
        </Chakra.Text>

        <Chakra.Divider />
        <SocialMediaList />
      </Chakra.VStack>
    </TeamItemBox>
  );
}

const TeamItemBox = Chakra.chakra(Chakra.VStack, {
  baseStyle: {
    w: 'min(220px, 100%)',
    boxShadow: 'md',
    spacing: '0',
    layerStyle: 'box-emphasized',
  },
});

const ProfileImage = Chakra.chakra(Chakra.Image, {
  baseStyle: {
    w: 'full',
    objectFit: 'cover',
  },
});

function SocialMediaList() {
  return (
    <Chakra.HStack>
      <SocialMediaIcon aria-label=''>
        <Fa.FaLinkedin />
      </SocialMediaIcon>
      <SocialMediaIcon aria-label=''>
        <Fa.FaFacebookSquare />
      </SocialMediaIcon>
      <SocialMediaIcon aria-label=''>
        <Fa.FaTwitter />
      </SocialMediaIcon>
      <SocialMediaIcon aria-label=''>
        <Fa.FaInstagram />
      </SocialMediaIcon>
    </Chakra.HStack>
  );
}

function SocialMediaIcon(props: PropsWithChildren) {
  return (
    <Custom.Button
      variant='ghost'
      p='xs'
      border='none'
      color='fg-subtle'
      _hover={{
        color: 'primary-muted',
      }}
    >
      {props.children}
    </Custom.Button>
  );
}
