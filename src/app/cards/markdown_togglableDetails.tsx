import { GitHubMarkdown } from "@/components/data/markdown";
import { CardContent, CardHeader, CodeSnippet } from "@/components/ui/card";

export default function MarkdownTogglableDetails({ id }: { id: string }) {
  const { toggleDetails } = GitHubMarkdown.content;

  return (
    <CardContent id={id}>
      <CardHeader className="rounded-sm font-semibold text-xs">
        {toggleDetails.title.toUpperCase()}
      </CardHeader>
      <CodeSnippet
        data-testid="markdown-details-code-snippet"
        code={toggleDetails.snippet}
      />
    </CardContent>
  );
}
