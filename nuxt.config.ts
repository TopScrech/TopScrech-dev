// https://nuxt.com/docs/api/configuration/nuxt-config

import tailwindcss from "@tailwindcss/vite";
import type { Plugin } from "vite";

// Polyfill for Bun: some versions of Bun expose global `crypto` without a `hash` function.
// Vite's Vue plugin may call `crypto.hash` when running under Bun. Provide a compatible implementation.
function bunCryptoHashPolyfill(): Plugin {
  return {
    name: "bun-crypto-hash-polyfill",
    enforce: "pre",
    async configResolved() {
      try {
        const isBun = typeof process !== "undefined" && (process as any).versions?.bun;
        if (!isBun) return;

        const globalCrypto: any = (globalThis as any).crypto ?? ((globalThis as any).crypto = {});
        if (typeof globalCrypto.hash === "function") return;

        const { createHash } = await import("node:crypto");
        globalCrypto.hash = (input: any, algorithm = "sha256") => {
          const hasher = createHash(algorithm);

          const updateHasher = (data: any) => {
            if (typeof data === "string" || data instanceof Uint8Array) {
              hasher.update(data);
            } else if (ArrayBuffer.isView(data)) {
              hasher.update(Buffer.from(data.buffer, data.byteOffset, data.byteLength));
            } else if (data instanceof ArrayBuffer) {
              hasher.update(Buffer.from(data));
            } else {
              hasher.update(String(data));
            }
          };

          updateHasher(input);
          return hasher.digest("hex");
        };
      } catch {
        // Best-effort polyfill; ignore if not available
      }
    },
  };
}

export default defineNuxtConfig({
  ssr: true,
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  nitro: {
    preset: "bun",
    compressPublicAssets: true,
  },
  vite: {
    plugins: [bunCryptoHashPolyfill(), tailwindcss()],
  },
  css: ["~/assets/css/main.css"],
  builder: "vite",
  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      meta: [
        { name: 'theme-color', content: '#1e1b4b' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap' }
      ]
    }
  },
  routeRules: {
    "/icons/**": {
      headers: {
        "cache-control": "public, max-age=31536000, immutable"
      }
    },
    "/**/*.webp": {
      headers: {
        "cache-control": "public, max-age=31536000, immutable"
      }
    },
    "/**/*.svg": {
      headers: {
        "cache-control": "public, max-age=31536000, immutable"
      }
    },
    "/**/*.{png,jpg,jpeg,gif,ico}": {
      headers: {
        "cache-control": "public, max-age=31536000, immutable"
      }
    },
    "/**/*.{pdf,ipa}": {
      headers: {
        "cache-control": "public, max-age=31536000, immutable"
      }
    }
  }
});
