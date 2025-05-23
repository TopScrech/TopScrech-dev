<template>
    <div
        class="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 relative overflow-hidden"
    >
        <!-- Background decorative elements -->
        <div class="absolute inset-0 overflow-hidden">
            <div
                class="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
            ></div>
            <div
                class="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
            ></div>
            <div
                class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"
            ></div>
        </div>

        <!-- Header -->
        <header
            class="container mx-auto px-4 sm:px-6 py-4 sm:py-8 relative z-10"
        >
            <nav
                class="flex flex-col sm:flex-row justify-between items-center backdrop-blur-xl bg-white/10 rounded-2xl p-4 border border-white/20 shadow-2xl gap-4 sm:gap-0"
            >
                <h1
                    class="text-xl sm:text-2xl font-bold text-white text-center sm:text-left"
                >
                    Sergei Saliukov
                </h1>
                <div
                    class="flex flex-wrap justify-center sm:justify-end gap-2 sm:gap-6"
                >
                    <a
                        href="#apps"
                        @click="smoothScrollTo($event, 'apps')"
                        class="text-white/80 hover:text-white transition-all duration-300 hover:backdrop-blur-sm hover:bg-white/10 px-3 sm:px-4 py-2 rounded-lg text-sm sm:text-base"
                    >
                        Apps
                    </a>
                    <a
                        href="#frameworks"
                        @click="smoothScrollTo($event, 'frameworks')"
                        class="text-white/80 hover:text-white transition-all duration-300 hover:backdrop-blur-sm hover:bg-white/10 px-3 sm:px-4 py-2 rounded-lg text-sm sm:text-base"
                    >
                        Frameworks
                    </a>
                    <a
                        href="#platforms"
                        @click="smoothScrollTo($event, 'platforms')"
                        class="text-white/80 hover:text-white transition-all duration-300 hover:backdrop-blur-sm hover:bg-white/10 px-3 sm:px-4 py-2 rounded-lg text-sm sm:text-base"
                    >
                        Platforms
                    </a>
                    <a
                        href="#contact"
                        @click="smoothScrollTo($event, 'contact')"
                        class="text-white/80 hover:text-white transition-all duration-300 hover:backdrop-blur-sm hover:bg-white/10 px-3 sm:px-4 py-2 rounded-lg text-sm sm:text-base"
                    >
                        Contact
                    </a>
                </div>
            </nav>
        </header>

        <!-- Hero Section -->
        <section class="container mx-auto px-6 py-16 text-center relative z-10">
            <div
                class="max-w-4xl mx-auto backdrop-blur-xl bg-white/5 rounded-3xl p-12 border border-white/20 shadow-2xl"
            >
                <h2
                    class="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight"
                >
                    iOS Developer
                </h2>
                <p class="text-xl text-white/80 mb-8 leading-relaxed">
                    Crafting beautiful, intuitive mobile experiences across all
                    Apple platforms. Specializing in SwiftUI and modern iOS
                    development practices with over 3 years of experience
                    building apps that users love
                </p>
                <div class="flex justify-center space-x-4">
                    <a
                        href="#apps"
                        @click="smoothScrollTo($event, 'apps')"
                        class="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-3 rounded-xl font-semibold hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 shadow-lg hover:shadow-xl backdrop-blur-sm"
                    >
                        View My Work
                    </a>
                    <a
                        href="#contact"
                        @click="smoothScrollTo($event, 'contact')"
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
                <h3 class="text-3xl font-bold text-white mb-4">Featured Apps</h3>
                <div
                  class="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto rounded-full"
                ></div>
              </div>
              <div
                class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
              >
                <AppCard v-for="app in apps" :key="app.name" :app="app" />
              </div>
            </section>
            
        <!-- Frameworks Section -->
        <section
            id="frameworks"
            class="container mx-auto px-6 py-16 relative z-10"
        >
            <div class="text-center mb-12">
                <h3 class="text-3xl font-bold text-white mb-4">My Libraries</h3>
                <div
                    class="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full"
                ></div>
            </div>
            <div
                class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
            >
                <div
                    v-for="framework in customFrameworks"
                    :key="framework.name"
                    class="backdrop-blur-xl bg-white/10 rounded-2xl shadow-2xl hover:shadow-3xl hover:bg-white/15 transition-all duration-500 p-6 border border-white/20 group hover:scale-105 flex flex-col"
                >
                    <div class="flex items-center mb-4">
                        <div
                            class="w-16 h-16 rounded-2xl flex items-center justify-center text-2xl font-bold text-white mr-4 backdrop-blur-sm border border-white/30 shadow-lg group-hover:scale-110 transition-transform duration-300"
                            :style="{
                                background: `linear-gradient(135deg, ${framework.color}80, ${framework.color}40)`,
                            }"
                        >
                            {{ framework.icon }}
                        </div>
                        <div>
                            <h4 class="text-xl font-semibold text-white">
                                {{ framework.name }}
                            </h4>
                            <p class="text-white/70">
                                {{ framework.category }}
                            </p>
                        </div>
                    </div>
                    <p class="text-white/80 mb-4 flex-grow">
                        {{ framework.description }}
                    </p>
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

        <!-- Platforms Grid Section -->
        <section id="platforms" class="py-16 relative z-10">
            <div class="container mx-auto px-6">
                <div
                    class="backdrop-blur-xl bg-white/5 rounded-3xl p-12 border border-white/20 shadow-2xl"
                >
                    <div class="text-center mb-12">
                        <h3 class="text-3xl font-bold text-white mb-4">
                            Development Platforms
                        </h3>
                        <div
                            class="w-24 h-1 bg-gradient-to-r from-orange-400 to-pink-400 mx-auto rounded-full"
                        ></div>
                    </div>
                    <div
                        class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
                    >
                        <!-- Platform Cards -->
                        <div
                            v-for="platform in platformCards"
                            :key="platform.name"
                            class="backdrop-blur-lg bg-white/10 p-6 rounded-2xl border border-white/20 flex flex-col items-center text-center hover:shadow-2xl hover:bg-white/15 transition-all duration-300 shadow-lg group hover:scale-105"
                        >
                            <div
                                class="w-16 h-16 backdrop-blur-sm rounded-full flex items-center justify-center mb-4 border group-hover:scale-110 transition-transform duration-300"
                                :class="platform.bgColor"
                                :style="{ borderColor: platform.borderColor }"
                            >
                                <div
                                    class="w-8 h-8"
                                    :class="platform.iconColor"
                                    v-html="platform.icon"
                                ></div>
                            </div>
                            <h3 class="font-bold text-white">
                                {{ platform.name }}
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Contact Section -->
        <section
            id="contact"
            class="container mx-auto px-6 py-16 relative z-10"
        >
            <div class="max-w-2xl mx-auto text-center">
                <div
                    class="backdrop-blur-xl bg-white/5 rounded-3xl p-12 border border-white/20 shadow-2xl"
                >
                    <h3 class="text-3xl font-bold text-white mb-6">
                        Let's Build Something Amazing
                    </h3>
                    <div
                        class="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto rounded-full mb-8"
                    ></div>
                    <p class="text-xl text-white/80 mb-8">
                        I'm always excited to work on new projects and
                        collaborate with talented developers. Whether you need a
                        new app built from scratch or want to improve an
                        existing one, let's talk!
                    </p>
                    <div class="flex justify-center space-x-2 flex-wrap gap-4">
                        <a
                            href="https://linkedin.com/in/topscrech"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="flex items-center space-x-2 text-white/80 hover:text-white transition-all duration-300 backdrop-blur-sm bg-white/10 px-4 py-3 rounded-xl border border-white/20 hover:bg-white/20 hover:scale-105"
                        >
                            <svg
                                class="w-5 h-5"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                                    clip-rule="evenodd"
                                ></path>
                            </svg>
                            <span>LinkedIn</span>
                        </a>
                        <a
                            href="https://github.com/TopScrech"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="flex items-center space-x-2 text-white/80 hover:text-white transition-all duration-300 backdrop-blur-sm bg-white/10 px-4 py-3 rounded-xl border border-white/20 hover:bg-white/20 hover:scale-105"
                        >
                            <svg
                                class="w-5 h-5"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                                    clip-rule="evenodd"
                                ></path>
                            </svg>
                            <span>GitHub</span>
                        </a>
                        <a
                            href="https://t.me/TopScrech"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="flex items-center space-x-2 text-white/80 hover:text-white transition-all duration-300 backdrop-blur-sm bg-white/10 px-4 py-3 rounded-xl border border-white/20 hover:bg-white/20 hover:scale-105"
                        >
                            <svg
                                class="w-5 h-5"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"
                                />
                            </svg>
                            <span>Telegram</span>
                        </a>
                        <a
                            href="mailto:topscrech@icloud.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="flex items-center space-x-2 text-white/80 hover:text-white transition-all duration-300 backdrop-blur-sm bg-white/10 px-4 py-3 rounded-xl border border-white/20 hover:bg-white/20 hover:scale-105"
                        >
                            <svg
                                class="w-5 h-5"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path
                                    d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"
                                ></path>
                                <path
                                    d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"
                                ></path>
                            </svg>
                            <span>E-mail</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>

        <!-- Footer -->
        <footer class="py-8 relative z-10">
            <div class="container mx-auto px-6 text-center">
                <div
                    class="backdrop-blur-xl bg-white/5 rounded-2xl p-6 border border-white/20"
                >
                    <p class="text-white/70">
                        &copy; {{ currentYear }} Sergei Saliukov. Building the
                        future of mobile experiences
                    </p>
                </div>
            </div>
        </footer>
    </div>
