'use client';
import * as React from "react";

import { cn } from "@/lib/utils";
import { Button } from "./button";

function FilterByLabelButton(props: React.ComponentProps<"button"> & {
  label:
  {
    display: string,
    name: string
  }
}) {
  const { label } = props
  const toggleSelected = () => {
    console.log("click")
  }
  return (
    <Button
      data-testid="filter-button"
      name={label.name + "-label"}
      size="sm"
      className={cn(
        "p-1 pl-1.5 pr-1.5 bg-slate-600 hover:bg-gray-700 text-xs/70 text-slate-200 shadow-slate-700",
        props.className
      )}
      {...props}
      onClick={() => toggleSelected()}
    >
      {label.display}
    </Button>
  )
}

export {
  FilterByLabelButton
};
