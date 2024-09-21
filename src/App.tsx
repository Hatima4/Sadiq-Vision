import Navbar from "./components/Navbar.tsx";
import Welcome_Page from "./components/welcome.tsx";
import { ChakraProvider } from "@chakra-ui/react";
import Aboutpage from "./components/About.tsx";

function App() {
  return (
    <ChakraProvider>
      <>
        <Navbar />
        <Welcome_Page />
        <Aboutpage></Aboutpage>
      </>
    </ChakraProvider>
  );
}

export default App;
