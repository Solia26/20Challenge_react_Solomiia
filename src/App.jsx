import "./App.css";
import Header from "./components/Header";
import AboutMe from "./pages/AboutMe";
import Footer from "./components/Footer";
import Portfolio from "./pages/Portfolio";
import { Outlet } from "react-router-dom";

function App() {

  return (
    <>
      <Header/>
        <Outlet/>
      <Footer />
    </>
  );
}

export default App;
