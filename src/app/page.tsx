'use client';
import React from "react";
import MarkdownCard from "./cards/markdown";
import "./general.css";
import Labels from "./labels";

export default function Home({ searchParams }: any) {
  const searchParameters: { label: string } = React.use(searchParams)
  const noLabelSelected = searchParameters.label === undefined
  const isMarkdownVisible = noLabelSelected || searchParameters.label === "markdown"
  const isSqlVisible = noLabelSelected || searchParameters.label === "sql"

  return (
    <main className="min-h-screen bg-slate-100 pt-20 text-slate-900">
      <div className="mx-auto flex max-w-4xl flex-col gap-12 px-6">
        <div className="text-left">
          <h1 className="text-6xl text-slate-700 font-semibold">Taccuino</h1>
        </div>
        <div id="snippets" data-testid="page-content">
          <Labels />
          <div id="Snippet 2" className="grid grid-cols-1 gap-6 md:grid-cols-1">
            < MarkdownCard isVisible={isMarkdownVisible} />
            {isSqlVisible ?
              <div className="rounded-lg bg-slate-600 p-6 text-slate-300">
                <h3 className="mb-2 text-xl font-semibold">Test SQL helper</h3>
                <p>Test</p>
              </div>
              : null
            }
          </div>
        </div>
      </div>
    </main>
  );
}
