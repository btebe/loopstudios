import Hero from "./comps/Hero";
import Nav from "./comps/Nav";
import Footer from "./comps/Footer";
import SectionHome from "./comps/SectionHome";

function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <SectionHome />
      </main>
      <Footer />
    </>
  );
}

export default App;
