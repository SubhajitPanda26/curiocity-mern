import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Header from "./components/Header";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <ScrollToTop />
      <Header />

      {/* <main className="py-4"> */}
      <Outlet />
      {/* </main> */}
      <Footer />
      <ToastContainer />
    </>
  );
};

export default App;
