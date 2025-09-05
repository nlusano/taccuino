"use client";
import { SearchIcon, XIcon } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export default function Search({ placeholder }: { placeholder?: string }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const [queryText, setQueryText] = useState("");

  function handleSearch(term: string) {
    const params = new URLSearchParams(searchParams);

    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }
    replace(`${pathname}?${params.toString()}`);
  }

  function handleClick() {
    handleSearch("");
    setQueryText("");
  }

  return (
    <div className="relative flex flex-1 flex-shrink-0 mx-5">
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <input
        className="peer block w-default rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
        placeholder={placeholder}
        onChange={(e) => {
          handleSearch(e.target.value);
          setQueryText(e.target.value);
        }}
        // defaultValue={queryText}
        value={searchParams.get("query") || queryText}
      />
      <SearchIcon className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
      <XIcon
        className="absolute left-43 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900"
        onClick={() => handleClick()}
      />
    </div>
  );
}
