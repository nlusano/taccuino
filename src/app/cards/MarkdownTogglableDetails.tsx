import { GitHubMarkdown } from "@/components/data/markdown";
import { CardContent, CardHeader, CodeSnippet } from "@/components/ui/card";

export default function MarkdownTogglableDetails({
  id,
  isVisible,
}: {
  id: string;
  isVisible: boolean;
}) {
  const { toggleDetails } = GitHubMarkdown.content;

  return isVisible ? (
    <CardContent
      id={id}
      data-testid="markdown-card--togglable-details"
      className="mt-5"
    >
      <CardHeader className="rounded-sm font-semibold text-xs text-sky-200">
        {toggleDetails.title.toUpperCase()}
      </CardHeader>
      <CodeSnippet
        data-testid="markdown-details-code-snippet"
        code={toggleDetails.snippet}
      />
    </CardContent>
  ) : null;
}
