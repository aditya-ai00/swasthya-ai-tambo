"use client";

import {
  Thread,
  ThreadContent,
  ThreadMessages,
  ThreadInput,
} from "@tambo-ai/react";

export default function InteractablesPage() {
  return (
    <Thread>
      <ThreadContent>
        <ThreadMessages />
        <ThreadInput />
      </ThreadContent>
    </Thread>
  );
}
