"use client";

import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <Link href="/1-JTBC">
        <h1>1-JTBC</h1>
      </Link>
      <Link href="/2-suffix-converter">
        <h1>2-suffix-converter</h1>
      </Link>
    </main>
  );
}
