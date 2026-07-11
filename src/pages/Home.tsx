import Hero from "../components/hero/Hero";
import AboutPreview from "../components/about/AboutPreview";
import FeaturedExperience from "../components/experience/FeaturedExperience";
import FeaturedCertifications from "../components/certifications/FeaturedCertifications";

/**
 * ==========================================================
 * Home Page
 * ==========================================================
 *
 * Landing page of the portfolio.
 *
 * Purpose
 * -------
 * Welcome visitors and provide a concise overview
 * of your profile through featured sections while
 * directing visitors to dedicated pages for full details.
 *
 * Home Sections
 * -------------
 * ✓ Hero
 * ✓ About Preview
 * ✓ Featured Experience
 * ✓ Featured Certifications
 * ✓ Contact Section (Coming Next)
 *
 * Dedicated Pages
 * ---------------
 * • About
 * • Skills
 * • Experience
 * • Projects
 * • Certifications
 * • Contact
 *
 * ==========================================================
 */

function Home() {
  return (
    <>
      {/* ======================================================
          Hero Section
      ======================================================= */}

      <Hero />

      {/* ======================================================
          About Preview
      ======================================================= */}

      <AboutPreview />

      {/* ======================================================
          Featured Experience
      ======================================================= */}

      <FeaturedExperience />

      {/* ======================================================
          Featured Certifications
      ======================================================= */}

      <FeaturedCertifications />

      {/* ======================================================
          Contact Section
          (Coming Next)
      ======================================================= */}

      {/* <HomeContactSection /> */}
    </>
  );
}

export default Home;