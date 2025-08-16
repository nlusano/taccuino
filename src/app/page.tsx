import MarkdownCard from "./cards/markdown";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-300 pt-20 text-slate-900">
      <section className="mx-auto flex max-w-4xl flex-col gap-12 px-6">
        <article className="text-left">
          <h1 className="text-6xl text-slate-700 font-semibold">Taccuino</h1>
        </article>
        <article id="snippets">
          <section className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <MarkdownCard />
            <article className="rounded-lg bg-slate-600 p-6 text-slate-300">
              <h3 className="mb-2 text-xl font-semibold">Snippet 2</h3>
              <p>Snippet content.</p>
            </article>
          </section>
        </article>
      </section>
    </main>
  );
}
