<template>
  <div
    class="min-h-screen bg-black text-white overflow-hidden relative"
  >
    <!-- Background gradient -->
    <div
      class="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900 opacity-50"
    ></div>

    <!-- Subtle grid pattern -->
    <div
      class="absolute inset-0 opacity-5"
      style="
        background-image: radial-gradient(
          circle at 1px 1px,
          rgba(255, 255, 255, 0.3) 1px,
          transparent 0
        );
        background-size: 20px 20px;
      "
    ></div>

    <div class="relative z-10">
      <!-- Header -->
      <header class="pt-8 pb-16 px-6 sm:px-8 lg:px-12">
        <div class="max-w-6xl mx-auto">
          <h1
            class="text-sm font-medium text-gray-400 tracking-wider uppercase"
          >
            Support
          </h1>
        </div>
      </header>

      <!-- Main content -->
      <main class="px-6 sm:px-8 lg:px-12 pb-20">
        <div class="max-w-4xl mx-auto">
          <!-- Hero section -->
          <div class="text-center mb-20">
              <h2
                class="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
              >
                How can I help you?
              </h2>
            <p
              class="text-xl sm:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
            >
              Get personalized support and answers to your questions
            </p>
          </div>

          <!-- Profile section -->
          <div
            class="flex flex-col items-center justify-center mb-16 space-y-8"
          >
            <!-- Profile image -->
            <div class="relative group">
              <div
                class="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 rounded-full overflow-hidden ring-1 ring-white/10 backdrop-blur-sm"
              >
                <img
                  src="/sergei.webp"
                  alt="Profile"
                  class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>

            <!-- Name and title -->
            <div class="text-center space-y-2">
              <h3
                class="text-2xl sm:text-3xl font-semibold text-white"
              >
                  Sergei Saliukov
              </h3>
              <p class="text-lg text-gray-400">iOS Developer</p>
            </div>
          </div>

          <!-- Contact options -->
          <div class="max-w-2xl mx-auto">
            <div
              class="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8"
            >
              <!-- Email contact -->
              <a
                href="mailto:your.email@example.com"
                class="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 p-8 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20 ring-1 ring-white/10 hover:ring-blue-500/30"
              >
                <div
                  class="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                ></div>
                <div class="relative z-10">
                  <div
                    class="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center mb-4 group-hover:bg-blue-500/30 transition-colors duration-300"
                  >
                    <svg
                      class="w-6 h-6 text-blue-400"
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
                  </div>
                  <h5
                    class="text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300"
                  >
                    Email Support
                  </h5>
                </div>
              </a>

              <!-- Telegram contact -->
              <a
                href="https://t.me/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                class="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 p-8 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20 ring-1 ring-white/10 hover:ring-cyan-500/30"
              >
                <div
                  class="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                ></div>
                <div class="relative z-10">
                  <div
                    class="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center mb-4 group-hover:bg-cyan-500/30 transition-colors duration-300"
                  >
                    <svg
                      class="w-6 h-6 text-cyan-400"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"
                      />
                    </svg>
                  </div>
                  <h5
                    class="text-xl font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300"
                  >
                    Telegram Chat
                  </h5>
                </div>
              </a>
            </div>
          </div>

          <!-- Additional info -->
          <div class="text-center mt-16 max-w-2xl mx-auto">
            <div
              class="p-6 rounded-2xl bg-gradient-to-r from-gray-900/50 to-gray-800/50 backdrop-blur-sm ring-1 ring-white/10"
            >
              <p class="text-gray-400 text-sm leading-relaxed">
                I typically respond within a few hours
                <br>
                For urgent matters, Telegram is the fastest way to reach me
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup>
// You can add any reactive data or composables here if needed
definePageMeta({
  layout: false, // If you want to use a custom layout
});

// SEO
useHead({
  title: "Support - Get Help",
  meta: [
    {
      name: "description",
      content: "Get personalized support and answers to your questions.",
    },
  ],
});
</script>

<style scoped>
/* Custom animations for enhanced visual appeal */
@keyframes float {
  0%,
  100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-5px);
  }
}

.group:hover img {
  animation: float 3s ease-in-out infinite;
}
</style>
