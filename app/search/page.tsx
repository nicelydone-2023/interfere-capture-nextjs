"use client";

import { useState } from "react";

const wrap = { fontFamily: "system-ui, sans-serif", maxWidth: 640, margin: "48px auto", padding: "0 16px" } as const;
const btn = { padding: "10px 16px", fontSize: 16, cursor: "pointer" } as const;

const CATALOG: Record<string, string[]> = {
  "wireless keyboard": [
    "Wireless Keyboard Pro",
    "Wireless Keyboard Mini",
    "Wireless Keyboard Ergo",
  ],
};

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<string[] | null>(null);

  function runSearch(e: React.FormEvent) {
    e.preventDefault();
    // Baseline: the search returns matching products.
    const key = query.trim().toLowerCase();
    setResults(CATALOG[key] ?? []);
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
      {results && (
        <ul data-testid="search-results" style={{ marginTop: 16 }}>
          {results.length > 0 ? (
            results.map((p) => <li key={p}>{p}</li>)
          ) : (
            <li>No products found.</li>
          )}
        </ul>
      )}
    </main>
  );
}
