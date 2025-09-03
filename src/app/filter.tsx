"use client";
import { FilterByLabelButton } from "@/components/ui/button_filterByLabel";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function Filter() {
  const params = useSearchParams();
  const active = params.get("label") || "";

  const labels = [
    {
      display: "markdown",
      name: "markdown",
    },
    {
      display: "SQL",
      name: "sql",
    },
  ];

  const toggleQuery = (key: string, value: string) => {
    const query = Object.fromEntries(params);

    if (query[key] === value) {
      delete query[key];
    } else {
      query[key] = value;
    }

    return query;
  };

  return (
    <div className="m-5 bg-slate-100 text-right">
      {labels.map((label) => (
        <Link
          key={label.name}
          href={{
            pathname: "/",
            query: toggleQuery("label", label.name),
          }}
          data-testid="filter-nav-link"
          className={label.name === active ? "active" : ""}
        >
          <FilterByLabelButton
            label={{
              display: label.display,
              isActive: active,
              name: label.name,
            }}
          />
        </Link>
      ))}
    </div>
  );
}
