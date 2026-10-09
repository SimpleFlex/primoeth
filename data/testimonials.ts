// ADD A TESTIMONIAL: copy a block. Photo: put file in /public/images and set image: "/images/jane.jpg"
export type Testimonial = { name: string; role: string; quote: string; image: string };
export const testimonials: Testimonial[] = [
  { name: "[CLIENT NAME]", role: "[Role, Project]", quote: "[What they said about working with you. A real quote with a real result works best.]", image: "" },
  { name: "[CLIENT NAME]", role: "[Role, Project]", quote: "[What they said about working with you.]", image: "" },
  { name: "[CLIENT NAME]", role: "[Role, Project]", quote: "[What they said about working with you.]", image: "" },
];
