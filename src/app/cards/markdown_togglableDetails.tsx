import { GitHubMarkdown } from "@/components/data/markdown";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
} from "@/components/ui/card";
import { Copy } from "lucide-react";

export const CopyButton = () => (
  // TODO make reusable
  <Button
    variant="ghost"
    size="icon"
    className="absolute bg-slate-600 rounded-xl"
  >
    <Copy />
  </Button>
);
import { CodeSnippet } from "@/components/ui/card";

export default function MarkdownTogglableDetails() {
  const { toggleDetails } = GitHubMarkdown.content;

  return (
    <>
      <CardHeader className="rounded-sm font-semibold text-xs">
        {toggleDetails.title.toUpperCase()}
        <CardAction>
          <CopyButton />
        </CardAction>
      </CardHeader>
      <CardContent>
        <pre className="p-1.5 rounded-md font-mono text-sm bg-slate-300 text-slate-700">
          {JSON.parse(JSON.stringify(toggleDetails.snippet))}
        </pre>
      </CardContent>
      <div data-testid="markdown-details-helper-snippet">
        <h3 data-testid="markdown-details-helper-snippet-title" className="rounded-sm p-1 mb-2 font-semibold text-md bg-slate-400 text-slate-700 w-40">
          {toggleDetails.title.toUpperCase()}
        </h3>
        <CodeSnippet data-testid="markdown-details-code-snippet" code={toggleDetails.snippet} />
      </div>
    </>
  );
}
