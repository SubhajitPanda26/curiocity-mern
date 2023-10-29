import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  return (
    <>
      <ScrollToTop />
      <Header />
      <main className="py-4">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default App;
