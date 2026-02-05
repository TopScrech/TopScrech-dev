<template>
  <div class="min-h-screen bg-neutral-100 px-4 py-6 text-black sm:px-8 sm:py-10">
    <div class="mx-auto max-w-6xl">
      <header class="brutal mb-6 bg-white p-6">
        <div class="flex flex-wrap items-start justify-between gap-4">
          <div>
            <p class="text-xs font-black uppercase tracking-[0.2em] text-red-700">Option 3</p>
            <h1 class="text-4xl font-black uppercase leading-none sm:text-6xl">Mono Brutal</h1>
            <p class="mt-3 max-w-2xl text-sm font-semibold uppercase tracking-[0.08em]">
              Raw blocks strong contrast and no decorative blur
            </p>
          </div>
          <NuxtLink to="/" class="brutal-link">Back to options</NuxtLink>
        </div>
      </header>

      <section class="mb-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        <article v-for="app in featuredApps" :key="app.name" class="brutal bg-white p-4">
          <p class="text-xs font-black uppercase text-red-700">{{ app.category }}</p>
          <h2 class="mt-1 text-2xl font-black uppercase">{{ app.name }}</h2>
          <p class="mt-2 text-sm font-medium">{{ app.description }}</p>
          <div class="mt-4 flex flex-wrap gap-2">
            <span
              v-for="tech in app.technologies.slice(0, 3)"
              :key="`${app.name}-${tech}`"
              class="border-2 border-black bg-red-100 px-2 py-1 text-xs font-black uppercase"
            >
              {{ tech }}
            </span>
          </div>
        </article>
      </section>

      <section class="grid gap-4 lg:grid-cols-2">
        <article class="brutal bg-white p-5">
          <h3 class="text-2xl font-black uppercase">Libraries</h3>
          <ul class="mt-3 space-y-2 text-sm font-semibold">
            <li v-for="framework in featuredFrameworks" :key="framework.name" class="flex justify-between gap-3 border-2 border-black bg-neutral-100 px-3 py-2">
              <span class="font-black uppercase">{{ framework.name }}</span>
              <span>{{ framework.category }}</span>
            </li>
          </ul>
        </article>
        <article class="brutal bg-white p-5">
          <h3 class="text-2xl font-black uppercase">Platforms</h3>
          <div class="mt-4 grid grid-cols-2 gap-2 text-sm font-black uppercase">
            <span v-for="platform in platformNames" :key="platform" class="border-2 border-black bg-red-50 px-3 py-2">
              {{ platform }}
            </span>
          </div>
          <p class="mt-5 text-sm font-semibold">© {{ currentYear }} Sergei Saliukov</p>
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
.brutal {
  border: 3px solid #000;
  box-shadow: 8px 8px 0 #000;
}

.brutal-link {
  border: 3px solid #000;
  background: #fecaca;
  box-shadow: 5px 5px 0 #000;
  color: #111;
  font-weight: 900;
  padding: 0.6rem 1rem;
  text-decoration: none;
  text-transform: uppercase;
}
</style>
