"use client";

import { MessageThreadFull } from "@/components/tambo/message-thread-full";

export default function ChatPage() {
  return (
    <main className="h-screen">
      {/* Medical disclaimer */}
      <div className="border-b px-6 py-3 text-sm text-gray-600 bg-gray-50">
        ⚠️ Swasthya AI provides general health information only.
        It does not diagnose conditions or replace a doctor.
        If symptoms are severe or persistent, consult a medical professional.
      </div>

      <MessageThreadFull />
    </main>
  );
}
