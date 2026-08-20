import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

test("gera uma saída válida para o Build Output API da Vercel", async () => {
  const config = JSON.parse(
    await readFile(new URL("../.vercel/output/config.json", import.meta.url), "utf8"),
  );

  assert.equal(config.version, 3);
  assert.equal(config.framework?.name, "nitro");
  assert.ok(
    config.routes.some((route) => route.src === "/(.*)" && route.dest === "/__server"),
  );

  const serverEntry = new URL(
    "../.vercel/output/functions/__server.func/index.mjs",
    import.meta.url,
  );

  await access(serverEntry);
  await access(new URL("../.vercel/output/static/_next/static", import.meta.url));

  const { default: handler } = await import(serverEntry.href);
  const response = await handler.fetch(new Request("https://portfolio.local/"), {
    waitUntil() {},
  });
  const html = await response.text();

  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html/);
  assert.match(html, /Gustavo/);
});
