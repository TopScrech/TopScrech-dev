<template>
  <div class="min-h-screen bg-amber-100 px-5 py-8 text-stone-900 sm:px-6 sm:py-10">
    <div class="mx-auto max-w-6xl">
      <header class="relative mb-8 rounded-3xl border-4 border-stone-900 bg-lime-300 p-6 shadow-[8px_8px_0_#111] sm:p-8">
        <div class="absolute right-4 top-4 flex gap-2 sm:right-6 sm:top-6">
          <a
            href="https://t.me/TopScrech"
            target="_blank"
            rel="noopener noreferrer"
            class="icon-link"
            aria-label="TopScrech on Telegram"
          >
            <svg
              aria-hidden="true"
              class="h-5 w-5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M11.94 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 11.94 0m4.97 7.22c.1 0 .32.02.46.14.1.08.16.19.17.33.02.09.04.31.02.47-.18 1.9-.96 6.5-1.36 8.63-.17.9-.5 1.2-.82 1.23-.7.06-1.23-.46-1.9-.9-1.06-.69-1.65-1.12-2.68-1.8-1.18-.78-.42-1.21.26-1.91.18-.18 3.25-2.98 3.31-3.23.01-.03.01-.15-.06-.21-.07-.06-.17-.04-.25-.02-.11.02-1.79 1.14-5.06 3.34-.48.33-.91.49-1.3.48-.43-.01-1.25-.24-1.87-.44-.75-.25-1.35-.37-1.3-.79.03-.22.33-.44.89-.66 3.5-1.52 5.83-2.53 7-3.01 3.33-1.39 4.03-1.63 4.49-1.64"
              />
            </svg>
          </a>
          <a
            href="https://github.com/TopScrech"
            target="_blank"
            rel="noopener noreferrer"
            class="icon-link"
            aria-label="TopScrech on GitHub"
          >
            <svg
              aria-hidden="true"
              class="h-5 w-5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.79-.26.79-.58v-2.23c-3.34.73-4.03-1.42-4.03-1.42-.55-1.39-1.33-1.76-1.33-1.76-1.09-.74.08-.73.08-.73 1.21.08 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.49 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23A11.5 11.5 0 0 1 12 5.8c1.02.01 2.05.14 3.01.41 2.29-1.55 3.3-1.23 3.3-1.23.65 1.65.24 2.87.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.62-5.48 5.92.43.37.82 1.1.82 2.22v3.29c0 .32.19.69.8.58A12.01 12.01 0 0 0 24 12c0-6.63-5.37-12-12-12"
              />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/topscrech"
            target="_blank"
            rel="noopener noreferrer"
            class="icon-link"
            aria-label="Sergei Saliukov on LinkedIn"
          >
            <svg
              aria-hidden="true"
              class="h-5 w-5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V8.99h3.41v1.57h.05c.47-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12m1.78 13.02H3.56V8.99h3.56zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0"
              />
            </svg>
          </a>
        </div>
        <div class="flex flex-wrap items-center justify-between gap-4">
          <div class="pt-12 sm:pt-0 sm:pr-36">
            <p class="text-xs font-black tracking-[0.2em] text-stone-800">TopScrech</p>
            <h1 class="text-4xl font-black tracking-tight sm:text-6xl">Sergei Saliukov</h1>
            <p class="mt-2 max-w-2xl text-sm font-semibold sm:text-base">
              iOS developer building open-source apps, libraries and more!
            </p>
          </div>
        </div>
      </header>

      <section class="mb-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        <article
          v-for="(app, index) in apps"
          :key="app.name"
          class="block-card relative p-4"
          :class="tileClass(index)"
        >
          <div
            v-if="app.downloads?.web || app.downloads?.appStore || app.downloads?.github"
            class="absolute right-4 top-4 flex gap-2"
          >
            <a
              v-if="app.downloads?.web"
              :href="webUrl(app)"
              target="_blank"
              rel="noopener noreferrer"
              class="icon-link"
              :aria-label="`${app.name} website`"
            >
              <svg
                aria-hidden="true"
                class="h-5 w-5"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                viewBox="0 0 24 24"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M2 12h20M12 2a15.3 15.3 0 0 1 0 20M12 2a15.3 15.3 0 0 0 0 20" />
              </svg>
            </a>
            <a
              v-if="app.downloads?.github"
              :href="githubUrl(app)"
              target="_blank"
              rel="noopener noreferrer"
              class="icon-link"
              :aria-label="`${app.name} on GitHub`"
            >
              <svg
                aria-hidden="true"
                class="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.79-.26.79-.58v-2.23c-3.34.73-4.03-1.42-4.03-1.42-.55-1.39-1.33-1.76-1.33-1.76-1.09-.74.08-.73.08-.73 1.21.08 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.49 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23A11.5 11.5 0 0 1 12 5.8c1.02.01 2.05.14 3.01.41 2.29-1.55 3.3-1.23 3.3-1.23.65 1.65.24 2.87.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.62-5.48 5.92.43.37.82 1.1.82 2.22v3.29c0 .32.19.69.8.58A12.01 12.01 0 0 0 24 12c0-6.63-5.37-12-12-12"
                />
              </svg>
            </a>
            <a
              v-if="app.downloads?.appStore"
              :href="appStoreUrl(app)"
              target="_blank"
              rel="noopener noreferrer"
              class="icon-link"
              :aria-label="`${app.name} on the App Store`"
            >
              <svg
                aria-hidden="true"
                class="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M16.6 12.8c0-2.39 1.96-3.54 2.05-3.59-1.11-1.63-2.84-1.85-3.45-1.88-1.47-.15-2.87.87-3.62.87-.74 0-1.9-.85-3.12-.83-1.61.02-3.09.94-3.92 2.38-1.67 2.9-.43 7.19 1.2 9.54.8 1.15 1.75 2.44 3 2.39 1.2-.05 1.66-.78 3.11-.78 1.46 0 1.87.78 3.14.75 1.3-.02 2.12-1.17 2.91-2.32.92-1.34 1.3-2.64 1.32-2.71-.03-.01-2.59-.99-2.62-3.82M14.24 5.78c.66-.8 1.11-1.91.99-3.02-.96.04-2.12.64-2.81 1.44-.62.72-1.16 1.85-1.01 2.94 1.06.08 2.16-.54 2.83-1.36"
                />
              </svg>
            </a>
          </div>
          <p class="pr-36 text-xs font-black uppercase tracking-[0.11em]">{{ app.category }}</p>
          <h2 class="mt-1 pr-36 text-2xl font-black">
            {{ app.name }}
          </h2>
          <p class="mt-2 text-sm font-medium">{{ app.description }}</p>
          <div class="mt-3 flex flex-wrap gap-2">
            <span
              v-for="tech in app.technologies.slice(0, 3)"
              :key="`${app.name}-${tech}`"
              class="rounded-full border-2 border-stone-900 bg-white px-2 py-1 text-xs font-black"
            >
              {{ tech }}
            </span>
          </div>
        </article>
      </section>

      <section class="grid gap-4 lg:grid-cols-2">
        <article class="block-card bg-rose-300 p-5">
          <h3 class="text-2xl font-black">Libraries</h3>
          <ul class="mt-3 grid gap-2 text-sm font-semibold">
            <li
              v-for="framework in featuredFrameworks"
              :key="framework.name"
              class="rounded-xl border-2 border-stone-900 bg-rose-100 px-3 py-2"
            >
              <a
                :href="frameworkUrl(framework)"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-block hover:underline"
              >
                {{ framework.name }} · {{ framework.category }}
              </a>
            </li>
          </ul>
        </article>

        <article class="block-card bg-orange-300 p-5">
          <h3 class="text-2xl font-black">Platforms</h3>
          <div class="mt-3 flex flex-wrap gap-2">
            <span
              v-for="platform in platformNames"
              :key="platform"
              class="rounded-full border-2 border-stone-900 bg-yellow-100 px-3 py-1 text-sm font-black"
            >
              {{ platform }}
            </span>
          </div>
        </article>
      </section>
    </div>
  </div>