</template>

<script setup>
import AppCard from "./AppCard.vue";

const apps = [
  {
    name: "Bisquit.Host",
    category: "Pterodactyl Client",
    description: "A powerful server management tool for Pterodactyl panel",
    iconName: "bisquit-host",
    color: "#3B82F6",
    technologies: [
      "SwiftData",
      "WidgetKit",
      "Kingfisher",
      "Live Activity",
      "Keychain",
    ],
    downloads: {
      appStore: "1234567890",
      altStore: "example.com/bisquit",
      github: "TopScrech/Bisquit-Host",
    },
  },
  {
    name: "Device Specs",
    category: "Utilities",
    description:
      "Comprehensive device information app showing detailed hardware and software specifications",
    iconName: "device-specs",
    color: "#10B981",
    technologies: [
      "CoreNFC",
      "NearbyInteraction",
      "Charts",
      "Core Motion",
      "Core Location",
    ],
    downloads: {
      appStore: "1234567891",
      github: "TopScrech/Device-Specs",
    },
  },
  {
    name: "DickPic",
    category: "Photography",
    description:
      "Advanced image processing app for detecting sensitive images & videos",
    iconName: "dickpic",
    color: "#F59E0B",
    technologies: ["SensitiveContentAnalysis", "QuickLook", "Photos"],
    downloads: {
      altStore: "mysite.com/dickpic",
      github: "TopScrech/DickPic",
    },
  },
  {
    name: "MC Stats",
    category: "Gaming",
    description:
      "Minecraft server statistics tracker with real-time player monitoring and analytics",
    iconName: "mc-stats",
    color: "#8B5CF6",
    technologies: [
      "SwiftData",
      "Charts",
      "WidgetKit",
      "StoreKit",
      "Nuke",
      "Network",
    ],
    downloads: {
      appStore: "1234567892",
      altStore: "cdn.example.com/mcstats",
      github: "TopScrech/MC-Stats",
    },
  },
];

