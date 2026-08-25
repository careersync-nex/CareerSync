"use client";

import dynamic from "next/dynamic";

// The existing src/App.tsx already owns QueryClientProvider, ThemeProvider,
// TooltipProvider, Toasters, and the full react-router-dom <Routes> tree.
// It is intentionally left untouched (see engineering rules in the PRD:
// "do not unnecessarily rewrite existing working functionality" and
// "preserve existing routes where possible"). We mount it client-only
// (ssr: false) because react-router-dom's BrowserRouter is not SSR-safe.
// Later phases will progressively migrate individual routes to native
// Next.js server routes/pages one at a time.
const ExistingApp = dynamic(() => import("@/App"), { ssr: false });

export default function CatchAllPage() {
  return <ExistingApp />;
}
