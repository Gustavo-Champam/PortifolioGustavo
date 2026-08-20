import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("https://portfolio.example/", {
      headers: { accept: "text/html", host: "portfolio.example" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server renders the finished portfolio and social metadata", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>Gustavo Champam \| Backend Developer<\/title>/i);
  assert.match(html, /Backend\./);
  assert.match(html, /Voll Bridget/);
  assert.match(html, /AI Desk/);
  assert.match(html, /https:\/\/wa\.me\/5515996552533/);
  assert.doesNotMatch(html, /ChatterMate/i);
  assert.match(html, /Pulse/);
  assert.match(html, /MediTrack/);
  assert.match(html, /GRAVA\.AI/);
  assert.match(html, /https:\/\/portfolio\.example\/og-systems-v2\.png/);
  assert.doesNotMatch(html, /codex-preview|SkeletonPreview|Your site is taking shape/);
});

test("removes disposable starter assets and keeps portfolio assets", async () => {
  const packageJson = await readFile(new URL("../package.json", import.meta.url), "utf8");
  assert.doesNotMatch(packageJson, /react-loading-skeleton/);

  await assert.rejects(access(new URL("../app/_sites-preview", import.meta.url)));
  await access(new URL("../public/og.png", import.meta.url));
  await access(new URL("../public/og-v2.png", import.meta.url));
  await access(new URL("../public/og-wow.png", import.meta.url));
  await access(new URL("../public/og-systems-v2.png", import.meta.url));
  await access(new URL("../public/gustavo-champam.png", import.meta.url));
  await access(new URL("../public/gustavo-color.jpg", import.meta.url));
  await access(new URL("../public/curriculo-gustavo-champam.pdf", import.meta.url));
  await access(new URL("../public/projects/ai-desk-app.png", import.meta.url));
});
