<template>
  <div class="min-h-screen bg-amber-100 px-5 py-8 text-stone-900 sm:px-6 sm:py-10">
    <div class="mx-auto max-w-6xl">
      <header class="mb-8 rounded-3xl border-4 border-stone-900 bg-lime-300 p-6 shadow-[8px_8px_0_#111] sm:p-8">
        <div class="flex flex-wrap items-center justify-between gap-4">
          <div>
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
          v-for="(app, index) in featuredApps"
          :key="app.name"
          class="block-card p-4"
          :class="tileClass(index)"
        >
          <p class="text-xs font-black uppercase tracking-[0.11em]">{{ app.category }}</p>
          <h2 class="mt-1 text-2xl font-black">
            <a
              v-if="projectUrl(app)"
              :href="projectUrl(app)"
              target="_blank"
              rel="noopener noreferrer"
              class="hover:underline"
            >
              {{ app.name }}
            </a>
            <span v-else>{{ app.name }}</span>
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
          <div class="mt-4 flex flex-wrap gap-2">
            <a
              v-if="app.downloads?.appStore"
              :href="appStoreUrl(app)"
              target="_blank"
              rel="noopener noreferrer"
              class="rounded-full border-2 border-stone-900 bg-white px-3 py-1 text-xs font-black hover:bg-stone-900 hover:text-white"
            >
              App Store
            </a>
            <a
              v-if="app.downloads?.github"
              :href="githubUrl(app)"
              target="_blank"
              rel="noopener noreferrer"
              class="rounded-full border-2 border-stone-900 bg-white px-3 py-1 text-xs font-black hover:bg-stone-900 hover:text-white"
            >
              GitHub
            </a>
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

const featuredApps = apps.slice(0, 6);
const featuredFrameworks = frameworks.slice(0, 6);
const platformNames = platforms.map((platform) => platform.name);

const projectUrl = (app) => {
  if (app.downloads?.github) return `https://github.com/${app.downloads.github}`;
  if (app.downloads?.appStore) return `https://apps.apple.com/app/id${app.downloads.appStore}`;
  if (app.downloads?.altStore) return "altstore://source?url=https://topscrech.dev/alt-store/source.json";
  return "";
};

const appStoreUrl = (app) => `https://apps.apple.com/app/id${app.downloads.appStore}`;
const githubUrl = (app) => `https://github.com/${app.downloads.github}`;
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
</style>
