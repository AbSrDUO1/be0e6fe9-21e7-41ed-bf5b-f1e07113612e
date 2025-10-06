use client
import { SiteThemeProvider } from '@/components/sections/ThemeProvider';
import NavbarLayoutFloatingInline from '@/components/navigation/NavbarLayoutFloatingInline';
import SplitHero from '@/components/sections/layouts/hero/SplitHero';
import SocialsAbout from '@/components/sections/layouts/about/SocialsAbout';
import HowToBuy2D from '@/components/sections/layouts/howtobuy/2DHTB';
import TextGridTokenomics from '@/components/sections/layouts/tokenomics/TextGridTokenomics';
import FooterBase from '@/components/footer/FooterBase';

export default function Home() {
  return (
    <SiteThemeProvider theme={{ styleVariant: 'futuristicAndOutOfBox', colorTemplate: 2, textAnimation: 'slide' }}>
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          logoSrc="/images/logo.svg"
          logoAlt="Xeven Solutions"
          navItems={[{ name: 'Hero', id: 'hero' }, { name: 'About', id: 'about' }, { name: 'How to Buy', id: 'how-to-buy' }, { name: 'Tokenomics', id: 'tokenomics' }, { name: 'Footer', id: 'footer' }]}
          buttonText="Get Started"
          className="bg-transparent text-white"
          buttonClassName="bg-white text-black"
        />
      </div>
      <div id="hero" data-section="hero" className="scroll-mt-24">
        <SplitHero
          title="Welcome to Xeven Solutions"
          subtitle="Empowering the future of SaaS solutions"
          primaryButtonText="Get Started"
          onPrimaryButtonClick={() => console.log('Primary button clicked')}
          secondaryButtonText="Learn More"
          onSecondaryButtonClick={() => console.log('Secondary button clicked')}
        />
      </div>
      <div id="about" data-section="about">
        <SocialsAbout
          title="About Xeven"
          descriptions={["Innovative solutions to help you thrive.", "Reliable 24/7 support to guide you through.", "Secure and confident SaaS applications."]}
        />
      </div>
      <div id="how-to-buy" data-section="how-to-buy">
        <HowToBuy2D
          variant="simple"
        />
      </div>
      <div id="tokenomics" data-section="tokenomics">
        <TextGridTokenomics
          title="Our Tokenomics"
          description="Explore our sustainable token model"
          tokenData={[{ value: "10M", description: "Total Supply" }, { value: "$1", description: "Initial Token Price" }, { value: "20%", description: "Liquidity" }]}
        />
      </div>
      <div id="footer" data-section="footer">
        <FooterBase
          logoSrc="/images/logo.svg"
          logoWidth={100}
          logoHeight={50}
          columns={[{ title: 'Resources', items: [{ label: 'FAQ', onClick: () => console.log('FAQ clicked') }, { label: 'Support', onClick: () => console.log('Support clicked') }] }, { title: 'Company', items: [{ label: 'About Us', onClick: () => console.log('About Us clicked') }, { label: 'Privacy Policy', onClick: () => console.log('Privacy Policy clicked') }] }, { title: 'Connect', items: [{ label: 'Twitter', onClick: () => console.log('Twitter clicked') }, { label: 'LinkedIn', onClick: () => console.log('LinkedIn clicked') }] }]}
          copyrightText="© 2023 Xeven Solutions"
          onPrivacyClick={() => console.log('Privacy Policy clicked')}
          className="footer-class"
        />
      </div>
    </SiteThemeProvider>
  );
}