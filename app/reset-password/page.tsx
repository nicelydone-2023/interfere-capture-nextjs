"use client";

import { useState } from "react";

const wrap = { fontFamily: "system-ui, sans-serif", maxWidth: 640, margin: "48px auto", padding: "0 16px" } as const;
const btn = { padding: "10px 16px", fontSize: 16, cursor: "pointer" } as const;

export default function ResetPasswordPage() {
  const [result, setResult] = useState<string | null>(null);

  function resetPassword() {
    // Controlled failure: the reset token is expired.
    setResult("This password reset link is invalid or has expired.");
    setTimeout(() => {
      throw new Error("CAPTURE_EXPIRED_RESET_TOKEN");
    }, 0);
  }

  return (
    <main style={wrap}>
      <h1>Reset password</h1>
      <p>Set a new password for your account.</p>
      <button style={btn} onClick={resetPassword}>
        Reset password
      </button>
      {result && (
        <p data-testid="reset-result" style={{ marginTop: 16, fontWeight: 600, color: "#b91c1c" }}>
          {result}
        </p>
      )}
    </main>
  );
}
