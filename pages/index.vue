<template>
    <div
        class="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 relative overflow-hidden"
    >
        <!-- Background -->
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
                    development practices with over
                    <u>{{ experienceYears }} years</u> of experience building
                    apps that users love
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
                <h3 class="text-3xl font-bold text-white mb-4">
                    Featured Apps
                </h3>
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
                <FrameworkCard
                    v-for="framework in frameworks"
                    :key="framework.name"
                    :framework="framework"
                />
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
                        <PlatformCard
                            v-for="platform in platforms"
                            :key="platform.name"
                            :platform="platform"
                        />
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
            <div class="container mx-auto px-6">
                <div
                    class="backdrop-blur-xl bg-white/5 rounded-2xl p-6 border border-white/20 flex justify-between items-center"
                >
                    <p class="text-white/70">
                        &copy; {{ currentYear }} Sergei Saliukov.
                        Building the future of mobile experiences
                    </p>
                    <a 
                        href="/app/support" 
                        class="text-gray-400 hover:text-cyan-300 transition-colors duration-200"
                    >
                        App Support
                    </a>
                </div>
            </div>
        </footer>
    </div>
</template>

<script setup>
import { apps } from "./data/apps.js";
import { frameworks } from "./data/frameworks.js";
import { platforms } from "./data/platforms.js";

import { currentYear } from "./data/currentYear.js";
import { smoothScrollTo } from "./data/smoothScrollTo.js";

import AppCard from "./AppCard.vue";
import FrameworkCard from "./FrameworkCard.vue";
import PlatformCard from "./PlatformCard.vue";

const startYear = 2023;
const experienceYears = currentYear - startYear;
</script>

<style>
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
