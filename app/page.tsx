import Link from "next/link";

export const metadata = {
  title: "Interfere Capture — Nicelydone",
};

export default function Page() {
  return (
    <main style={{ fontFamily: "system-ui, sans-serif", maxWidth: 640, margin: "48px auto", padding: "0 16px" }}>
      <h1>Interfere Capture</h1>
      <p>Disposable Next.js app for Interfere monitoring evidence.</p>
      <nav style={{ display: "flex", flexDirection: "column", gap: 12, marginTop: 24 }}>
        <Link href="/checkout">&rarr; Checkout</Link>
        <Link href="/reset-password">&rarr; Reset password</Link>
        <Link href="/search">&rarr; Search</Link>
      </nav>
    </main>
  );
}
