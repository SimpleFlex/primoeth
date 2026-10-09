import { Sec, TestGrid, Cta } from "@/components/Sections";
export const metadata = { title: "Testimonials" };
export default function Testimonials() {
  return (<><Sec eyebrow="TESTIMONIALS" title="What people say" sub="Add photos in data/testimonials.ts."><TestGrid /></Sec><Cta /></>);
}
