import Navbar from "./components/Navbar.tsx";
import Welcome_Page from "./components/welcome.tsx";
import { ChakraProvider } from "@chakra-ui/react";
import Aboutpage from "./components/About.tsx";
import Team from "./components/team.tsx"


function App() {
  return (
    <ChakraProvider>
      <>
        <Navbar />
        <Welcome_Page /> 
        <Aboutpage></Aboutpage>
        <Team></Team>
       
      </>
    </ChakraProvider>
  );
}

export default App;
