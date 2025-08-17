import { GitHubMarkdown } from "@/components/data/markdown";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
} from "@/components/ui/card";
import { Copy } from "lucide-react";

const CopyButton = () => (
  // TODO make reusable
  <Button
    variant="ghost"
    size="icon"
    className="absolute bg-slate-600 -right-2 top-10 rounded-xl"
  >
    <Copy />
  </Button>
);

export default function MarkdownTogglableDetails() {
  const { toggleDetails } = GitHubMarkdown.content;

  return (
    <Card className="">
      <CardHeader className="rounded-sm p-1 mb-2 font-semibold text-xl">
        {toggleDetails.title.toUpperCase()}
        <CardAction>
          <CopyButton />
        </CardAction>
      </CardHeader>
      <CardContent>
        <pre className="p-1.5 rounded-md font-mono text-sm bg-slate-300 text-slate-700">
          {JSON.parse(JSON.stringify(toggleDetails.snippet))}
        </pre>
      </CardContent>
    </Card>
  );
}
