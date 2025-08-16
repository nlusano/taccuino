import { Card, CardContent, CardHeader } from "@/components/ui/card";

export default function MarkdownCard() {
  return (
    <Card>
      <CardHeader>
        <h3 className="mb-2 text-xl font-semibold"> Snippet 1</h3>
      </CardHeader>
      <CardContent>Snippet content.</CardContent>
    </Card>
  );
}
