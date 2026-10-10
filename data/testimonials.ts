// ADD A TESTIMONIAL: copy a block. Photo: put file in /public/images and set image: "/images/jane.jpg"
export type Testimonial = {
  name: string;
  role: string;
  quote: string;
  image: string;
};
export const testimonials: Testimonial[] = [
  {
    name: "APE 16",
    role: "Growth Strategist",
    quote:
      "Hey man, great job getting lots of people into the group. Seems like it's really jammin' so far, and people are vibing well. Really happy with the progress so far.",
    image: "/images/aph.jpg",
  },
  {
    name: "CREAMLY IO",
    role: "Community Manager and marketer",
    quote:
      "Wow! Man, you are really good! You perfectly captured the essence of what I'm aiming for with the creation of this tool. Congratulations!",
    image: "/images/cream.png",
  },
  {
    name: "[CLIENT NAME]",
    role: "Commmunity Mananger and Web developer ",
    quote:
      "Man, this site is so smooth and clean! The UI is top-tier, everything flows perfectly, and the whole experience is just amazing. Great work on this! 🔥👏",
    image: "/images/arkss.jpg",
  },
];
