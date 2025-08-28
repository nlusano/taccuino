import { GitHubMarkdown } from "@/components/data/markdown";
import { Card, CardContent, CardHeader, CardLabels, CardTitle } from "@/components/ui/card";
import MarkdownTogglableDetails from "./markdown_togglableDetails";

export default function MarkdownCard() {
  const { title, labels } = GitHubMarkdown;
  return (
    <Card data-testid="markdown-card" className="p-3.5 shadow-md">
      <CardHeader>
        <CardLabels labels={labels} />
        <CardTitle className="text-3xl font-semibold">{title}</CardTitle>
      </CardHeader>
      <CardContent data-testid="markdown-card-content" className="rounded-sm">
        <MarkdownTogglableDetails />
      </CardContent>
    </Card>
  );
}
