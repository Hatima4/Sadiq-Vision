import Sidebar from "./components/sidebar.tsx";
import Welcome_Page from "./components/welcome.tsx";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider>
      <>
        <Sidebar />
        <Welcome_Page />
      </>
    </ChakraProvider>
  );
}

export default App;
