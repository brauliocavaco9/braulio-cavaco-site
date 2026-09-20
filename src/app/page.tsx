import Hero from "@/components/home/Hero";
import WhoIAm from "@/components/home/WhoIAm";
import HowICanHelp from "@/components/home/HowICanHelp";
import MethodSection from "@/components/home/MethodSection";
import Testimonials from "@/components/home/Testimonials";

export default function HomePage() {
  return (
    <>
      <Hero />
      <WhoIAm />
      <HowICanHelp />
      <MethodSection />
      <Testimonials />
    </>
  );
}
