"use client";

import { useState } from "react";

const wrap = { fontFamily: "system-ui, sans-serif", maxWidth: 640, margin: "48px auto", padding: "0 16px" } as const;
const btn = { padding: "10px 16px", fontSize: 16, cursor: "pointer" } as const;

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const [error, setError] = useState<string | null>(null);

  function runSearch(e: React.FormEvent) {
    e.preventDefault();
    // Controlled failure: the search backend returns an error.
    setError("Search is temporarily unavailable. Please try again.");
    setTimeout(() => {
      throw new Error("CAPTURE_SEARCH_RESPONSE_ERROR");
    }, 0);
  }

  return (
    <main style={wrap}>
      <h1>Search</h1>
      <form onSubmit={runSearch} style={{ display: "flex", gap: 8 }}>
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search products, e.g. wireless keyboard"
          style={{ flex: 1, padding: "10px 12px", fontSize: 16 }}
          aria-label="Search products"
        />
        <button style={btn} type="submit">
          Search
        </button>
      </form>
      {error && (
        <p data-testid="search-error" style={{ marginTop: 16, fontWeight: 600, color: "#b91c1c" }}>
          {error}
        </p>
      )}
    </main>
  );
}
