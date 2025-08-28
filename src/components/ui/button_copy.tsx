'use client';
import * as React from "react";

import { cn, copyTextToClipboard } from "@/lib/utils";
import { CheckCheck, Copy } from "lucide-react";
import { Button } from "./button";
import { useState } from "react";

function CopyButton(props: React.ComponentProps<"button"> & { text: string }) {
  const [isCopied, setIsCopied] = useState(false);

  const handleClick = async (text: string) => {
    setIsCopied(true);
    copyTextToClipboard(text)
    setTimeout(() => {
      setIsCopied(false);
    }, 1000);

  }

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
      onClick={() => handleClick(props.code)}
    >
      {isCopied ? <CheckCheck /> : <Copy />}
    </Button>
  )
}

export {
  CopyButton
};
