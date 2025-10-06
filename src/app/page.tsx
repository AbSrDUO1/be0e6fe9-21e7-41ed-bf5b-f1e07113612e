"use client";

import { SiteThemeProvider } from '@/components/sections/ThemeProvider';
import NavbarLayoutFloatingOverlay from '@/components/navigation/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import SplitHero from '@/components/sections/layouts/hero/SplitHero';
import SplitAbout from '@/components/sections/layouts/about/SplitAbout';
import HowToBuy3D from '@/components/sections/layouts/howtobuy/3DHTB';
import NumberGridTokenomics from '@/components/sections/layouts/tokenomics/NumberGridTokenomics';
import BentoFAQ from '@/components/sections/layouts/faq/BentoFAQ';
import FooterLogo from '@/components/footer/FooterLogo';

export default function Home() {
  return (
    <SiteThemeProvider theme={{ styleVariant: 'funAndTrendy', colorTemplate: 2, textAnimation: 'slide' }}>
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          logoSrc="/images/logo.svg"
          logoWidth={120}
          logoHeight={40}
          navItems={[
            { name: "Hero", id: "hero" },
            { name: "About", id: "about" },
            { name: "How to Buy", id: "how-to-buy" },
            { name: "Tokenomics", id: "tokenomics" },
            { name: "FAQ", id: "faq" },
            { name: "Footer", id: "footer" }
          ]}
          buttonText="Get Started"
          onButtonClick={() => console.log('CTA Clicked')}
        />
      </div>
      <div id="hero" data-section="hero">
        <SplitHero
          title="Welcome to Xeven Solutions"
          subtitle="Your gateway to innovative SaaS solutions"
          primaryButtonText="Get Started"
          onPrimaryButtonClick={() => console.log('Primary Button Clicked')}
          secondaryButtonText="Learn More"
          onSecondaryButtonClick={() => console.log('Secondary Button Clicked')}
        />
      </div>
      <div id="about" data-section="about">
        <SplitAbout
          description="At Xeven Solutions, we deliver the best SaaS applications with a focus on user experience and efficiency. Our team is dedicated to ensuring you get the most out of our tools."/>
      </div>
      <div id="how-to-buy" data-section="how-to-buy">
        <HowToBuy3D
          title="How to Buy"
          steps={[
            { title: "Step 1", description: "Register on our platform", image: "/images/placeholder1.avif", position: "left", isCenter: false },
            { title: "Step 2", description: "Choose your plan", image: "/images/placeholder2.avif", position: "center", isCenter: true },
            { title: "Step 3", description: "Complete your purchase", image: "/images/placeholder3.avif", position: "right", isCenter: false }
          ]}
        />
      </div>
      <div id="tokenomics" data-section="tokenomics">
        <NumberGridTokenomics
          title="Tokenomics Overview"
          description="Understanding our token model is key to engaging with Xeven."
          kpiItems={[
            { value: "100M", description: "Total Supply" },
            { value: "40%", description: "Available in Market" },
            { value: "20%", description: "Reserved for Development" }
          ]}
        />
      </div>
      <div id="faq" data-section="faq">
        <BentoFAQ
          items={[
            { title: "What is Xeven?", content: "Xeven is a cutting-edge SaaS platform designed for..." },
            { title: "How do I contact support?", content: "You can reach our support team via the contact form on the website." }
          ]}
        />
      </div>
      <div id="footer" data-section="footer">
        <FooterLogo
          logoSrc="/images/logo.svg"
          logoAlt="Xeven Logo"
          logoText="Xeven Solutions"
          className="footer"
        />
      </div>
    </SiteThemeProvider>
  );
}