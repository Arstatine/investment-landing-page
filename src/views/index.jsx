import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import About from '../components/Investment';
import Partnership from '../components/Partnership';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';

function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <About />
      <Partnership />
      <Services />
      <Testimonials />
      <Footer />
    </>
  );
}

export default Home;
