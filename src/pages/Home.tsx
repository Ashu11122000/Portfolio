import Hero from "../components/hero/Hero";

import AboutPreview from "../components/about/AboutPreview";

import FeaturedExperience from "../components/experience/FeaturedExperience";

import FeaturedProjects from "../components/projects/FeaturedProjects";

import FeaturedCertifications from "../components/certifications/FeaturedCertifications";

/**
 * ==========================================================
 * Home Page
 * ==========================================================
 *
 * Ultra Premium Portfolio Landing Page
 *
 * Sections
 * ----------
 * ✓ Hero
 * ✓ About Preview
 * ✓ Featured Experience
 * ✓ Featured Projects
 * ✓ Featured Certifications
 * ✓ Contact CTA
 *
 * ==========================================================
 */

function Home() {
  return (
    <main className="overflow-x-hidden">
      {/* Hero */}

      <Hero />

      {/* About */}

      <AboutPreview />

      {/* Experience */}

      <FeaturedExperience />

      {/* Featured Projects */}

      <FeaturedProjects />

      {/* Certifications */}

      <FeaturedCertifications />

      {/* Contact CTA */}
    </main>
  );
}

export default Home;