</template>

<script setup>
import { apps } from "./data/apps.js";
import { frameworks } from "./data/frameworks.js";
import { platforms } from "./data/platforms.js";
import { currentYear } from "./data/currentYear.js";

const featuredFrameworks = frameworks.slice(0, 6);
const platformNames = platforms.map((platform) => platform.name);

const appStoreUrl = (app) => `https://apps.apple.com/app/id${app.downloads.appStore}`;
const githubUrl = (app) => `https://github.com/${app.downloads.github}`;
const webUrl = (app) => app.downloads.web;
const frameworkUrl = (framework) => `https://github.com/${framework.link}`;

const tileClass = (index) => {
  const classes = [
    "bg-emerald-300",
    "bg-amber-300",
    "bg-rose-300",
    "bg-lime-200",
    "bg-orange-200",
    "bg-red-300"
  ];
  return classes[index % classes.length];
};
</script>

<style scoped>
.block-card {
  border: 4px solid #111;
  border-radius: 1.4rem;
  box-shadow: 8px 8px 0 #111;
  transition: transform 180ms ease;
}

.block-card:hover {
  transform: translate(-2px, -2px);
}

.icon-link {
  align-items: center;
  background: #fff;
  border: 2px solid #111;
  border-radius: 9999px;
  color: #111;
  display: inline-flex;
  height: 2.25rem;
  justify-content: center;
  transition: background 180ms ease, color 180ms ease, transform 180ms ease;
  width: 2.25rem;
}

.icon-link:hover {
  background: #111;
  color: #fff;
  transform: translateY(-1px);
}
</style>
