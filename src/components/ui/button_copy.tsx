'use client';
import * as React from "react";

import { cn, copyTextToClipboard } from "@/lib/utils";
import { Copy } from "lucide-react";
import { Button } from "./button";

function CopyButton(props: React.ComponentProps<"button"> & { code: string }) {

  return (
    <Button
      data-testid="copy-button"
      variant="ghost"
      size="icon"
      className={cn(
        "copy-button absolute bg-slate-300 rounded-md text-slate-400 border-slate-400 hover:text-slate-500 hover:border-slate-400 hover:shadow-slate-400 hover:shadow",
        props.className
      )}
      {...props}
      onClick={() => copyTextToClipboard(props.code)}
    >
      <Copy />
    </Button>
  )
}

export {
  CopyButton
};
