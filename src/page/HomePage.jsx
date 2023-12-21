import { Stack } from "@mui/material";
import Header from "layout/Header";
import Advisor from "../components/Advisor/Advisor";
import AboutUs from "../components/aboutUs/AboutUs";
import CEOStatement from "../components/ceo-statement/CEOStatement";
import ContactUs from "../components/contactUs/ContactUs";
import Faq from "../components/faq/Faq";
import FindProgram from "../components/findProgram/FindProgram";
import Footer from "../components/footer/Footer";
import Gallery from "../components/gallery/Gallery";
import HeroCarousel from "../components/heroCarousel/HeroCarousel";
import History from "../components/history/History";
import OurServices from "../components/ourServices/OurServices";
import Photos from "../components/photos/Photos";
import StudyInSouthKorea from "../components/studyInSouthKorea/StudyInSouthKorea";
import Testimonial from "../components/testimonial/Testimonial";
import WorkingUniversities from "../components/workingUniversities/WorkingUniversities";


export default function HomePage() {
  return (
    <Stack>
      {/* <Navbar /> */}
      <Header />
      {/* <HeroSection /> */}
      <HeroCarousel />
      <OurServices />
      <FindProgram />
      <WorkingUniversities />
      <CEOStatement/>
      <StudyInSouthKorea />
      <Testimonial />
      <History />
      <Photos />
      <Gallery />
      <AboutUs />
      <Faq />
      <ContactUs />
      <Advisor/>
      <Footer />
    </Stack>
  );
}
