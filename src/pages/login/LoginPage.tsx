import { Container, VStack } from "@chakra-ui/react";
import { Button } from "@shared/ui/button";

export default function LoginPage() {
  return (
    <main>
      <Container>
        <VStack w="min(200px, 100%)">
          <Button w="full" variant="primary">
            Login using Metamask{" "}
          </Button>
          <Button w="full" variant="primary">
            Login using Trust Wallet{" "}
          </Button>
        </VStack>
      </Container>
    </main>
  );
}
