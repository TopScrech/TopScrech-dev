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
        <header class="container mx-auto px-6 py-8 relative z-10">
            <nav
                class="flex justify-between items-center backdrop-blur-xl bg-white/10 rounded-2xl p-4 border border-white/20 shadow-2xl"
            >
                <h1 class="text-2xl font-bold text-white">Sergei Saliukov</h1>
                <div class="flex space-x-6">
                    <a
                        href="#apps"
                        @click="smoothScrollTo($event, 'apps')"
                        class="text-white/80 hover:text-white transition-all duration-300 hover:backdrop-blur-sm hover:bg-white/10 px-4 py-2 rounded-lg"
                    >
                        Apps
                    </a>
                    <a
                        href="#frameworks"
                        @click="smoothScrollTo($event, 'frameworks')"
                        class="text-white/80 hover:text-white transition-all duration-300 hover:backdrop-blur-sm hover:bg-white/10 px-4 py-2 rounded-lg"
                    >
                        Frameworks
                    </a>
                    <a
                        href="#tech"
                        @click="smoothScrollTo($event, 'tech')"
                        class="text-white/80 hover:text-white transition-all duration-300 hover:backdrop-blur-sm hover:bg-white/10 px-4 py-2 rounded-lg"
                    >
                        Tech Stack
                    </a>
                    <a
                        href="#contact"
                        @click="smoothScrollTo($event, 'contact')"
                        class="text-white/80 hover:text-white transition-all duration-300 hover:backdrop-blur-sm hover:bg-white/10 px-4 py-2 rounded-lg"
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
                <div
                    v-for="app in apps"
                    :key="app.name"
                    class="backdrop-blur-xl bg-white/10 rounded-2xl shadow-2xl hover:shadow-3xl hover:bg-white/15 transition-all duration-500 p-6 border border-white/20 group hover:scale-105 flex flex-col"
                >
                    <div class="flex items-center mb-4">
                        <div
                            class="w-16 h-16 rounded-2xl flex items-center justify-center mr-4 shadow-lg group-hover:scale-110 transition-transform duration-300 overflow-hidden"
                            :style="{
                                background: `linear-gradient(135deg, ${app.color}80, ${app.color}40)`,
                            }"
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
                    <p class="text-white/80 mb-4 flex-grow">
                        {{ app.description }}
                    </p>
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

        <!-- Tech Stack Section -->
        <section id="tech" class="py-16 relative z-10">
            <div class="container mx-auto px-6">
                <div
                    class="backdrop-blur-xl bg-white/5 rounded-3xl p-12 border border-white/20 shadow-2xl"
                >
                    <div class="text-center mb-12">
                        <h3 class="text-3xl font-bold text-white mb-4">
                            Technologies & Platforms
                        </h3>
                        <div
                            class="w-24 h-1 bg-gradient-to-r from-green-400 to-blue-400 mx-auto rounded-full"
                        ></div>
                    </div>
                    <div class="max-w-4xl mx-auto">
                        <div class="grid md:grid-cols-2 gap-8">
                            <!-- Frameworks -->
                            <div
                                class="backdrop-blur-xl bg-white/10 rounded-2xl p-6 border border-white/20"
                            >
                                <h4
                                    class="text-xl font-semibold text-white mb-6 flex items-center"
                                >
                                    <div
                                        class="w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full mr-3"
                                    ></div>
                                    Frameworks & Libraries
                                </h4>
                                <div class="space-y-4">
                                    <div
                                        v-for="framework in frameworks"
                                        :key="framework.name"
                                        class="backdrop-blur-sm bg-white/10 rounded-xl p-4 border border-white/20 hover:bg-white/15 transition-all duration-300"
                                    >
                                        <div
                                            class="flex items-center justify-between mb-2"
                                        >
                                            <span
                                                class="font-medium text-white"
                                            >
                                                {{ framework.name }}
                                            </span>
                                            <span class="text-white/70 text-sm"
                                                >{{
                                                    framework.proficiency
                                                }}%</span
                                            >
                                        </div>
                                        <div
                                            class="w-full bg-white/20 rounded-full h-2 backdrop-blur-sm"
                                        >
                                            <div
                                                class="bg-gradient-to-r from-cyan-400 to-blue-400 h-2 rounded-full transition-all duration-1000 shadow-lg"
                                                :style="{
                                                    width:
                                                        framework.proficiency +
                                                        '%',
                                                }"
                                            ></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- Platforms -->
                            <div
                                class="backdrop-blur-xl bg-white/10 rounded-2xl p-6 border border-white/20"
                            >
                                <h4
                                    class="text-xl font-semibold text-white mb-6 flex items-center"
                                >
                                    <div
                                        class="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mr-3"
                                    ></div>
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

        <!-- Frameworks Grid Section -->
        <section id="frameworks-grid" class="py-16 relative z-10">
            <div class="container mx-auto px-6">
                <div
                    class="backdrop-blur-xl bg-white/5 rounded-3xl p-12 border border-white/20 shadow-2xl"
                >
                    <div class="text-center mb-12">
                        <h3 class="text-3xl font-bold text-white mb-4">
                            Frameworks & Technologies
                        </h3>
                        <div
                            class="w-24 h-1 bg-gradient-to-r from-orange-400 to-pink-400 mx-auto rounded-full"
                        ></div>
                    </div>
                    <div
                        class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
                    >
                        <!-- Framework Cards -->
                        <div
                            v-for="framework in techFrameworks"
                            :key="framework.name"
                            class="backdrop-blur-lg bg-white/10 p-6 rounded-2xl border border-white/20 flex flex-col items-center text-center hover:shadow-2xl hover:bg-white/15 transition-all duration-300 shadow-lg group hover:scale-105"
                        >
                            <div
                                class="w-16 h-16 backdrop-blur-sm rounded-full flex items-center justify-center mb-4 border group-hover:scale-110 transition-transform duration-300"
                                :class="framework.bgColor"
                                :style="{ borderColor: framework.borderColor }"
                            >
                                <div
                                    class="w-8 h-8"
                                    :class="framework.iconColor"
                                    v-html="framework.icon"
                                ></div>
                            </div>
                            <h3 class="font-bold text-white mb-1">
                                {{ framework.name }}
                            </h3>
                            <p class="text-sm text-white/70">
                                {{ framework.description }}
                            </p>
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
                    <div
                        class="flex justify-center space-x-2 flex-wrap gap-4"
                    >
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
// Sample data - replace with your actual projects and information
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
    },
    {
        name: "DickPic",
        category: "Photography",
        description:
            "Advanced image processing app for detecting sensitive images & videos",
        iconName: "dickpic",
        color: "#F59E0B",
        technologies: ["SensitiveContentAnalysis", "QuickLook", "Photos"],
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

const frameworks = [
    { name: "SwiftUI", proficiency: 95 },
    { name: "UIKit", proficiency: 90 },
    { name: "Core Data", proficiency: 85 },
    { name: "CloudKit", proficiency: 80 },
    { name: "Combine", proficiency: 85 },
    { name: "Core ML", proficiency: 75 },
];

const platforms = [
    "iOS",
    "macOS",
    "visionOS",
    "iPadOS",
    "watchOS",
    "tvOS",
    "Web",
    "Android",
];

const techFrameworks = [
    {
        name: "Swift",
        description: "Primary language",
        bgColor: "bg-orange-400/20",
        borderColor: "rgba(251, 146, 60, 0.3)",
        iconColor: "text-orange-400",
        icon: `<svg viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8">
      <path d="M21.984 16.348c.056-.112.056-.224.112-.336 1.346-5.272-1.851-11.44-7.347-14.693 2.412 3.253 3.365 7.122 2.524 10.599-.056.28-.168.617-.28.897a5.173 5.173 0 0 1-.45-.28S11.104 9.17 5.273 3.282c-.169 0 3.14 4.71 6.841 8.58-1.738-1.01-6.673-4.542-9.758-7.403.337.617.842 1.234 1.346 1.851 2.58 3.309 5.945 7.346 9.98 10.43-2.86 1.74-6.842 1.851-10.88 0-1.01-.448-1.85-1.009-2.804-1.682 1.682 2.636 4.318 5.048 7.459 6.337 3.757 1.627 7.57 1.515 10.318 0h.057c.112-.056.224-.112.336-.224 1.346-.673 3.982-1.402 5.44 1.402.392.785.728 1.402.952 2.019.168.617.28 1.178.28 1.85-1.626-3.309-5.44-2.019-7.514-1.122Z" />
    </svg>`,
    },
    {
        name: "SwiftUI",
        description: "UI framework",
        bgColor: "bg-blue-400/20",
        borderColor: "rgba(96, 165, 250, 0.3)",
        iconColor: "text-blue-400",
        icon: `<svg viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8">
      <path d="M12.75 2.25h-1.5A2.25 2.25 0 0 0 9 4.5v15A2.25 2.25 0 0 0 11.25 21h1.5A2.25 2.25 0 0 0 15 18.75v-15a2.25 2.25 0 0 0-2.25-2.25Z" />
      <path d="M5.25 6.75h-1.5A2.25 2.25 0 0 0 1.5 9v7.5a2.25 2.25 0 0 0 2.25 2.25h1.5A2.25 2.25 0 0 0 7.5 16.5V9a2.25 2.25 0 0 0-2.25-2.25Z" />
      <path d="M20.25 6.75h-1.5A2.25 2.25 0 0 0 16.5 9v7.5a2.25 2.25 0 0 0 2.25 2.25h1.5A2.25 2.25 0 0 0 22.5 16.5V9a2.25 2.25 0 0 0-2.25-2.25Z" />
    </svg>`,
    },
    {
        name: "Core Data",
        description: "Data persistence",
        bgColor: "bg-purple-400/20",
        borderColor: "rgba(167, 139, 250, 0.3)",
        iconColor: "text-purple-400",
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="w-8 h-8">
      <path d="M14.5 3.5h-5a3 3 0 0 0-3 3v11a3 3 0 0 0 3 3h5a3 3 0 0 0 3-3v-11a3 3 0 0 0-3-3Z" />
      <path d="M9.5 8.5h5M9.5 11.5h5M9.5 14.5h3" />
    </svg>`,
    },
    {
        name: "ARKit",
        description: "Augmented reality",
        bgColor: "bg-green-400/20",
        borderColor: "rgba(74, 222, 128, 0.3)",
        iconColor: "text-green-400",
        icon: `<svg viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
    </svg>`,
    },
    {
        name: "HealthKit",
        description: "Health data",
        bgColor: "bg-red-400/20",
        borderColor: "rgba(248, 113, 113, 0.3)",
        iconColor: "text-red-400",
        icon: `<svg viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8">
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
    </svg>`,
    },
    {
        name: "Combine",
        description: "Reactive programming",
        bgColor: "bg-yellow-400/20",
        borderColor: "rgba(250, 204, 21, 0.3)",
        iconColor: "text-yellow-400",
        icon: `<svg viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8">
      <path d="M17.5 4.5c-1.95 0-4.05.4-5.5 1.5-1.45-1.1-3.55-1.5-5.5-1.5-1.45 0-2.99.22-4.28.79C1.49 5.62 1 6.33 1 7.14v11.28c0 .81.49 1.52 1.22 1.85 1.3.57 2.84.79 4.28.79 1.95 0 4.05-.4 5.5-1.5 1.45 1.1 3.55 1.5 5.5 1.5 1.45 0 2.99-.22 4.28-.79.73-.33 1.22-1.04 1.22-1.85V7.14c0-.81-.49-1.52-1.22-1.85-1.3-.57-2.83-.79-4.28-.79z" />
    </svg>`,
    },
    {
        name: "CloudKit",
        description: "Cloud storage",
        bgColor: "bg-indigo-400/20",
        borderColor: "rgba(129, 140, 248, 0.3)",
        iconColor: "text-indigo-400",
        icon: `<svg viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8">
      <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" />
    </svg>`,
    },
    {
        name: "MapKit",
        description: "Maps & location",
        bgColor: "bg-pink-400/20",
        borderColor: "rgba(244, 114, 182, 0.3)",
        iconColor: "text-pink-400",
        icon: `<svg viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z" />
    </svg>`,
    },
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
