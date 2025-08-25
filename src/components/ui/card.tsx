import * as React from "react";

import { cn } from "@/lib/utils";
import { Copy } from "lucide-react";
import { Button } from "./button";

function CopyButton(props: React.ComponentProps<"button">) {
  return (
    <Button
      data-testid="copy-button"
      variant="ghost"
      size="icon"
      className={cn(
        "absolute bg-slate-300 rounded-md text-gray-200 border-gray-200 hover:text-slate-500 hover:border-slate-400 hover:shadow-slate-400 hover:shadow",
        props.className
      )}
    >
      <Copy />
    </Button>
  )
}

function CodeSnippet({ className, ...props }: React.ComponentProps<"pre"> & { code: string }) {
  return (
    <pre
      className={cn(
        "p-1.5 rounded-md font-mono text-sm bg-slate-300 text-slate-700",
        className
      )}
      {...props}
    >
      <CardAction className="mr-9">
        <CopyButton />
      </CardAction>
      {JSON.parse(JSON.stringify(props.code))}
    </pre>
  );
}

function Card({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-testid="card"
      data-slot="card"
      className={cn("rounded-lg bg-slate-600 p-6 text-slate-300", className)}
      {...props}
    />
  );
}

function CardHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-testid="card-header"
      data-slot="card-header"
      className={cn(
        "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
        className
      )}
      {...props}
    />
  );
}

function CardTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-testid="card-title"
      data-slot="card-title"
      className={cn("leading-none font-semibold", className)}
      {...props}
    />
  );
}

function CardDescription({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-description"
      className={cn("text-muted-foreground text-sm", className)}
      {...props}
    />
  );
}

function CardAction({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-testid="card-action"
      data-slot="card-action"
      className={cn(
        "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
        className
      )}
      {...props}
    />
  );
}

function CardContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-testid="card-content"
      data-slot="card-content"
      className={cn("", className)} // px-1
      {...props}
    />
  );
}

function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-footer"
      className={cn("flex items-center [.border-t]:pt-6", className)}
      {...props}
    />
  );
}

export {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  CodeSnippet
};

