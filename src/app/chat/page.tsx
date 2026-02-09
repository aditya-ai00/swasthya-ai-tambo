"use client";

import {
  Thread,
  ThreadContent,
  ThreadMessages,
  ThreadInput,
} from "@tambo-ai/react";

export default function ChatPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="w-full max-w-2xl bg-white rounded-xl shadow-lg p-6">
        <h1 className="text-2xl font-bold mb-2">Swasthya AI</h1>
        <p className="text-sm text-gray-600 mb-4">
          AI-powered rural health assistant. This does not replace a doctor.
        </p>

        <div className="border rounded-lg p-4">
          <Thread>
            <ThreadContent>
              <ThreadMessages />
              <ThreadInput />
            </ThreadContent>
          </Thread>
          
        </div>
      </div>
    </div>
  );
}
