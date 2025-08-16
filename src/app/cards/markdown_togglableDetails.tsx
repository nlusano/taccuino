import { GitHubMarkdown } from "@/components/data/markdown";

export default function MarkdownTogglableDetails() {
  const { toggleDetails } = GitHubMarkdown.content;

  return (
    <article>
      <div className="rounded-sm p-1 mb-2 font-semibold text-md bg-slate-400 text-slate-700 w-40">
        {toggleDetails.title.toUpperCase()}
      </div>
      <pre className="font-mono text-sm">
        {JSON.parse(JSON.stringify(toggleDetails.snippet))}
      </pre>
    </article>
  );
}