const customFrameworks = [
    {
        name: "ScrechKit",
        category: "UI Framework",
        description: "Taking Swift & SwiftUI a step further",
        icon: "SK",
        color: "#FF6B6B",
        technologies: ["Swift", "SwiftUI"],
    },
    {
        name: "QuickLooking",
        category: "Files",
        description: "Multi-platform file viewer",
        icon: "QL",
        color: "#4ECDC4",
        technologies: ["SwiftUI", "QuickLook", "QuickLookUI"],
    },
    {
        name: "LaunchAtLogin",
        category: "macOS",
        description: "Fork of LaunchAtLogin",
        icon: "LL",
        color: "#45B7D1",
        technologies: ["ServiceManagement", "os.log"],
    },
    {
        name: "MailCover",
        category: "Communication",
        description: "Easily open in-app email cover",
        icon: "MC",
        color: "#96CEB4",
        technologies: ["SwiftUI", "MessageUI"],
    },
    {
        name: "SafariCover",
        category: "Web",
        description: "Easily open in-app Safari browser",
        icon: "SC",
        color: "#FECA57",
        technologies: ["SafariServices", "SwiftUI"],
    },
    {
        name: "SPerms",
        category: "Privacy",
        description: "SwiftPermissions made better",
        icon: "SP",
        color: "#FF9FF3",
        technologies: ["SwiftPermissions"],
    },
    {
        name: "HealthyKit",
        category: "Health",
        description: "HealthKit data types for macOS",
        icon: "HK",
        color: "#54A0FF",
        technologies: ["HealthKit", "Foundation"],
    },
    {
        name: "GaypadKit",
        category: "Gaming",
        description: "Respond to gamepad controller input",
        icon: "GK",
        color: "#5F27CD",
        technologies: ["GameController", "Combine"],
    },
    {
        name: "Audio Visualizer",
        category: "Audio",
        description: "Real-time audio visualization using Swift Charts",
        icon: "AV",
        color: "#00D2D3",
        technologies: ["Charts", "AVFoundation", "Accelerate"],
    },
];

