import { Stack } from "@mui/material";
import React from "react";
import AboutUs from "../components/aboutUs/AboutUs";
import ContactUs from "../components/contactUs/ContactUs";
import Faq from "../components/faq/Faq";
import FindProgram from "../components/findProgram/FindProgram";
import Footer from "../components/footer/Footer";
import Gallery from "../components/gallery/Gallery";
import HeroSection from "../components/hero/HeroSection";
import History from "../components/history/History";
import Navbar from "../components/navbar/Navbar";
import OurServices from "../components/ourServices/OurServices";
import StudyInSouthKorea from "../components/studyInSouthKorea/StudyInSouthKorea";
import WorkingUniversities from "../components/workingUniversities/WorkingUniversities";
import Photos from "../components/photos/Photos";
import Testimonial from "../components/testimonial/Testimonial";

export default function HomePage() {
    return (
        <Stack>
            <Navbar />
            <HeroSection />
            <OurServices />
            <FindProgram />
            <WorkingUniversities />
            <StudyInSouthKorea />
            <Testimonial />
            <History />
            <Photos />
            <Gallery />
            <AboutUs />
            <Faq />
            <ContactUs />
            <Footer />
        </Stack>
    );
}
