import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
} from "@/components/ui/card";
import { GitHubMarkdown } from "@/components/data/markdown";
import { CodeSnippet } from "@/components/ui/card";

export default function MarkdownTogglableDetails() {
  const { toggleDetails } = GitHubMarkdown.content;

  return (
    <>
      <CardHeader className="rounded-sm font-semibold text-xs">
        {toggleDetails.title.toUpperCase()}
      </CardHeader>
      <CodeSnippet
        data-testid="markdown-details-code-snippet"
        code={toggleDetails.snippet}
      />
    </>
  );
}
