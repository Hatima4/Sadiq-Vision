import Navbar from "./components/Navbar.tsx";
import Welcome_Page from "./components/welcome.tsx";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <>
      <Navbar />
      <Welcome_Page />
    </>
  );
}

export default App;
