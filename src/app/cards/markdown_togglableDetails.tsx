import { GitHubMarkdown } from "@/components/data/markdown";
import { CodeSnippet } from "@/components/ui/card";

export default function MarkdownTogglableDetails() {
  const { toggleDetails } = GitHubMarkdown.content;

  return (
    <div data-testid="helper-snippet">
      <h3 data-testid="helper-snippet-title" className="rounded-sm p-1 mb-2 font-semibold text-md bg-slate-400 text-slate-700 w-40">
        {toggleDetails.title.toUpperCase()}
      </h3>
      <CodeSnippet data-testid="markdown-details-code-snippet" code={toggleDetails.snippet} />
    </div>
  );
}
