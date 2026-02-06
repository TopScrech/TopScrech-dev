<template>
  <div class="min-h-screen bg-amber-50 px-5 py-8 text-stone-900 sm:px-6 sm:py-10">
    <div class="mx-auto max-w-6xl space-y-6">
      <header class="block-card bg-lime-300 p-6 sm:p-8">
        <div class="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p class="text-xs font-black uppercase tracking-[0.2em] text-stone-800">TopScrech</p>
            <h1 class="text-4xl font-black tracking-tight sm:text-5xl">App Support</h1>
            <p class="mt-2 max-w-3xl text-sm font-semibold sm:text-base">
              Direct support for my iOS apps, libraries, and AltStore releases
            </p>
          </div>
          <NuxtLink
            to="/"
            class="rounded-full border-4 border-stone-900 bg-amber-100 px-4 py-2 text-sm font-black shadow-[4px_4px_0_#111]"
          >
            Back to Portfolio
          </NuxtLink>
        </div>
      </header>

      <section class="grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
        <article class="block-card bg-yellow-200 p-6">
          <h2 class="text-3xl font-black sm:text-4xl">How can I help you</h2>
          <p class="mt-3 max-w-2xl text-sm font-semibold sm:text-base">
            Ask about app behavior, report bugs, request fixes, or get help installing and updating builds
          </p>
          <div class="mt-5 inline-flex items-center rounded-full border-2 border-stone-900 bg-emerald-200 px-4 py-2 text-xs font-black uppercase tracking-[0.14em]">
            Typical response time: a few hours on business days
          </div>
        </article>

        <article class="block-card bg-orange-200 p-6">
          <div class="flex flex-col items-center text-center">
            <div class="h-32 w-32 overflow-hidden rounded-full border-4 border-stone-900 bg-white shadow-[4px_4px_0_#111]">
              <img
                src="/sergei.webp"
                alt="Sergei Saliukov"
                class="h-full w-full object-cover"
              >
            </div>
            <h3 class="mt-4 text-2xl font-black">Sergei Saliukov</h3>
            <p class="text-sm font-semibold uppercase tracking-[0.14em]">iOS Developer</p>
          </div>
        </article>
      </section>

      <section class="grid gap-4 md:grid-cols-2">
        <a
          href="mailto:topscrech@icloud.com"
          class="block-card bg-sky-200 p-6 transition-transform duration-150 hover:-translate-y-0.5"
        >
          <div class="flex items-center gap-3">
            <span class="inline-flex h-11 w-11 items-center justify-center rounded-xl border-2 border-stone-900 bg-white">
              <svg
                class="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </span>
            <div>
              <h4 class="text-xl font-black">Email</h4>
              <p class="text-sm font-semibold">topscrech@icloud.com</p>
            </div>
          </div>
          <p class="mt-4 text-sm font-semibold">
            Best for detailed bug reports, account support, and project discussions
          </p>
        </a>

        <a
          href="https://t.me/TopScrech"
          target="_blank"
          rel="noopener noreferrer"
          class="block-card bg-cyan-200 p-6 transition-transform duration-150 hover:-translate-y-0.5"
        >
          <div class="flex items-center gap-3">
            <span class="inline-flex h-11 w-11 items-center justify-center rounded-xl border-2 border-stone-900 bg-white">
              <svg
                class="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"
                />
              </svg>
            </span>
            <div>
              <h4 class="text-xl font-black">Telegram</h4>
              <p class="text-sm font-semibold">@TopScrech</p>
            </div>
          </div>
          <p class="mt-4 text-sm font-semibold">
            Fastest way to reach me for urgent updates and quick support questions
          </p>
        </a>
      </section>

      <footer class="block-card bg-orange-300 p-5 text-center">
        <p class="text-sm font-black">
          © {{ currentYear }} Sergei Saliukov · Here to help with your iOS projects
        </p>
      </footer>
    </div>
  </div>
</template>

<script setup>
const currentYear = new Date().getFullYear();

definePageMeta({
  layout: false
});

useHead({
  title: "Support - Sergei Saliukov",
  meta: [
    {
      name: "description",
      content: "Get personalized support and answers to your questions about iOS development and my apps"
    }
  ]
});
</script>

<style scoped>
.block-card {
  border: 4px solid #111;
  border-radius: 1.4rem;
  box-shadow: 8px 8px 0 #111;
}
</style>
