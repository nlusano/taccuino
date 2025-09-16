import { GitHubMarkdown } from "@/components/data/markdown";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";
import MarkdownTogglableDetails from "@/app/cards/MarkdownTogglableDetails";
import MarkdownHighlight from "@/app/cards/MarkdownHighlight";

export default function MarkdownCard(
  props: React.ComponentProps<"div"> & {
    isVisible: boolean;
    query: string;
  },
) {
  const { isVisible, query } = props;
  const { content, labels, title } = GitHubMarkdown;
  const { highlight, toggleDetails } = content;
  const { note, tip, important, warning, caution } = highlight.snippet;

  const regexp = new RegExp(query, "gim");

  const isSnippetVisible = (condition: boolean) =>
    (!query && isVisible) || // there are no active queries and the card is visible
    (!!query && (regexp.test(title) || condition)); // active query that matches either card title or snippet title or content

  const isTogglaDetailsVisible = isSnippetVisible(
    regexp.test(toggleDetails.snippet) || regexp.test(toggleDetails.title),
  );

  const isHighlightVisible = isSnippetVisible(
    regexp.test(note) ||
      regexp.test(tip) ||
      regexp.test(important) ||
      regexp.test(warning) ||
      regexp.test(caution) ||
      regexp.test(highlight.title),
  );

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
          id={toggleDetails.title}
        />
        <MarkdownHighlight
          isVisible={isHighlightVisible}
          id={highlight.title}
        />
      </CardContent>
    </Card>
  ) : null;
}
