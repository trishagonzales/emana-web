import {
  Container,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  HStack,
  Hide,
  Image,
  Show,
  VStack,
  chakra,
  useDisclosure,
} from "@chakra-ui/react";
import { Button, IconButton } from "@shared/ui/button";
import { Link } from "@shared/ui/typography";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { MdAccountCircle, MdMenu } from "react-icons/md";
import brandLogo from "/emana-logo-text.png";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <chakra.header bg="bg-canvas" boxShadow="md">
      <Container maxW="page-width">
        <HStack py="sm" justify="space-between">
          <Link to="/">
            <Image src={brandLogo} w="50px" />
          </Link>

          <nav>
            <HStack spacing="2xl">
              <Show above="md">
                <HStack spacing="md">
                  <NavItem to="/about-us">About Us</NavItem>
                  <NavItem to="/whitepaper">Whitepaper</NavItem>
                  <NavItem to="/contact">Contact</NavItem>
                </HStack>
              </Show>

              <HStack spacing="md">
                <Button
                  variant="primary"
                  onClick={() => navigate("/account")}
                  rightIcon={<MdAccountCircle />}
                >
                  Account
                </Button>
                <Hide above="md">
                  <MobileNav />
                </Hide>
              </HStack>
            </HStack>
          </nav>
        </HStack>
      </Container>
    </chakra.header>
  );
}

const NavItem = chakra(Link, {
  baseStyle: {
    textStyle: "subheading",
  },
});

function MobileNav() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef<HTMLButtonElement>(null);

  return (
    <>
      <IconButton
        ref={btnRef}
        aria-label="open navigation sidebar"
        onClick={onOpen}
        variant="secondary"
        fontSize="xl"
        px="0.6em"
        py="0.90em"
      >
        <MdMenu />
      </IconButton>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent bg="bg-default">
          <DrawerCloseButton />

          <DrawerBody>
            <VStack
              h="full"
              as="nav"
              spacing="xl"
              align="start"
              px="lg"
              py="2xl"
            >
              <NavItem onClick={onClose} to="/about-us">
                About Us
              </NavItem>
              <NavItem onClick={onClose} to="/whitepaper">
                Whitepaper
              </NavItem>
              <NavItem onClick={onClose} to="/contact">
                Contact
              </NavItem>
              <NavItem to="" mt="auto">
                Logout
              </NavItem>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
