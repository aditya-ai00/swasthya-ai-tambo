"use client";

import { useState } from "react";

type Message = {
  role: "user" | "assistant";
  content: string;
};

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  async function sendMessage() {
    if (!input.trim()) return;

    const userMessage = input;
    setInput("");

    setMessages((prev) => [
      ...prev,
      { role: "user", content: userMessage },
    ]);

    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: userMessage }),
      });

      const data = await res.json();

      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: data.reply },
      ]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Sorry, something went wrong. Please try again.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div style={{ maxWidth: 800, margin: "40px auto", padding: 20 }}>
      <h1>🩺 Swasthya AI – Rural Health Assistant</h1>

      <p style={{ fontSize: 14, color: "#555" }}>
        This assistant provides general health information only. It does not
        replace a doctor.
      </p>

      <div
        style={{
          border: "1px solid #ddd",
          padding: 16,
          minHeight: 300,
          marginTop: 20,
          background: "#fafafa",
        }}
      >
        {messages.length === 0 && (
          <p style={{ color: "#777" }}>
            Ask a health question to get started…
          </p>
        )}

        {messages.map((msg, i) => (
          <div
            key={i}
            style={{
              marginBottom: 12,
              textAlign: msg.role === "user" ? "right" : "left",
            }}
          >
            <strong>
              {msg.role === "user" ? "You" : "Swasthya AI"}:
            </strong>{" "}
            {msg.content}
          </div>
        ))}

        {loading && <p>Thinking…</p>}
      </div>

      <div style={{ display: "flex", marginTop: 16, gap: 8 }}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your question"
          style={{ flex: 1, padding: 10 }}
          onKeyDown={(e) => {
            if (e.key === "Enter") sendMessage();
          }}
        />
        <button onClick={sendMessage} disabled={loading}>
          Send
        </button>
      </div>
    </div>
  );
}
