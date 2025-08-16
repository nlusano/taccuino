import { markdown } from "@/components/data/markdown";

export default function MarkdownTogglableDetails() {
  const { content } = markdown;
  const { details } = content;
  return <code>{JSON.parse(JSON.stringify(details))}</code>;
}
