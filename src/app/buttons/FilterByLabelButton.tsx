import * as React from "react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";


function FilterByLabelButton(
  props: React.ComponentProps<"button"> & {
    label: {
      display: string;
      isActive?: string;
      name: string;
    };
  },
) {
  const { label } = props;
  const { display, isActive, name } = label;
  return (
    <Button
      data-testid="filter-button"
      name={name}
      size="sm"
      className={cn(
        "p-1 pl-1.5 pr-1.5 m-0.5 text-xs/70 text-slate-200 shadow-slate-700",
        name === isActive ? "hover:bg-rose-950" : "hover:bg-gray-700",
        name === isActive ? "bg-rose-900" : "bg-slate-600",
        props.className,
      )}
    >
      {display}
    </Button>
  );
}

export { FilterByLabelButton };
