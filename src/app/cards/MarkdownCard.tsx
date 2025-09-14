import { GitHubMarkdown } from "@/components/data/markdown";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";
import MarkdownTogglableDetails from "./MarkdownTogglableDetails";

export default function MarkdownCard(
  props: React.ComponentProps<"div"> & {
    isVisible: boolean;
    query: string;
  },
) {
  const { isVisible, query } = props;
  const { content, labels, title } = GitHubMarkdown;

  const regexp = new RegExp(query, "gim");

  const isTogglaDetailsMatch =
    regexp.test(content.toggleDetails.snippet) ||
    regexp.test(content.toggleDetails.title);

  const isTogglaDetailsVisible =
    (!query && isVisible) || // there are no active queries and the card is visible
    (!!query && (regexp.test(title) || isTogglaDetailsMatch)); // active query that matches either card title or snippet title or content

  const isCardVisible = isVisible || (!!query && regexp.test(title));

  return isCardVisible ? (
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
        <MarkdownTogglableDetails
          isVisible={isTogglaDetailsVisible}
          id={content.toggleDetails.title}
        />
      </CardContent>
    </Card>
  ) : null;
}
