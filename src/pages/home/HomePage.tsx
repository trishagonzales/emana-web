import About from './About';
import WhyChooseUs from './WhyChooseUs';
import Hero from './hero/Hero';
import Tokenomics from './Tokenomics';
import PresaleInfo from './PresaleInfo';
import Team from './Team';
import FAQs from './FAQs';
import DownloadWhitepaper from './DownloadWhitepaper';
// import Contact from './Contact';

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <WhyChooseUs />
      <Tokenomics />
      {/* <Roadmap /> */}
      <PresaleInfo />
      <Team />
      <FAQs />
      <DownloadWhitepaper />
      {/* <Contact /> */}
    </>
  );
}
