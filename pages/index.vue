<template>
  <div class="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 relative overflow-hidden">
    <!-- Background decorative elements -->
    <div class="absolute inset-0 overflow-hidden">
      <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
      <div class="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
      <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"></div>
    </div>

    <!-- Header -->
    <header class="container mx-auto px-6 py-8 relative z-10">
      <nav class="flex justify-between items-center backdrop-blur-xl bg-white/10 rounded-2xl p-4 border border-white/20 shadow-2xl">
        <h1 class="text-2xl font-bold text-white">Sergei Saliukov</h1>
        <div class="flex space-x-6">
          <a
            href="#apps"
            class="text-white/80 hover:text-white transition-all duration-300 hover:backdrop-blur-sm hover:bg-white/10 px-4 py-2 rounded-lg"
          >
            Apps
          </a>
          <a
            href="#frameworks"
            class="text-white/80 hover:text-white transition-all duration-300 hover:backdrop-blur-sm hover:bg-white/10 px-4 py-2 rounded-lg"
          >
            Frameworks
          </a>
          <a
            href="#tech"
            class="text-white/80 hover:text-white transition-all duration-300 hover:backdrop-blur-sm hover:bg-white/10 px-4 py-2 rounded-lg"
          >
            Tech Stack
          </a>
          <a
            href="#contact"
            class="text-white/80 hover:text-white transition-all duration-300 hover:backdrop-blur-sm hover:bg-white/10 px-4 py-2 rounded-lg"
          >
            Contact
          </a>
        </div>
      </nav>
    </header>

    <!-- Hero Section -->
    <section class="container mx-auto px-6 py-16 text-center relative z-10">
      <div class="max-w-4xl mx-auto backdrop-blur-xl bg-white/5 rounded-3xl p-12 border border-white/20 shadow-2xl">
        <h2
          class="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight"
        >
          iOS Developer
        </h2>
        <p class="text-xl text-white/80 mb-8 leading-relaxed">
          Crafting beautiful, intuitive mobile experiences across all Apple platforms. 
          Specializing in SwiftUI and modern iOS development practices 
          with over 3 years of experience building apps that users love
        </p>
        <div class="flex justify-center space-x-4">
          <a
            href="#apps"
            class="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-3 rounded-xl font-semibold hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 shadow-lg hover:shadow-xl backdrop-blur-sm"
          >
            View My Work
          </a>
          <a
            href="#contact"
            class="backdrop-blur-xl bg-white/10 border border-white/30 text-white px-8 py-3 rounded-xl font-semibold hover:bg-white/20 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
    <!-- Apps Section -->
    <section id="apps" class="container mx-auto px-6 py-16 relative z-10">
      <div class="text-center mb-12">
        <h3 class="text-3xl font-bold text-white mb-4">
          Featured Apps
        </h3>
        <div class="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto rounded-full"></div>
      </div>
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <div
          v-for="app in apps"
          :key="app.name"
          class="backdrop-blur-xl bg-white/10 rounded-2xl shadow-2xl hover:shadow-3xl hover:bg-white/15 transition-all duration-500 p-6 border border-white/20 group hover:scale-105"
        >
          <div class="flex items-center mb-4">
            <div
              class="w-16 h-16 rounded-2xl flex items-center justify-center mr-4 shadow-lg group-hover:scale-110 transition-transform duration-300 overflow-hidden"
              :style="{ background: `linear-gradient(135deg, ${app.color}80, ${app.color}40)` }"
            >
              <img 
                :src="`/icons/${app.iconName}.webp`" 
                :alt="`${app.name} icon`"
                class=""
              />
            </div>
            <div>
              <h4 class="text-xl font-semibold text-white">
                {{ app.name }}
              </h4>
              <p class="text-white/70">{{ app.category }}</p>
            </div>
          </div>
          <p class="text-white/80 mb-4">{{ app.description }}</p>
          <div class="flex flex-wrap gap-2">
            <span
              v-for="tech in app.technologies"
              :key="tech"
              class="backdrop-blur-sm bg-white/20 text-white/90 px-3 py-1 rounded-full text-sm border border-white/30 hover:bg-white/30 transition-colors duration-200"
            >
              {{ tech }}
            </span>
          </div>
        </div>
      </div>
    </section>

    <!-- Frameworks Section -->
    <section id="frameworks" class="container mx-auto px-6 py-16 relative z-10">
      <div class="text-center mb-12">
        <h3 class="text-3xl font-bold text-white mb-4">
          Self-Made Frameworks
        </h3>
        <div class="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full"></div>
      </div>
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <div
          v-for="framework in customFrameworks"
          :key="framework.name"
          class="backdrop-blur-xl bg-white/10 rounded-2xl shadow-2xl hover:shadow-3xl hover:bg-white/15 transition-all duration-500 p-6 border border-white/20 group hover:scale-105"
        >
          <div class="flex items-center mb-4">
            <div
              class="w-16 h-16 rounded-2xl flex items-center justify-center text-2xl font-bold text-white mr-4 backdrop-blur-sm border border-white/30 shadow-lg group-hover:scale-110 transition-transform duration-300"
              :style="{ background: `linear-gradient(135deg, ${framework.color}80, ${framework.color}40)` }"
            >
              {{ framework.icon }}
            </div>
            <div>
              <h4 class="text-xl font-semibold text-white">
                {{ framework.name }}
              </h4>
              <p class="text-white/70">{{ framework.category }}</p>
            </div>
          </div>
          <p class="text-white/80 mb-4">{{ framework.description }}</p>
          <div class="flex flex-wrap gap-2">
            <span
              v-for="tech in framework.technologies"
              :key="tech"
              class="backdrop-blur-sm bg-white/20 text-white/90 px-3 py-1 rounded-full text-sm border border-white/30 hover:bg-white/30 transition-colors duration-200"
            >
              {{ tech }}
            </span>
          </div>
        </div>
      </div>
    </section>

    <!-- Tech Stack Section -->
    <section id="tech" class="py-16 relative z-10">
      <div class="container mx-auto px-6">
        <div class="backdrop-blur-xl bg-white/5 rounded-3xl p-12 border border-white/20 shadow-2xl">
          <div class="text-center mb-12">
            <h3 class="text-3xl font-bold text-white mb-4">
              Technologies & Platforms
            </h3>
            <div class="w-24 h-1 bg-gradient-to-r from-green-400 to-blue-400 mx-auto rounded-full"></div>
          </div>
          <div class="max-w-4xl mx-auto">
            <div class="grid md:grid-cols-2 gap-8">
              <!-- Frameworks -->
              <div class="backdrop-blur-xl bg-white/10 rounded-2xl p-6 border border-white/20">
                <h4 class="text-xl font-semibold text-white mb-6 flex items-center">
                  <div class="w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full mr-3"></div>
                  Frameworks & Libraries
                </h4>
                <div class="space-y-4">
                  <div
                    v-for="framework in frameworks"
                    :key="framework.name"
                    class="backdrop-blur-sm bg-white/10 rounded-xl p-4 border border-white/20 hover:bg-white/15 transition-all duration-300"
                  >
                    <div class="flex items-center justify-between mb-2">
                      <span class="font-medium text-white">
                        {{ framework.name }}
                      </span>
                      <span class="text-white/70 text-sm">{{ framework.proficiency }}%</span>
                    </div>
                    <div class="w-full bg-white/20 rounded-full h-2 backdrop-blur-sm">
                      <div
                        class="bg-gradient-to-r from-cyan-400 to-blue-400 h-2 rounded-full transition-all duration-1000 shadow-lg"
                        :style="{ width: framework.proficiency + '%' }"
                      ></div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Platforms -->
              <div class="backdrop-blur-xl bg-white/10 rounded-2xl p-6 border border-white/20">
                <h4 class="text-xl font-semibold text-white mb-6 flex items-center">
                  <div class="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mr-3"></div>
                  Development Platforms
                </h4>
                <div class="grid grid-cols-2 gap-4">
                  <div
                    v-for="platform in platforms"
                    :key="platform"
                    class="backdrop-blur-sm bg-white/10 border border-white/20 rounded-xl p-4 text-white/90 font-medium hover:bg-white/20 hover:scale-105 transition-all duration-300 text-center shadow-lg"
                  >
                    {{ platform }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="container mx-auto px-6 py-16 relative z-10">
      <div class="max-w-2xl mx-auto text-center">
        <div class="backdrop-blur-xl bg-white/5 rounded-3xl p-12 border border-white/20 shadow-2xl">
          <h3 class="text-3xl font-bold text-white mb-6">
            Let's Build Something Amazing
          </h3>
          <div class="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto rounded-full mb-8"></div>
          <p class="text-xl text-white/80 mb-8">
            I'm always excited to work on new projects and collaborate with 
            talented teams. Whether you need a new app built from scratch or 
            want to improve an existing one, let's talk!
          </p>
          <div class="flex justify-center space-x-4 flex-wrap gap-4">
            <a
              href="mailto:topscrech@icloud.com"
              class="flex items-center space-x-2 text-white/80 hover:text-white transition-all duration-300 backdrop-blur-sm bg-white/10 px-4 py-3 rounded-xl border border-white/20 hover:bg-white/20 hover:scale-105"
            >
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
              </svg>
              <span>Email</span>
            </a>
            <a
              href="https://linkedin.com/in/topscrech"
              class="flex items-center space-x-2 text-white/80 hover:text-white transition-all duration-300 backdrop-blur-sm bg-white/10 px-4 py-3 rounded-xl border border-white/20 hover:bg-white/20 hover:scale-105"
            >
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clip-rule="evenodd"></path>
              </svg>
              <span>LinkedIn</span>
            </a>
            <a
              href="https://github.com/TopScrech"
              class="flex items-center space-x-2 text-white/80 hover:text-white transition-all duration-300 backdrop-blur-sm bg-white/10 px-4 py-3 rounded-xl border border-white/20 hover:bg-white/20 hover:scale-105"
            >
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clip-rule="evenodd"></path>
              </svg>
              <span>GitHub</span>
            </a>
            <a
              href="https://t.me/TopScrech"
              class="flex items-center space-x-2 text-white/80 hover:text-white transition-all duration-300 backdrop-blur-sm bg-white/10 px-4 py-3 rounded-xl border border-white/20 hover:bg-white/20 hover:scale-105"
            >
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
              </svg>
              <span>Telegram</span>
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="py-8 relative z-10">
      <div class="container mx-auto px-6 text-center">
        <div class="backdrop-blur-xl bg-white/5 rounded-2xl p-6 border border-white/20">
            <p class="text-white/70">
                &copy; {{ currentYear }} Sergei Saliukov. Building the future of mobile experiences
            </p>        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
// Sample data - replace with your actual projects and information
const apps = [
  {
    name: "Bisquit.Host",
    category: "Pterodactyl Client",
    description: "A powerful server management tool for Pterodactyl panel",
    iconName: "bisquit-host",
    color: "#3B82F6",
    technologies: ["SwiftData", "WidgetKit", "Kingfisher", "Live Activity", "Keychain"]
  },
  {
    name: "Device Specs",
    category: "Utilities",
    description: "Comprehensive device information app showing detailed hardware and software specifications",
    iconName: "device-specs",
    color: "#10B981",
    technologies: ["CoreNFC", "NearbyInteraction", "Charts", "Core Motion", "Core Location"]
  },
  {
    name: "DickPic",
    category: "Photography",
    description: "Advanced image processing and manipulation tool with AI-powered features",
    iconName: "dickpic",
    color: "#F59E0B",
    technologies: ["SensitiveContentAnalysis", "QuickLook", "Photos"]
  },
  {
    name: "MC Stats",
    category: "Gaming",
    description: "Minecraft server statistics tracker with real-time player monitoring and analytics",
    iconName: "mc-stats",
    color: "#8B5CF6",
    technologies: ["SwiftData", "Charts", "WidgetKit", "StoreKit", "Nuke", "Network"]
  }
];

const customFrameworks = [
  {
    name: "SwiftNetworking",
    category: "Networking",
    description: "A modern async/await networking layer with automatic retry, caching, and request/response middleware",
    icon: "S",
    color: "#FF6B6B",
    technologies: ["Swift", "Async/Await", "URLSession"]
  },
  {
    name: "UIKitPlus",
    category: "UI Framework",
    description: "Enhanced UIKit components with SwiftUI-like declarative syntax and automatic layout",
    icon: "U",
    color: "#4ECDC4",
    technologies: ["Auto Layout", "Swift"]
  },
  {
    name: "CoreDataStack",
    category: "Data Persistence",
    description: "Type-safe Core Data wrapper with migration handling and background context management",
    icon: "C",
    color: "#45B7D1",
    technologies: ["Core Data", "Swift", "Concurrency"]
  },
  {
    name: "AnimationKit",
    category: "Animation",
    description: "Chainable animation library for complex UI transitions and micro-interactions",
    icon: "A",
    color: "#96CEB4",
    technologies: ["Core Animation", "SwiftUI"]
  },
  {
    name: "LoggerPro",
    category: "Development Tools",
    description: "Advanced logging framework with remote logging, crash reporting, and performance monitoring",
    icon: "L",
    color: "#FFEAA7",
    technologies: ["Swift", "os_log", "Network"]
  },
  {
    name: "KeychainSwift",
    category: "Security",
    description: "Simple and secure keychain wrapper with biometric authentication and data encryption",
    icon: "K",
    color: "#DDA0DD",
    technologies: ["Keychain", "LocalAuthentication", "CryptoKit"]
  }
];

const frameworks = [
  { name: "SwiftUI", proficiency: 95 },
  { name: "UIKit", proficiency: 90 },
  { name: "Core Data", proficiency: 85 },
  { name: "CloudKit", proficiency: 80 },
  { name: "Combine", proficiency: 85 },
  { name: "Core ML", proficiency: 75 }
];

const platforms = [
  "iOS",
  "macOS", 
  "visionOS",
  "iPadOS",
  "watchOS",
  "tvOS",
  "Web",
  "Android"
];

const currentYear = new Date().getFullYear();
</script>