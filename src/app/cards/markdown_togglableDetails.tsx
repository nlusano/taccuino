import { GitHubMarkdown } from "@/components/data/markdown";
import {
  CardContent,
  CardHeader,
  CodeSnippet
} from "@/components/ui/card";

export default function MarkdownTogglableDetails() {
  const { toggleDetails } = GitHubMarkdown.content;

  return (
    <CardContent>
      <CardHeader className="rounded-sm font-semibold text-xs">
        {toggleDetails.title.toUpperCase()}
      </CardHeader>
      <CodeSnippet code={toggleDetails.snippet} />
    </CardContent>
  );
}
