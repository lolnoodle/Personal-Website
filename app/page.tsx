import Image from "next/image";
import HeroSection from "@/components/hero-section";
import ProjectSection from "@/components/project-section";

export default function Home() {
  return (
    <div className="flex flex-col w-full bg-[var(--background2)]">
      <HeroSection></HeroSection>
      <ProjectSection></ProjectSection>
    </div>
  );
}
