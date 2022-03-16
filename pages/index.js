import About from '../components/About';
import Bottom from '../components/Bottom';
import Chart from '../components/Chart';
import Discord from '../components/Discord';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Pricing from '../components/Pricing';
import Testimonials from '../components/Testimonials';

export default function Home() {
  return (
    <div
      style={{ backgroundImage: 'url(./img/bg.png)' }}
      className='bg-cover bg-no-repeat bg-left-top'
    >
      <Header />
      <Hero />
      <About />
      <Pricing />
      <Testimonials />
      <Discord />
      <Chart />
      <Footer />
      <Bottom />
    </div>
  );
}
