import { GitHubMarkdown } from "@/components/data/markdown";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import MarkdownTogglableDetails from "./markdown_togglableDetails";

export default function MarkdownCard() {
  const { title } = GitHubMarkdown;
  return (
    <Card data-testid="markdown-card" className="pt-3 shadow-md">
      <CardHeader>
        <h3 className="text-3xl font-semibold">{title}</h3>
      </CardHeader>
      <CardContent data-testid="markdown-card-content" className="rounded-sm">
        <MarkdownTogglableDetails />
      </CardContent>
    </Card>
  );
}