const platformCards = [
  {
    name: "iOS",
    bgColor: "bg-blue-400/20",
    borderColor: "rgba(96, 165, 250, 0.3)",
    iconColor: "text-blue-400",
    icon: `<svg viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8">
      <g transform="translate(12,12) scale(0.22,0.22) translate(-32,-52.768)">
        <rect height="105.536" opacity="0" width="63.999" x="0" y="0"/>
        <path d="M14.5928 97.418C10.3594 97.418 8.01855 95.1768 8.01855 91.1924L8.01855 14.2441C8.01855 10.2598 10.3594 8.01855 14.5928 8.01855L49.4561 8.01855C53.6396 8.01855 55.9805 10.2598 55.9805 14.2441L55.9805 91.1924C55.9805 95.1768 53.6396 97.418 49.4561 97.418Z" fill="currentColor" fill-opacity="0.2125"/>
        <path d="M13.5469 105.437L50.4521 105.437C58.5703 105.437 63.999 100.257 63.999 92.4873L63.999 12.9492C63.999 5.17969 58.5703 0 50.4521 0L13.5469 0C5.42871 0 0 5.17969 0 12.9492L0 92.4873C0 100.257 5.42871 105.437 13.5469 105.437ZM14.5928 97.418C10.3594 97.418 8.01855 95.1768 8.01855 91.1924L8.01855 14.2441C8.01855 10.2598 10.3594 8.01855 14.5928 8.01855L49.4561 8.01855C53.6396 8.01855 55.9805 10.2598 55.9805 14.2441L55.9805 91.1924C55.9805 95.1768 53.6396 97.418 49.4561 97.418ZM21.4658 93.7822L42.6328 93.7822C43.9775 93.7822 44.9238 92.8359 44.9238 91.4414C44.9238 90.0469 43.9775 89.1504 42.6328 89.1504L21.4658 89.1504C20.1211 89.1504 19.125 90.0469 19.125 91.4414C19.125 92.8359 20.1211 93.7822 21.4658 93.7822ZM25.998 18.5771L38.0508 18.5771C39.9932 18.5771 41.5371 17.0332 41.5371 15.041C41.5371 13.0986 39.9932 11.5547 38.0508 11.5547L25.998 11.5547C24.0059 11.5547 22.4619 13.0986 22.4619 15.041C22.4619 17.0332 24.0059 18.5771 25.998 18.5771Z" fill="currentColor" fill-opacity="0.85"/>
      </g>
    </svg>`
  },
    {
      name: "iPadOS",
      bgColor: "bg-purple-400/20",
      borderColor: "rgba(167, 139, 250, 0.3)",
      iconColor: "text-purple-400",
      icon: `<svg viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8">
        <g transform="translate(12,12) scale(0.21,0.21) translate(-41.6118,-56.155)">
          <rect height="112.31" opacity="0" width="83.2236" x="0" y="0"/>
          <path d="M8.01855 97.7168L8.01855 14.543C8.01855 10.459 10.5088 8.01855 14.792 8.01855L68.4316 8.01855C72.665 8.01855 75.2051 10.459 75.2051 14.543L75.2051 97.7168C75.2051 101.801 72.665 104.191 68.4316 104.191L14.792 104.191C10.5088 104.191 8.01855 101.801 8.01855 97.7168Z" fill="currentColor" fill-opacity="0.2125"/>
          <path d="M27.4922 100.406L55.7314 100.406C57.126 100.406 58.0723 99.46 58.0723 98.0654C58.0723 96.6709 57.126 95.7744 55.7314 95.7744L27.4922 95.7744C26.1475 95.7744 25.2012 96.6709 25.2012 98.0654C25.2012 99.46 26.1475 100.406 27.4922 100.406ZM0 99.0615C0 106.931 5.52832 112.21 13.7959 112.21L69.4277 112.21C77.6953 112.21 83.2236 106.931 83.2236 99.0615L83.2236 13.1982C83.2236 5.3291 77.6953 0 69.4277 0L13.7959 0C5.52832 0 0 5.3291 0 13.1982ZM8.01855 97.7168L8.01855 14.543C8.01855 10.459 10.5088 8.01855 14.792 8.01855L68.4316 8.01855C72.665 8.01855 75.2051 10.459 75.2051 14.543L75.2051 97.7168C75.2051 101.801 72.665 104.191 68.4316 104.191L14.792 104.191C10.5088 104.191 8.01855 101.801 8.01855 97.7168Z" fill="currentColor" fill-opacity="0.85"/>
        </g>
      </svg>`
    },
    {
        name: "macOS",
        bgColor: "bg-green-400/20",
        borderColor: "rgba(74, 222, 128, 0.3)",
        iconColor: "text-green-400",
        icon: `<svg viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8">
          <g transform="translate(12,12) scale(0.2,0.2) translate(-71.818, -40.565)">
            <rect height="81.1318" opacity="0" width="143.637" x="0" y="0"/>
            <path d="M24.5537 69.7764L24.5537 12.8994C24.5537 9.71191 26.1475 8.11816 29.335 8.11816L114.302 8.11816C117.489 8.11816 119.083 9.71191 119.083 12.8994L119.083 69.7764Z" fill="currentColor" fill-opacity="0.2125"/>
            <path d="M56.7773 8.11816L58.0225 8.11816C58.7695 8.11816 59.168 8.4668 59.168 9.31348L59.168 9.86133C59.168 11.9531 60.5625 13.3477 62.6543 13.3477L81.082 13.3477C83.124 13.3477 84.4189 11.9531 84.4189 9.86133L84.4189 9.31348C84.4189 8.4668 84.8174 8.11816 85.6641 8.11816L86.9092 8.11816L86.9092 3.98438L56.7773 3.98438ZM0 75.4541C0 78.5918 2.54004 81.1318 5.62793 81.1318L138.009 81.1318C141.097 81.1318 143.637 78.5918 143.637 75.4541C143.637 72.3164 141.097 69.7764 138.009 69.7764L127.102 69.7764L127.102 10.6582C127.102 3.68555 123.366 0.0996094 116.443 0.0996094L27.1934 0.0996094C20.6191 0.0996094 16.5352 3.68555 16.5352 10.6582L16.5352 69.7764L5.62793 69.7764C2.54004 69.7764 0 72.3164 0 75.4541ZM24.5537 69.7764L24.5537 12.8994C24.5537 9.71191 26.1475 8.11816 29.335 8.11816L114.302 8.11816C117.489 8.11816 119.083 9.71191 119.083 12.8994L119.083 69.7764Z" fill="currentColor" fill-opacity="0.85"/>
          </g>
        </svg>`
    },
    {
        name: "watchOS",
        bgColor: "bg-red-400/20",
        borderColor: "rgba(248, 113, 113, 0.3)",
        iconColor: "text-red-400",
        icon: `<svg viewBox="0 0 24 24" fill="currentColor" class="w-full h-full">
            <g transform="translate(12, 12) scale(0.2, 0.2) translate(-38.4741, -53.316)">
                <rect height="106.632" opacity="0" width="76.9482" x="0" y="0"/>
                <path d="M12.0029 72.416L12.0029 34.2656C12.0029 26.8447 16.3359 22.3623 23.6074 22.3623L53.0918 22.3623C60.3633 22.3623 64.6963 26.8447 64.6963 34.2656L64.6963 72.416C64.6963 79.7871 60.3633 84.2695 53.0918 84.2695L23.6074 84.2695C16.3359 84.2695 12.0029 79.7871 12.0029 72.416Z" fill="currentColor" fill-opacity="0.2125"/>
                <path d="M4.73145 73.4619C4.73145 81.1816 7.76953 86.8594 13.3975 89.9473C16.1367 91.3916 17.7305 93.2344 18.7266 96.5713L20.3203 101.9C21.2666 105.088 23.5078 106.632 26.8447 106.632L49.8545 106.632C53.291 106.632 55.3828 105.138 56.3291 101.9L57.9727 96.5713C58.9688 93.2344 60.5625 91.3916 63.3018 89.9473C68.9297 86.8594 71.9678 81.1816 71.9678 73.4619L71.9678 33.1699C71.9678 25.4502 68.9297 19.8223 63.3018 16.6846C60.5625 15.2402 58.9688 13.3975 57.9727 10.1104L56.3291 4.73145C55.4824 1.59375 53.2412 0 49.8545 0L26.8447 0C23.5078 0 21.2666 1.54395 20.3203 4.73145L18.7266 10.1104C17.7803 13.3477 16.1865 15.29 13.3975 16.6846C7.81934 19.6729 4.73145 25.3506 4.73145 33.1699ZM12.0029 72.416L12.0029 34.2656C12.0029 26.8447 16.3359 22.3623 23.6074 22.3623L53.0918 22.3623C60.3633 22.3623 64.6963 26.8447 64.6963 34.2656L64.6963 72.416C64.6963 79.7871 60.3633 84.2695 53.0918 84.2695L23.6074 84.2695C16.3359 84.2695 12.0029 79.7871 12.0029 72.416ZM70.8721 49.8047L72.665 49.8047C75.2549 49.8047 76.9482 48.0615 76.9482 45.2227L76.9482 38.499C76.9482 35.6602 75.2549 33.917 72.665 33.917L70.8721 33.917Z" fill="currentColor" fill-opacity="0.85"/>
            </g>
        </svg>`
    },
    {
      name: "tvOS",
      bgColor: "bg-yellow-400/20",
      borderColor: "rgba(250, 204, 21, 0.3)",
      iconColor: "text-yellow-400",
      icon: `<svg viewBox="0 0 124.512 99.6592" fill="currentColor" class="w-8 h-8">
          <path d="M12.7998 82.7256L111.712 82.7256C119.681 82.7256 124.512 77.8447 124.512 69.9258L124.512 12.7998C124.512 4.88086 119.681 0 111.712 0L12.7998 0C4.88086 0 0 4.88086 0 12.7998L0 69.9258C0 77.8447 4.88086 82.7256 12.7998 82.7256ZM12.9492 74.707C9.86133 74.707 8.01855 72.8643 8.01855 69.8262L8.01855 12.8994C8.01855 9.86133 9.86133 8.01855 12.9492 8.01855L111.562 8.01855C114.65 8.01855 116.493 9.86133 116.493 12.8994L116.493 69.8262C116.493 72.8643 114.65 74.707 111.562 74.707ZM37.2041 99.6094L87.3076 99.6094C89.499 99.6094 91.3418 97.8164 91.3418 95.5752C91.3418 93.334 89.499 91.541 87.3076 91.541L37.2041 91.541C35.0127 91.541 33.1699 93.334 33.1699 95.5752C33.1699 97.8164 35.0127 99.6094 37.2041 99.6094Z" fill="currentColor"/>
        </svg>`
    },
    {
      name: "visionOS",
      bgColor: "bg-indigo-400/20",
      borderColor: "rgba(129, 140, 248, 0.3)",
      iconColor: "text-indigo-400",
      icon: `<svg viewBox="0 0 141.196 80.335" fill="currentColor" class="w-8 h-8">
        <path d="M70.623 62.4551C80.1357 62.4551 90.0469 78.4922 108.973 78.4922C127.351 78.4922 141.196 61.8076 141.196 39.8936C141.196 3.98438 109.57 0 70.623 0C31.626 0 0 4.03418 0 39.8936C0 61.8076 13.8457 78.4922 32.2236 78.4922C51.1494 78.4922 61.0605 62.4551 70.623 62.4551ZM70.623 54.4365C56.2295 54.4365 49.6553 70.4736 32.2236 70.4736C17.5312 70.4736 8.01855 58.8193 8.01855 39.8936C8.01855 11.0068 32.4727 8.01855 70.623 8.01855C108.724 8.01855 133.178 10.957 133.178 39.8936C133.178 58.8193 123.665 70.4736 108.973 70.4736C91.541 70.4736 84.9668 54.4365 70.623 54.4365Z" fill="currentColor"/>
      </svg>`
    },
    {
      name: "Web",
      bgColor: "bg-pink-400/20",
      borderColor: "rgba(244, 114, 182, 0.3)",
      iconColor: "text-pink-400",
      icon: `<svg viewBox="0 0 101.602 101.651" fill="currentColor" class="w-8 h-8">
        <path d="M52.793 88.4531C59.168 88.4531 76.5996 65.543 76.5996 56.9766C76.5996 52.1455 65.8418 42.7324 60.2139 42.7324C57.7734 42.7324 53.8389 46.2188 51 46.2188C48.1611 46.2188 41.7861 40.6406 41.7861 38.2002C41.7861 36.8057 42.9814 36.0088 44.376 36.0088C46.8164 36.0088 50.6514 40.0928 54.5361 40.0928C57.7734 40.0928 59.5166 37.8516 59.5166 34.6143C59.5166 32.9209 58.5703 31.2275 57.1758 29.0361C62.3057 26.5459 72.5654 21.167 75.9023 14.2939C72.167 8.5166 62.2559 4.73145 50.7012 4.73145C33.6182 4.73145 16.7842 14.792 15.29 24.5537C14.7422 29.7832 18.7266 35.5107 25.6992 41.5869L32.9707 47.9121C35.2617 49.9541 36.6064 50.9004 36.6064 52.1953C36.6064 54.3369 34.2158 55.8311 34.2158 58.5703C34.2158 61.0605 35.4111 63.2021 38.001 65.0947C46.0693 71.1709 48.0117 72.0176 48.0117 73.8604C48.0615 77.1475 46.1191 79.6377 46.1191 82.6758C46.1191 85.415 49.6553 88.4531 52.793 88.4531ZM50.8008 101.602C78.8408 101.602 101.602 78.8408 101.602 50.8008C101.602 22.7607 78.8408 0 50.8008 0C22.7607 0 0 22.7607 0 50.8008C0 78.8408 22.7607 101.602 50.8008 101.602ZM50.8008 94.8281C26.4961 94.8281 6.77344 75.1055 6.77344 50.8008C6.77344 26.4961 26.4961 6.77344 50.8008 6.77344C75.1055 6.77344 94.8281 26.4961 94.8281 50.8008C94.8281 75.1055 75.1055 94.8281 50.8008 94.8281Z" fill="currentColor"/>
      </svg>`
    },
    {
        name: "Android",
        bgColor: "bg-cyan-400/20",
        borderColor: "rgba(34, 211, 238, 0.3)",
        iconColor: "text-cyan-400",
        icon: `<svg viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8">
      <path d="M6 18c0 .55.45 1 1 1h1v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h2v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h1c.55 0 1-.45 1-1V8H6v10zM3.5 8C2.67 8 2 8.67 2 9.5v7c0 .83.67 1.5 1.5 1.5S5 17.33 5 16.5v-7C5 8.67 4.33 8 3.5 8zm17 0c-.83 0-1.5.67-1.5 1.5v7c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-7c0-.83-.67-1.5-1.5-1.5zm-4.97-5.84l1.3-1.3c.2-.2.2-.51 0-.71-.2-.2-.51-.2-.71 0l-1.48 1.48C13.85 1.23 12.95 1 12 1c-.96 0-1.86.23-2.66.63L7.85.15c-.2-.2-.51-.2-.71 0-.2.2-.2.51 0 .71l1.31 1.31C6.97 3.26 6 5.01 6 7h12c0-1.99-.97-3.75-2.47-4.84zM10 5H9V4h1v1zm5 0h-1V4h1v1z" />
    </svg>`
    }
];

const currentYear = new Date().getFullYear();

// Smooth scroll function
const smoothScrollTo = (event, targetId) => {
    event.preventDefault();

    const targetElement = document.getElementById(targetId);
    if (targetElement) {
        targetElement.scrollIntoView({
            behavior: "smooth",
            block: "start",
            inline: "nearest",
        });
    }
};
</script>

<style>
/* Optional: Add CSS smooth scrolling as fallback */
html {
    scroll-behavior: smooth;
}

/* Ensure smooth scrolling works even with CSS-only approach */
@media (prefers-reduced-motion: no-preference) {
    html {
        scroll-behavior: smooth;
    }
}

/* For users who prefer reduced motion */
@media (prefers-reduced-motion: reduce) {
    html {
        scroll-behavior: auto;
    }
}
</style>
