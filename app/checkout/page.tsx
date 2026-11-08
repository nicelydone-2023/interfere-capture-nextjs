"use client";

import { useState } from "react";

const wrap = { fontFamily: "system-ui, sans-serif", maxWidth: 640, margin: "48px auto", padding: "0 16px" } as const;
const btn = { padding: "10px 16px", fontSize: 16, cursor: "pointer" } as const;

export default function CheckoutPage() {
  const [result, setResult] = useState<string | null>(null);

  function completePurchase() {
    // Baseline: the purchase succeeds.
    setResult("Order confirmed: ND-1042");
  }

  return (
    <main style={wrap}>
      <h1>Checkout</h1>
      <p>Review your order and complete the purchase.</p>
      <button style={btn} onClick={completePurchase}>
        Complete purchase
      </button>
      {result && (
        <p data-testid="checkout-result" style={{ marginTop: 16, fontWeight: 600 }}>
          {result}
        </p>
      )}
    </main>
  );
}
