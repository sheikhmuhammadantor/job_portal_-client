import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

function MainLayout() {
  return (
    <>
      <section className="w-full max-w-[1536px] px-5 mx-auto">
        <Navbar />
      </section>
      <section>
        <Outlet />
      </section>
      <section>
        <Footer />
      </section>
    </>
  )
}

export default MainLayout
