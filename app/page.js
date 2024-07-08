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
      <Link href="/test">
        <h1>test</h1>
      </Link>
      <Link href="/test2">
        <h1>test2</h1>
      </Link>
    </main>
  );
}
