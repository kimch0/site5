import Hero from "./components/hero";
import Craftsmanship from "./components/craftsmanship";
import { FeaturedWatches } from "./components/featuredWatches";
import AboutUs from "./components/aboutUs";
import ContactForm from "./components/contactForm";

export default function Home() {
  return (
    <div >
      <Hero />
      <FeaturedWatches />
      <Craftsmanship />
      <AboutUs />
      <ContactForm />
    </div>
  );
}
