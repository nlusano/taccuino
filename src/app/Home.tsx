import React from "react";
import MarkdownCard from "./cards/MarkdownCard";
import Filter from "./Filter";
import "./general.css";
import Search from "./Search";

export default function Home({
  searchParams,
}: {
  searchParams: Promise<{ label: string; query: string }>;
}) {
  const { label, query }: { label: string; query: string } =
    React.use(searchParams);
  const regexp = new RegExp(query, "gim");

  const isMarkdownVisible = !label || label === "markdown";
  const isSqlVisible = !label || label === "sql";

  const isSqlSnippetVisible =
    (!query && isSqlVisible) || // there are no active queries and the card is visible
    (!!query && (regexp.test("SQL") || regexp.test("Test sql snippet"))); // active query that matches either card title or snippet title or content

  return (
    <main className="min-h-screen bg-slate-100 pt-20 text-slate-900">
      <div className="mx-auto flex max-w-4xl flex-col gap-12 px-6">
        <div className="text-left">
          <h1 className="text-6xl text-slate-700 font-semibold">Taccuino</h1>
        </div>
        <div id="snippets" data-testid="page-content">
          <section>
            <Search />
            <Filter />
          </section>
          <div id="Snippet 2" className="grid grid-cols-1 gap-6 md:grid-cols-1">
            <MarkdownCard isVisible={isMarkdownVisible} query={query} />
            {isSqlVisible ? (
              <div
                role="card"
                className="rounded-lg bg-slate-600 p-6 text-slate-300"
              >
                <h3 className="mb-2 text-xl font-semibold">SQL</h3>
                {isSqlSnippetVisible ? (
                  <p data-testid="sql-card--test-snippet">Test sql snippet</p>
                ) : null}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </main>
  );
}
