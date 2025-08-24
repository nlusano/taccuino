import { GitHubMarkdown } from "@/components/data/markdown";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import MarkdownTogglableDetails from "./markdown_togglableDetails";

export default function MarkdownCard() {
  const { title } = GitHubMarkdown;
  return (
    <Card className="pt-3 shadow-md">
      <CardHeader>
        <h3 className="text-3xl font-semibold">{title}</h3>
      </CardHeader>
      {/* Card content
      was: text-slate-600 bg-gray-300;
      then changed to: bg-muted-foreground.
      bg-slate-700 is also an option */}
      <CardContent data-testid="markdown-card-content" className="rounded-sm">
        <MarkdownTogglableDetails />
      </CardContent>
    </Card>
  );
}
