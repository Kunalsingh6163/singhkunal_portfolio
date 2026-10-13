import Hero from "./components/heroSection/Hero";
import Navbar from "./components/navbar/Navbar";
import About from "./components/about/About";
import Technologies from "./components/technology/Technologies";
import Experience from "./components/experience/Experience";
import Projects from "./components/projects/Projects";
import Educations from "./components/educations/Educations";
import Certificate from "./components/certifications/Certificate";
import Contacts from "./components/contact/Contacts";

export default function Home() {
  return (
    <main className="site-shell">
      <Navbar />
      <Hero />
      <About />
      <Technologies />
      <Experience />
      <Projects />
      <Educations />
      <Certificate />
      <Contacts />
    </main>
  );
}
