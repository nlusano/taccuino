import { GitHubMarkdown } from "@/components/data/markdown";
import { CardContent, CardHeader, CodeSnippet } from "@/components/ui/card";

export default function MarkdownHighlight({
  id,
  isVisible,
}: {
  id: string;
  isVisible: boolean;
}) {
  const { highlight } = GitHubMarkdown.content;
  const { note, tip, important, warning, caution } = highlight.snippet;

  return isVisible ? (
    <>
      <CardContent id={id} data-testid="markdown-card--highlight">
        <CardHeader className="rounded-sm font-semibold text-xs">
          {highlight.title.toUpperCase()}
        </CardHeader>
        <CodeSnippet
          data-testid="markdown-highlight-code-snippet"
          code={note}
        />
        <CodeSnippet data-testid="markdown-highlight-code-snippet" code={tip} />
        <CodeSnippet
          data-testid="markdown-highlight-code-snippet"
          code={important}
        />
        <CodeSnippet
          data-testid="markdown-highlight-code-snippet"
          code={warning}
        />
        <CodeSnippet
          data-testid="markdown-highlight-code-snippet"
          code={caution}
        />
      </CardContent>
    </>
  ) : null;
}
