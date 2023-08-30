import { type PropsWithChildren } from "react";
import { ChakraProvider,  LightMode } from "@chakra-ui/react";
import { theme } from "@shared/theme";

export default function Providers(props: PropsWithChildren) {
  return (
    <>
      <ChakraProvider theme={theme}>
        <LightMode>{props.children}</LightMode>
      </ChakraProvider>
    </>
  );
}
