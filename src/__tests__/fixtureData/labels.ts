export const labels = {
  selected: {
    markdown: {
      markdown: { href: "http://localhost/", className: "active" },
      sql: { href: "http://localhost/?label=sql", className: "" },
    },
    none: {
      markdown: { href: "http://localhost/?=&label=markdown" },
      sql: { href: "http://localhost/?=&label=sql" },
    },
    sql: {
      markdown: { href: "http://localhost/?label=markdown", className: "" },
      sql: { href: "http://localhost/", className: "active" },
    },
  },
};

const searchQueries = {
  noMatch: {
    query: "bla",
    totalNrCards: 2,
    totalNrSnippets: 0,
  },
};
