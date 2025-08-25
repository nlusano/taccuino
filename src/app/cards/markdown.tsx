import { GitHubMarkdown } from "@/components/data/markdown";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import MarkdownTogglableDetails from "./markdown_togglableDetails";

export default function MarkdownCard() {
  const { title } = GitHubMarkdown;
  return (
    <Card data-testid="markdown-card" className="pt-3 shadow-md">
      <CardHeader>
        <CardTitle className="text-3xl font-semibold">{title}</CardTitle>
      </CardHeader>
      <CardContent data-testid="markdown-card-content" className="rounded-sm">
        <MarkdownTogglableDetails />
      </CardContent>
    </Card>
  );
}
