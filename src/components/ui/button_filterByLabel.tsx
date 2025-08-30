'use client';
import * as React from "react";

import { cn } from "@/lib/utils";
import { Button } from "./button";

function FilterByLabelButton(props: React.ComponentProps<"button"> & {
  label:
  {
    display: string
    isActive?: string
    name: string
  }
}) {
  const { label } = props
  const { display, isActive, name } = label
  return (
    // <Button
    //   data-testid="filter-button" OK
    //   name={label.name + "-label"} OK
    //   size="sm" OK
    //   className={cn(
    //     "p-1 pl-1.5 pr-1.5 bg-slate-600 hover:bg-gray-700 text-xs/70 text-slate-200 shadow-slate-700",
    //     props.className
    //   )}
    //   {...props}
    // >
    //   {label.display}
    // </Button>

    <Button
      data-testid="filter-button"
      name={name + "-label"}
      size="sm"
      className={cn(
        "p-1 pl-1.5 pr-1.5 m-0.5 text-xs/70 text-slate-200 shadow-slate-700",
        name === isActive ? "hover:bg-rose-950" : "hover:bg-gray-700",
        name === isActive ? "bg-rose-900" : "bg-slate-600",
        props.className
      )}
    >
      {display}
    </Button>
  )
}

export {
  FilterByLabelButton
};
