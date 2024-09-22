import Navbar from "./components/Navbar.tsx";
import Welcome_Page from "./components/welcome.tsx";
import { ChakraProvider } from "@chakra-ui/react";
import Aboutpage from "./components/About.tsx";
import Team from "./components/team.tsx"
import Contactus from "./components/Contactus.tsx";


function App() {
  return (
    <ChakraProvider>
      <>
        <Navbar />
        <Welcome_Page /> 
        <Aboutpage></Aboutpage>
        <Team></Team>
        <Contactus></Contactus>
       
      </>
    </ChakraProvider>
  );
}

export default App;
