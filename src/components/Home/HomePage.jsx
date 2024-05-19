import React from "react";
import HeroSection from "./HeroSection";
import iphone from "../../assets/iphone-14.webp";
import mac from "../../assets/mac-system-cut.jfif";
import FeaturedProducts from "./FeaturedProducts";

const HomePage = () => {
  return (
    <div>
      <HeroSection
        title="But iPhone 14 Pro"
        subtitle="Experience the power of the latest iphone 14 with our most Pro camera ever."
        link="/product/6645fbcf5de33c970a64b2ce"
        image={iphone}
      />
      <FeaturedProducts />
      <HeroSection
        title="Build the ultimate setup"
        subtitle="You can add Studio Displays and colour-matched Magic accessories to your bag after configure your Mac mini."
        link="/product/6645fbcf5de33c970a64b2d6"
        image={mac}
      />
    </div>
  );
};

export default HomePage;
