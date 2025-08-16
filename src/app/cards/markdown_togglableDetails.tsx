import { markdown } from "@/components/data/markdown";

export default function MarkdownTogglableDetails() {
  const { content } = markdown;
  const { toggleDetails } = content;
  return (
    <article>
      <div className="rounded-lg pl-2 p-1 mb-2 font-semibold text-md bg-slate-400 text-slate-700 w-auto">
        {toggleDetails.title.toUpperCase()}
      </div>
      <pre>{JSON.parse(JSON.stringify(toggleDetails.snippet))}</pre>
    </article>
  );
}
