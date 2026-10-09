// ADD AN ARTICLE: copy a block. slug becomes the URL: /writing/<slug>
export type Post = { slug: string; title: string; tag: string; read: string; summary: string; cover: string; body: string[] };
export const posts: Post[] = [
  { slug: "article-one", title: "[ARTICLE TITLE ONE]", tag: "Community", read: "5 min", summary: "A short summary of the article goes here, in one or two lines.", cover: "",
    body: ["[Your article starts here. Open with the problem in one or two sentences, then walk the reader through what you tried and what worked.]", "[Use short paragraphs. Add screenshots, numbers and examples from your real projects so readers can trust the advice.]", "[End with a clear takeaway and a link to follow you or get in touch.]"] },
  { slug: "article-two", title: "[ARTICLE TITLE TWO]", tag: "Growth", read: "7 min", summary: "A short summary of the article goes here, in one or two lines.", cover: "", body: ["[Your article text goes here.]"] },
  { slug: "article-three", title: "[ARTICLE TITLE THREE]", tag: "Marketing", read: "4 min", summary: "A short summary of the article goes here, in one or two lines.", cover: "", body: ["[Your article text goes here.]"] },
];
