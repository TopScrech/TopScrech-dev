<template>
  <div class="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 relative overflow-hidden">
    <!-- Background decorative elements -->
    <div class="absolute inset-0 overflow-hidden">
      <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
      <div class="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
      <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"></div>
    </div>

    <div class="relative z-10">
      <!-- Header -->
      <header class="sticky top-0 z-40 container mx-auto px-6 py-6">
        <nav class="glass rounded-2xl p-4 border border-white/20 shadow-2xl flex items-center justify-between">
          <h1 class="text-2xl font-bold text-white">Support</h1>
          <a
            href="/"
            class="text-white/80 hover:text-white transition-all duration-200 hover:bg-white/10 px-4 py-2 rounded-lg"
          >
            ← Back to Portfolio
          </a>
        </nav>
      </header>

      <!-- Main content -->
      <main class="container mx-auto px-6 py-16">
        <!-- Hero section -->
        <section class="text-center mb-20">
          <div class="max-w-4xl mx-auto backdrop-blur-xl bg-white/5 rounded-3xl p-12 border border-white/20 shadow-2xl">
            <h2 class="text-5xl md:text-6xl font-semibold tracking-tight text-white mb-6 leading-tight">
              How can I help you?
            </h2>
            <p class="text-xl text-white/80 leading-relaxed">
              Get personalized support and answers to your questions about my apps and services
            </p>
          </div>
        </section>

        <!-- Profile section -->
        <section class="flex flex-col items-center justify-center mb-16">
          <div class="backdrop-blur-xl bg-white/10 rounded-3xl p-12 border border-white/20 shadow-2xl">
            <!-- Profile image -->
            <div class="flex justify-center mb-8">
              <div class="relative group">
                <div class="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 rounded-full overflow-hidden backdrop-blur-sm bg-white/10 border border-white/20 shadow-2xl">
                  <img
                    src="/sergei.webp"
                    alt="Sergei Saliukov"
                    class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </div>
            </div>

            <!-- Name and title -->
            <div class="text-center space-y-2">
              <h3 class="text-2xl sm:text-3xl font-semibold text-white">
                Sergei Saliukov
              </h3>
              <p class="text-lg text-white/70">iOS Developer</p>
            </div>
          </div>
        </section>

        <!-- Contact options -->
        <section class="max-w-4xl mx-auto">
          <div class="text-center mb-12">
            <h3 class="text-3xl font-semibold tracking-tight text-white mb-4">
              Get in Touch
            </h3>
            <div class="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto rounded-full"></div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <!-- Email contact -->
            <a
              href="mailto:topscrech@icloud.com"
              class="group backdrop-blur-xl bg-white/10 rounded-2xl shadow-2xl hover:shadow-3xl hover:bg-white/15 transition-all duration-500 p-8 border border-white/20 hover:scale-105"
            >
              <div class="flex items-center mb-6">
                <div class="w-16 h-16 rounded-2xl flex items-center justify-center mr-4 shadow-lg group-hover:scale-110 transition-transform duration-300 bg-gradient-to-br from-blue-500/80 to-blue-500/40">
                  <svg
                    class="w-8 h-8 text-white"
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
                <div>
                  <h4 class="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors duration-300">
                    Email
                  </h4>
                  <p class="text-white/70">topscrech@icloud.com</p>
                </div>
              </div>
              <p class="text-white/80">
                Perfect for detailed questions, bug reports, or business inquiries. 
                I'll get back to you within 24 hours.
              </p>
            </a>

            <!-- Telegram contact -->
            <a
              href="https://t.me/TopScrech"
              target="_blank"
              rel="noopener noreferrer"
              class="group backdrop-blur-xl bg-white/10 rounded-2xl shadow-2xl hover:shadow-3xl hover:bg-white/15 transition-all duration-500 p-8 border border-white/20 hover:scale-105"
            >
              <div class="flex items-center mb-6">
                <div class="w-16 h-16 rounded-2xl flex items-center justify-center mr-4 shadow-lg group-hover:scale-110 transition-transform duration-300 bg-gradient-to-br from-cyan-500/80 to-cyan-500/40">
                  <svg
                    class="w-8 h-8 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 class="text-xl font-semibold text-white group-hover:text-cyan-400 transition-colors duration-300">
                    Telegram
                  </h4>
                  <p class="text-white/70">@TopScrech</p>
                </div>
              </div>
              <p class="text-white/80">
                For quick questions and instant messaging. 
                Usually the fastest way to reach me!
              </p>
            </a>
          </div>

          <!-- Additional info -->
          <div class="text-center mt-16">
            <div class="backdrop-blur-xl bg-white/5 rounded-2xl p-8 border border-white/20 shadow-2xl">
              <div class="flex items-center justify-center mb-4">
                <div class="w-2 h-2 bg-gradient-to-r from-green-400 to-blue-400 rounded-full mr-3"></div>
                <h4 class="text-lg font-semibold text-white">Response Times</h4>
              </div>
              <p class="text-white/80 leading-relaxed">
                I typically respond within a few hours during business days
                <br>
                For urgent matters, Telegram is the fastest way to reach me
              </p>
            </div>
          </div>
        </section>
      </main>

      <!-- Footer -->
      <footer class="py-8">
        <div class="container mx-auto px-6 text-center">
          <div class="backdrop-blur-xl bg-white/5 rounded-2xl p-6 border border-white/20">
            <p class="text-white/70">
              &copy; {{ currentYear }} Sergei Saliukov. Here to help with your iOS development needs
            </p>
          </div>
        </div>
      </footer>
    </div>
  </div>
</template>

<script setup>
const currentYear = new Date().getFullYear();

definePageMeta({
  layout: false,
});

useHead({
  title: "Support - Sergei Saliukov",
  meta: [
    {
      name: "description",
      content: "Get personalized support and answers to your questions about iOS development and my apps.",
    },
  ],
});
</script>

<style scoped>
@keyframes float {
  0%, 100% {
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
