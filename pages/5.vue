<template>
  <div class="min-h-screen bg-zinc-950 px-5 py-7 font-mono text-amber-200 sm:px-8 sm:py-10">
    <div class="mx-auto max-w-6xl">
      <header class="terminal-panel mb-6 p-5 sm:p-7">
        <div class="mb-4 flex items-center gap-2">
          <span class="h-3 w-3 rounded-full bg-red-400"></span>
          <span class="h-3 w-3 rounded-full bg-yellow-300"></span>
          <span class="h-3 w-3 rounded-full bg-green-400"></span>
        </div>
        <div class="flex flex-wrap items-start justify-between gap-4">
          <div>
            <p class="text-xs uppercase tracking-[0.18em] text-amber-400">Option 5</p>
            <h1 class="text-3xl font-bold text-amber-100 sm:text-5xl">Terminal Amber</h1>
            <p class="mt-2 text-sm text-amber-300">
              Structured like a dashboard shell with command line rhythm
            </p>
          </div>
          <NuxtLink to="/" class="terminal-button">Back to options</NuxtLink>
        </div>
      </header>

      <section class="mb-6 grid gap-4 lg:grid-cols-2">
        <article class="terminal-panel p-4">
          <h2 class="mb-3 text-sm uppercase tracking-[0.2em] text-amber-400">apps.list --top 6</h2>
          <ul class="space-y-3 text-sm">
            <li v-for="app in featuredApps" :key="app.name" class="terminal-line">
              <span class="text-amber-100">{{ app.name }}</span>
              <span class="text-amber-400">{{ app.category }}</span>
            </li>
          </ul>
        </article>

        <article class="terminal-panel p-4">
          <h2 class="mb-3 text-sm uppercase tracking-[0.2em] text-amber-400">frameworks.status</h2>
          <ul class="space-y-3 text-sm">
            <li v-for="framework in featuredFrameworks" :key="framework.name" class="terminal-line">
              <span class="text-amber-100">{{ framework.name }}</span>
              <span class="text-amber-400">{{ framework.category }}</span>
            </li>
          </ul>
        </article>
      </section>

      <section class="terminal-panel p-4">
        <h2 class="mb-4 text-sm uppercase tracking-[0.2em] text-amber-400">platforms.supported</h2>
        <div class="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          <span
            v-for="platform in platformNames"
            :key="platform"
            class="rounded border border-amber-500/40 bg-amber-950/30 px-3 py-2 text-sm text-amber-100"
          >
            {{ platform }}
          </span>
        </div>
        <p class="mt-5 text-xs text-amber-500">© {{ currentYear }} Sergei Saliukov</p>
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
.terminal-panel {
  border: 1px solid rgb(245 158 11 / 0.45);
  border-radius: 1rem;
  background: rgb(24 24 27 / 0.85);
  box-shadow: inset 0 0 0 1px rgb(245 158 11 / 0.1), 0 8px 24px rgb(0 0 0 / 0.45);
}

.terminal-button {
  border: 1px solid rgb(245 158 11 / 0.55);
  border-radius: 0.65rem;
  color: #fcd34d;
  font-size: 0.875rem;
  font-weight: 700;
  padding: 0.55rem 0.9rem;
  text-decoration: none;
}

.terminal-line {
  border: 1px solid rgb(245 158 11 / 0.22);
  border-radius: 0.55rem;
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  padding: 0.45rem 0.6rem;
}
</style>
