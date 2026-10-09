import { Sec, PostGrid, Cta } from "@/components/Sections";
export const metadata = { title: "Writing" };
export default function Writing() {
  return (<><Sec eyebrow="WRITING" title="Articles & threads" sub="Add your writing in data/posts.ts."><PostGrid /></Sec><Cta /></>);
}
