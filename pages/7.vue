<template>
  <div class="paper min-h-screen px-6 py-8 text-stone-900 sm:py-12">
    <div class="mx-auto max-w-6xl">
      <header class="mb-8 border-b-4 border-amber-800 pb-6">
        <div class="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p class="text-xs font-semibold uppercase tracking-[0.2em] text-amber-800">Option 7</p>
            <h1 class="font-serif text-4xl font-black sm:text-6xl">Paper Review</h1>
            <p class="mt-3 max-w-2xl text-sm text-stone-700 sm:text-base">
              Print style hierarchy with editorial rhythm and warm materials
            </p>
          </div>
          <NuxtLink to="/" class="paper-link">Back to options</NuxtLink>
        </div>
      </header>

      <section class="mb-8 grid gap-6 lg:grid-cols-3">
        <article class="lg:col-span-2">
          <h2 class="font-serif text-2xl font-black">Featured apps</h2>
          <div class="mt-4 grid gap-4 md:grid-cols-2">
            <article v-for="app in featuredApps" :key="app.name" class="paper-card p-4">
              <p class="text-xs font-semibold uppercase tracking-[0.12em] text-amber-700">{{ app.category }}</p>
              <h3 class="mt-1 font-serif text-2xl font-bold">{{ app.name }}</h3>
              <p class="mt-2 text-sm text-stone-700">{{ app.description }}</p>
            </article>
          </div>
        </article>

        <aside class="space-y-4">
          <article class="paper-card p-4">
            <h3 class="font-serif text-xl font-black">Libraries</h3>
            <ul class="mt-3 space-y-2 text-sm">
              <li v-for="framework in featuredFrameworks" :key="framework.name" class="flex items-center justify-between border-b border-stone-300 pb-2">
                <span class="font-semibold">{{ framework.name }}</span>
                <span class="text-xs uppercase tracking-[0.1em] text-stone-500">{{ framework.category }}</span>
              </li>
            </ul>
          </article>

          <article class="paper-card p-4">
            <h3 class="font-serif text-xl font-black">Platforms</h3>
            <div class="mt-3 flex flex-wrap gap-2">
              <span v-for="platform in platformNames" :key="platform" class="rounded-full border border-amber-700/30 bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-900">
                {{ platform }}
              </span>
            </div>
          </article>
        </aside>
      </section>

      <footer class="border-t border-stone-400 pt-4 text-sm text-stone-700">
        © {{ currentYear }} Sergei Saliukov
      </footer>
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
</script>

<style scoped>
.paper {
  background-color: #f4eddc;
  background-image: repeating-linear-gradient(
    to bottom,
    rgb(146 64 14 / 0.04) 0,
    rgb(146 64 14 / 0.04) 1px,
    transparent 1px,
    transparent 34px
  );
}

.paper-card {
  background: rgb(255 251 235 / 0.82);
  border: 1px solid rgb(120 53 15 / 0.22);
  box-shadow: 0 12px 24px rgb(68 64 60 / 0.1);
}

.paper-link {
  border: 1px solid rgb(146 64 14 / 0.35);
  border-radius: 999px;
  color: rgb(120 53 15);
  font-size: 0.875rem;
  font-weight: 700;
  padding: 0.6rem 1.1rem;
  text-decoration: none;
}
</style>
