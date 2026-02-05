<template>
  <div class="neo-light min-h-screen px-6 py-8 text-stone-700 sm:py-12">
    <div class="mx-auto max-w-6xl">
      <header class="neo-card mb-8 p-6 sm:p-8">
        <div class="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p class="text-xs font-bold uppercase tracking-[0.2em] text-stone-500">Option 2 · Neomorphic</p>
            <h1 class="text-3xl font-black text-stone-700 sm:text-5xl">Neo Clay</h1>
            <p class="mt-2 max-w-2xl text-sm sm:text-base">
              Soft controls and tactile cards with a calm neutral palette
            </p>
          </div>
          <NuxtLink to="/" class="neo-button">Back to options</NuxtLink>
        </div>
      </header>

      <section class="mb-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <article v-for="app in featuredApps" :key="app.name" class="neo-card p-5">
          <p class="text-xs font-bold uppercase tracking-[0.14em] text-stone-500">{{ app.category }}</p>
          <h2 class="mt-1 text-xl font-extrabold text-stone-700">{{ app.name }}</h2>
          <p class="mt-2 text-sm text-stone-600">{{ app.description }}</p>
          <div class="mt-4 flex flex-wrap gap-2">
            <span v-for="tech in app.technologies.slice(0, 3)" :key="`${app.name}-${tech}`" class="neo-pill">
              {{ tech }}
            </span>
          </div>
        </article>
      </section>

      <section class="grid gap-5 lg:grid-cols-[1.4fr_1fr]">
        <article class="neo-card p-6">
          <h3 class="text-xl font-black text-stone-700">Core libraries</h3>
          <ul class="mt-4 space-y-3">
            <li v-for="framework in featuredFrameworks" :key="framework.name" class="neo-inset flex items-center justify-between gap-3 px-4 py-3 text-sm">
              <span class="font-semibold">{{ framework.name }}</span>
              <span class="text-xs uppercase tracking-[0.1em] text-stone-500">{{ framework.category }}</span>
            </li>
          </ul>
        </article>

        <article class="neo-card p-6">
          <h3 class="text-xl font-black text-stone-700">Platforms</h3>
          <div class="mt-4 flex flex-wrap gap-2">
            <span v-for="platform in platformNames" :key="platform" class="neo-pill">
              {{ platform }}
            </span>
          </div>
          <p class="mt-6 text-sm text-stone-600">
            © {{ currentYear }} Sergei Saliukov
          </p>
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
</script>

<style scoped>
.neo-light {
  background: #e7ebe7;
}

.neo-card {
  border-radius: 1.5rem;
  background: #e7ebe7;
  box-shadow: 12px 12px 24px #c8ccc8, -12px -12px 24px #ffffff;
}

.neo-button {
  border: 0;
  border-radius: 999px;
  background: #e7ebe7;
  box-shadow: 8px 8px 18px #c8ccc8, -8px -8px 18px #ffffff;
  color: #444;
  font-size: 0.875rem;
  font-weight: 700;
  padding: 0.6rem 1.15rem;
  text-decoration: none;
}

.neo-button:active {
  box-shadow: inset 6px 6px 12px #c8ccc8, inset -6px -6px 12px #ffffff;
}

.neo-pill {
  border-radius: 999px;
  background: #e7ebe7;
  box-shadow: 5px 5px 10px #cdd1cd, -5px -5px 10px #ffffff;
  color: #555;
  font-size: 0.75rem;
  font-weight: 700;
  padding: 0.35rem 0.75rem;
}

.neo-inset {
  border-radius: 1rem;
  background: #e7ebe7;
  box-shadow: inset 7px 7px 14px #d0d4d0, inset -7px -7px 14px #f8fcf8;
}
</style>
