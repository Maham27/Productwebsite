import Faq  from "./Faq";
import FeaturesSection from "./Featuressection";
import Gallery from "./Gallery";
import HeroSection from "./Herosection";
import Productsshowcase from "./Productsshowcase";
import Testimonials from "./Testimonials";
import Contact from "./Contact";
import { Footersection } from "./Footersection";
import Scroll from "./Scroll";

export default function Home() {
    return(
<>
<HeroSection/>
<FeaturesSection/>
<Productsshowcase/>
<Gallery/>
<Faq/>
<Testimonials/>
<Contact/>
<Footersection/>
<Scroll/>
</>
    )
}
