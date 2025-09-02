import { GitHubMarkdown } from "@/components/data/markdown";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";
import MarkdownTogglableDetails from "./markdown_togglableDetails";

export default function MarkdownCard(
  props: React.ComponentProps<"div"> & {
    isVisible: boolean;
  },
) {
  const { content, labels, title } = GitHubMarkdown;

  return props.isVisible ? (
    <Card
      data-testid="markdown-card"
      className="p-3.5 shadow-md"
      id={labels[0].name}
      label={labels[0].name}
    >
      <CardHeader>
        {/* <CardLabels labels={labels} /> */}
        <CardTitle className="text-4xl font-semibold">{title}</CardTitle>
      </CardHeader>
      <CardContent
        data-testid="markdown-card-content"
        className="rounded-sm mt-3"
      >
        <MarkdownTogglableDetails id={content.toggleDetails.title} />
      </CardContent>
    </Card>
  ) : null;
}
