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
    result: [
      "- Wrote the project docs and mission to explain the meme coin portfolio analysis tool clearly",
      "- Positioned the product for traders who want simple, readable portfolio insights",
      "- Planned launch messaging and community onboarding",
      "- Set up community channels and engagement for early users",
    ].join("\n"),
    image: "/images/creamly.png",
  },
  {
    title: "$APESHIT",
    role: "Marketing & Content",
    tags: ["Content", "X / Twitter"],
    result: [
      "- Created X posts, threads and announcements to build the project narrative",
      "- Ran engagement and raid-style campaigns to grow reach",
      "- Kept a steady daily posting rhythm to keep the community active",
      "- Tracked impressions and follower growth to see what content worked",
    ].join("\n"),
    image: "/images/apeshit.png",
  },
  {
    title: "SOLISECURE",
    role: "Growth Strategy",
    tags: ["Strategy", "Partnerships"],
    result: [
      "- Built a user-acquisition and community growth strategy from scratch",
      "- Mapped channels, content and weekly targets into a simple roadmap",
      "- Identified partnership and bounty opportunities to bring in new users",
      "- Set up plain-number reporting: what worked, what did not, what is next",
    ].join("\n"),
    image: "/images/solisecure.png",
  },
  {
    title: "$ARK MEMECOIN WEBSITE",
    role: "Web Development",
    tags: ["Next.js", "Solana"],
    result: [
      "- Designed and built the full website in Next.js",
      "- Made it fully responsive and fast on mobile and desktop",
      "- Styled it around the meme coin's brand and community",
      "- Deployed live on Vercel",
    ].join("\n"),
    image: "/images/ark.png",
    url: "https://ark-virid.vercel.app/",
  },
];
