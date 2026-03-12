import Link from "next/link";

// Force this page to be dynamically rendered on every request
export const dynamic = "force-dynamic";

export default function DashboardPage() {
  const now = new Date().toISOString();

  return (
    <div>
      <h1>Dashboard (Dynamic)</h1>
      <p>
        This page is server-rendered on every request (force-dynamic). It is NOT
        a static asset.
      </p>
      <p>
        <strong>Server time:</strong> {now}
      </p>
      <p>Refresh the page to see the timestamp change.</p>
      <Link href="/">Back to Home</Link>
    </div>
  );
}
