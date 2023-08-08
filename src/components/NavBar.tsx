import { HStack, Image } from "@chakra-ui/react";
import Logo from "../assets/logo.webp";
import ColorMode from "./ColorMode";

const NavBar = () => {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Image src={Logo} boxSize="60px" />
      <ColorMode />
    </HStack>
  );
};

export default NavBar;
