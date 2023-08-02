import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { Outlet } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import FormContextProvider from "./context/FormContext";
import ScrollToTop from "./utils/scrollToTop";
import { ChakraProvider } from "@chakra-ui/react";

const queryClient = new QueryClient();

function App() {
  return (
      <ChakraProvider>
      <QueryClientProvider client={queryClient}>
        <Navbar />
        <FormContextProvider>
          <ScrollToTop />
          <Outlet />
        </FormContextProvider>
        <Footer />
      </QueryClientProvider>
      </ChakraProvider>
  );
}
export default App;
