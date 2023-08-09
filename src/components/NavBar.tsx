import { HStack, Image } from "@chakra-ui/react";
import Logo from "../assets/logo.webp";
import ColorMode from "./ColorMode";
import SearchInput from "./SearchInput";

const NavBar = () => {
  return (
    <HStack padding="10px">
      <Image src={Logo} boxSize="60px" />
      <SearchInput />
      <ColorMode />
    </HStack>
  );
};

export default NavBar;
