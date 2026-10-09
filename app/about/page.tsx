import { About, Services, WhyMe, Process, Cta } from "@/components/Sections";
export const metadata = { title: "About" };
export default function AboutPage() {
  return (
    <>
      <About />
      <Services />
      <WhyMe />
      <Process />
      <Cta />
    </>
  );
}
