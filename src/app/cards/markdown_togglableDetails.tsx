import { GitHubMarkdown } from "@/components/data/markdown";
import { Button } from "@/components/ui/button";
import { Copy } from "lucide-react";

export default function MarkdownTogglableDetails() {
  const { toggleDetails } = GitHubMarkdown.content;

  return (
    <article>
      {/* Code snippet: bg-slate-400 text-slate-700 */}
      <div className="rounded-sm p-1 mb-2 font-semibold text-md w-40 ">
        {toggleDetails.title.toUpperCase()}
      </div>
      {/** Code snippet, was: bg-slate-400 */}
      <pre className="p-1.5 rounded-md font-mono text-sm bg-slate-300 text-slate-700">
        <CopyButton />
        <br />
        {JSON.parse(JSON.stringify(toggleDetails.snippet))}
      </pre>
    </article>
  );
}

const CopyButton = () => (
  <Button variant="ghost" size="icon">
    <Copy />
  </Button>
);
