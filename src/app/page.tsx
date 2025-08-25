import MarkdownCard from "./cards/markdown";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-300 pt-20 text-slate-900">
      <div className="mx-auto flex max-w-4xl flex-col gap-12 px-6">
        <div className="text-left">
          <h1 className="text-6xl text-slate-700 font-semibold">Taccuino</h1>
        </div>
        <div id="snippets" data-testid="page-content">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <MarkdownCard />
            <div className="rounded-lg bg-slate-600 p-6 text-slate-300">
              <h3 className="mb-2 text-xl font-semibold">Snippet 2</h3>
              <p>Snippet content.</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
