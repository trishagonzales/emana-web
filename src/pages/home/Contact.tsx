// import {
//   Container,
//   FormControl,
//   FormLabel,
//   HStack,
//   Input,
//   Textarea,
//   VStack,
//   chakra,
// } from '@chakra-ui/react';
// import { Button } from '@ui/primitives/button';
// import {
//   Section,
//   Section.Caption,
//   Section.Header,
//   SectionSubtitle,
//   Section.Title,
// } from '@ui/section';
// import { PropsWithChildren } from 'react';

// export default function Contact() {
//   return (
//     <Section bg='gray.900'>
//       <Container>
//         <VStack spacing='2xl'>
//           <Section.Header>
//             <Section.Title>Contact Us</Section.Title>
//             <SectionSubtitle>
//               Still have questions? Leave a message
//             </SectionSubtitle>
//           </Section.Header>

//           <ContactForm>
//             <VStack spacing='md'>
//               <HStack spacing='md'>
//                 <FormControl>
//                   <FormLabel>Name</FormLabel>
//                   <Input placeholder='Name' />
//                 </FormControl>

//                 <FormControl>
//                   <FormLabel>Email</FormLabel>
//                   <Input type='email' placeholder='Email' />
//                 </FormControl>
//               </HStack>

//               <FormControl>
//                 <FormLabel>Message</FormLabel>
//                 <Textarea placeholder='Message' minH='150px' />
//               </FormControl>

//               <Button mt='sm' w='full'>
//                 Submit
//               </Button>
//             </VStack>
//           </ContactForm>
//         </VStack>
//       </Container>
//     </Section>
//   );
// }

// function ContactForm(props: PropsWithChildren) {
//   return (
//     <chakra.form
//       w='min(550px, 100%)'
//       sx={{
//         label: {
//           textStyle: 'body',
//         },
//         input: {
//           minH: '48px',
//         },
//         'input, textarea': {
//           borderRadius: 'sm',
//         },
//       }}
//     >
//       {props.children}
//     </chakra.form>
//   );
// }
