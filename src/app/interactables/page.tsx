"use client";

import { ThreadContentMessages } from "@/components/tambo/thread-content";
import { MessageThreadFull } from "@/components/tambo/message-thread-full";
import { tools } from "@/lib/tambo";

export default function InteractablesPage() {
  return (
    <main className="h-screen w-full">
      <MessageThreadFull />
    </main>
  );
}
