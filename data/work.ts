// ADD A PROJECT: copy a block. Put the screenshot in /public/images and set image: "/images/name.jpg"
export type Work = {
  title: string;
  role: string;
  tags: string[];
  result: string;
  image: string;
  url?: string;
};
export const works: Work[] = [
  {
    title: "CREAMLY.IO",
    role: "Community & Growth",
    tags: ["Community", "Campaign"],
    result: "[Result: members gained, engagement, launch outcome]",
    image: "/images/creamly.png",
  },
  {
    title: "$APESHIT",
    role: "Marketing & Content",
    tags: ["Content", "X / Twitter"],
    result: "[Result: impressions, followers, conversions]",
    image: "/images/apeshit.png",
  },
  {
    title: "SOLISECURE",
    role: "Growth Strategy",
    tags: ["Strategy", "Partnerships"],
    result: "[Result: users, volume, retention]",
    image: "/images/solisecure.png",
  },
  {
    title: "$ARK MEMECOIN WEBSITE",
    role: "Web Development",
    tags: ["Next.js", "Solana"],
    result: "[Result: what you built and shipped]",
    image: "/images/ark.png",
    url: "https://ark-virid.vercel.app/",
  },
];
