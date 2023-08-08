import { Grid, GridItem, Show } from "@chakra-ui/react";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem pl="2" bg="orange.300" area={"nav"}>
        Nav
      </GridItem>
      <Show above="lg">
        <GridItem pl="2" bg="pink.300">
          Aside
        </GridItem>
        <GridItem pl="2" bg="green.300">
          Main
        </GridItem>
      </Show>
    </Grid>
  );
}

export default App;
