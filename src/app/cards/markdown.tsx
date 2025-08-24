import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { GitHubMarkdown } from "@/components/data/markdown";
import MarkdownTogglableDetails from "./markdown_togglableDetails";

export default function MarkdownCard() {
  const { title } = GitHubMarkdown;
  return (
    <Card data-testid="markdown-card" className="pt-3">
      <CardHeader>
        <h3 className="mb-2 text-3xl font-semibold">{title}</h3>
      </CardHeader>
      <CardContent data-testid="markdown-card-content" className="p-2 rounded-md text-slate-600 bg-gray-300">
        <MarkdownTogglableDetails />
      </CardContent>
    </Card>
  );
}
