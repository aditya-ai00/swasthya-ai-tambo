"use client";

import { useState } from "react";

export default function ChatPage() {
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;
    setMessages([...messages, input]);
    setInput("");
  };

  return (
    <main style={{ maxWidth: 600, margin: "40px auto", fontFamily: "sans-serif" }}>
      <h2>Swasthya AI – Rural Health Assistant</h2>

      <div style={{ border: "1px solid #ddd", padding: 16, minHeight: 200 }}>
        {messages.length === 0 && <p>Ask a health-related question…</p>}
        {messages.map((msg, i) => (
          <p key={i}>🧑 {msg}</p>
        ))}
      </div>

      <div style={{ marginTop: 12 }}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your question"
          style={{ width: "75%", padding: 8 }}
        />
        <button onClick={sendMessage} style={{ padding: 8, marginLeft: 8 }}>
          Send
        </button>
      </div>
    </main>
  );
}
