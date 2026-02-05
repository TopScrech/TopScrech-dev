<template>
  <div class="min-h-screen bg-stone-950 text-stone-100">
    <div class="mx-auto max-w-6xl px-6 py-10 sm:py-14">
      <header class="mb-10 rounded-3xl border border-stone-700 bg-stone-900 p-6 sm:p-10">
        <p class="mb-3 inline-flex rounded-full border border-orange-300/40 bg-orange-300/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-orange-200">
          Redesign Lab
        </p>
        <h1 class="text-3xl font-black tracking-tight text-stone-50 sm:text-5xl">
          5 website redesign options
        </h1>
        <p class="mt-4 max-w-3xl text-sm leading-relaxed text-stone-300 sm:text-base">
          Open each route to review layout, color, and typography directions
          Routes are hosted at <code>/2</code>, <code>/3</code>, <code>/5</code>, <code>/7</code>, and <code>/8</code>
        </p>
      </header>

      <main class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <NuxtLink
          v-for="variant in redesigns"
          :key="variant.id"
          :to="variant.path"
          class="group rounded-2xl border border-stone-700 bg-stone-900 p-5 transition-all duration-200 hover:-translate-y-1 hover:border-orange-300/60 hover:bg-stone-800"
        >
          <p class="text-xs font-semibold uppercase tracking-[0.18em] text-stone-400">
            Option {{ variant.id }}
          </p>
          <h2 class="mt-2 text-xl font-bold text-stone-50">
            {{ variant.name }}
          </h2>
          <p class="mt-2 text-sm text-stone-300">
            {{ variant.style }}
          </p>
          <p class="mt-2 text-sm text-orange-200">
            {{ variant.accent }}
          </p>
          <p class="mt-5 text-xs text-stone-400">
            {{ variant.note }}
          </p>
          <span class="mt-4 inline-flex text-sm font-semibold text-orange-200 transition-colors group-hover:text-orange-100">
            Open {{ variant.path }}
          </span>
        </NuxtLink>
      </main>
    </div>
  </div>
</template>

<script setup>
import { redesigns } from "./data/redesigns.js";
</script>
