import { Card, CardContent, CardHeader } from "@/components/ui/card";
import markdown from "@/components/json/markdown.json";

export default function MarkdownCard() {
  const { content, title } = markdown;
  return (
    <Card>
      <CardHeader>
        <h3 className="mb-2 text-xl font-semibold">{title}</h3>
      </CardHeader>
      <CardContent className="p-2 rounded-md text-slate-600 bg-gray-300">
        <code>{JSON.parse(JSON.stringify(content))}</code>
      </CardContent>
    </Card>
  );
}
