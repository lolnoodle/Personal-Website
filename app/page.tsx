import Image from "next/image";
import HeroSection from "@/components/hero-section";

export default function Home() {
  return (
    <div className="flex bg-[var(--background2)]">
      <HeroSection></HeroSection>
    </div>
  );
}
