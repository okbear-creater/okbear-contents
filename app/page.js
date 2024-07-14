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
      <Link href="/3-stock-cal">
        <h1>3-stock-cal</h1>
      </Link>
      <Link href="/4-ev-nav">
        <h1>4-ev-nav</h1>
      </Link>
      <Link href="/5-ev-nav-plus">
        <h1>5-ev-nav-plus</h1>
      </Link>
      <Link href="/6-taxi-ui">
        <h1>6-taxi-ui</h1>
      </Link>
      <Link href="/7-Stable-Warp-Fusion">
        <h1>7-Stable-Warp-Fusion</h1>
      </Link>
      <Link href="/8-notion-api-problem">
        <h1>8-notion-api-problem</h1>
      </Link>
      <Link href="/9-brookesia-redesign">
        <h1>9-brookesia-redesign</h1>
      </Link>
    </main>
  );
}
