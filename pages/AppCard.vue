<template>
  <div
    class="backdrop-blur-xl bg-white/10 rounded-2xl shadow-2xl hover:shadow-3xl hover:bg-white/15 transition-all duration-500 p-6 border border-white/20 group hover:scale-105 flex flex-col"
    @mouseleave="handleMouseLeave"
  >
    <div class="flex items-start justify-between mb-4">
      <div class="flex items-center flex-1">
        <div
          class="w-16 h-16 rounded-2xl flex items-center justify-center mr-4 shadow-lg group-hover:scale-110 transition-transform duration-300 overflow-hidden ring-1 ring-white/25"
        >
          <img
            :src="`/icons/${app.iconName}.webp`"
            :alt="`${app.name} icon`"
            class=""
          />
        </div>
        <div class="flex-1">
          <h4 class="text-xl font-semibold tracking-tight text-white">
            {{ app.name }}
          </h4>
          <p class="text-white/70">{{ app.category }}</p>
        </div>
      </div>

      <!-- Download Button with Dropdown -->
      <div class="relative self-start" v-if="hasDownloadLinks">
        <button
          @click="toggleDropdown"
          class="glass text-white p-2 rounded-lg transition-all duration-200 border border-white/30 flex items-center gap-1 focus:outline-none"
          :class="{ 'bg-white/30': isDropdownOpen }"
        >
          <!-- SF Symbol-like square.and.arrow.down icon -->
          <svg
            class="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            stroke-width="2"
          >
            <!-- Square -->
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
            <!-- Arrow down -->
            <path d="M12 8v8m-4-4l4 4 4-4" />
          </svg>
        </button>

        <!-- Dropdown Menu -->
        <div
          v-if="isDropdownOpen"
          class="absolute right-0 top-full mt-2 w-48 z-50"
        >
          <!-- Solid background layer to block content -->
          <div
            class="absolute inset-0 bg-slate-800/95 rounded-xl shadow-2xl"
          ></div>
          <!-- Blur overlay for glassmorphism effect -->
          <div
            class="absolute inset-0 backdrop-blur-xl bg-white/10 rounded-xl"
          ></div>
          <!-- Content layer -->
          <div
            class="relative border border-white/30 rounded-xl overflow-hidden"
          >
            <!-- App Store Link -->
            <a
              v-if="app.downloads?.appStore"
              :href="appStoreUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center gap-3 px-4 py-3 text-white hover:bg-white/20 transition-colors duration-200 border-b border-white/20 last:border-b-0"
              @click="closeDropdown"
            >
              <div class="w-6 h-6 text-white-400">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path
                    d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701"
                  />
                </svg>
              </div>
              <span class="text-sm font-medium">App Store</span>
            </a>

            <!-- AltStore PAL Link -->
            <a
              v-if="app.downloads?.altStore"
              :href="altStoreUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center gap-3 px-4 py-3 text-white hover:bg-white/20 transition-colors duration-200 border-b border-white/20 last:border-b-0"
              @click="closeDropdown"
            >
              <div class="w-6 h-6 text-purple-400">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <!-- Background rounded rectangle -->
                  <rect width="24" height="24" rx="4.5" ry="4.5" fill="currentColor" opacity="0.3"/>
                  <!-- Outer diamond layer -->
                  <rect x="6" y="6" width="12" height="12" rx="3" ry="3" fill="currentColor" opacity="0.6" transform="rotate(45 12 12)"/>
                  <!-- Inner diamond layer -->
                  <rect x="8.25" y="8.25" width="7.5" height="7.5" rx="1.9" ry="1.9" fill="currentColor" opacity="0.8" transform="rotate(45 12 12)"/>
                  <!-- Center diamond -->
                  <rect x="9.75" y="9.75" width="4.5" height="4.5" rx="1.1" ry="1.1" fill="currentColor" transform="rotate(45 12 12)"/>
                </svg>
              </div>
              <span class="text-sm font-medium">AltStore PAL</span>
            </a>

            <!-- GitHub Link -->
            <a
              v-if="app.downloads?.github"
              :href="githubUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center gap-3 px-4 py-3 text-white hover:bg-white/20 transition-colors duration-200 border-b border-white/20 last:border-b-0"
              @click="closeDropdown"
            >
              <div class="w-6 h-6 text-gray-300">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path
                    d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                  />
                </svg>
              </div>
              <span class="text-sm font-medium">GitHub</span>
            </a>
          </div>
        </div>
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
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";

const props = defineProps({
  app: {
    type: Object,
    required: true,
    validator: (app) => {
      return (
        app &&
        typeof app.name === "string" &&
        typeof app.category === "string" &&
        typeof app.description === "string" &&
        typeof app.iconName === "string" &&
        Array.isArray(app.technologies)
      );
    },
  },
});

const isDropdownOpen = ref(false);

const hasDownloadLinks = computed(() => {
  const downloads = props.app.downloads;
  return (
    downloads &&
    (downloads.appStore || downloads.altStore || downloads.github)
  );
});

const appStoreUrl = computed(() => {
  return props.app.downloads?.appStore
    ? `https://apps.apple.com/app/id${props.app.downloads.appStore}`
    : "";
});

const altStoreUrl = computed(() => {
  return props.app.downloads?.altStore
    ? `altstore://source?url=https://topscrech.dev/alt-store/source.json`
    : "";
});

const githubUrl = computed(() => {
  return props.app.downloads?.github
    ? `https://github.com/${props.app.downloads.github}`
    : "";
});

const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value;
};

const closeDropdown = () => {
  isDropdownOpen.value = false;
};

const handleMouseLeave = () => {
  if (isDropdownOpen.value) {
    closeDropdown();
  }
};

const handleClickOutside = (event) => {
  if (isDropdownOpen.value && !event.target.closest(".relative")) {
    closeDropdown();
  }
};

const handleScroll = () => {
  if (isDropdownOpen.value) {
    closeDropdown();
  }
};

onMounted(() => {
  document.addEventListener("click", handleClickOutside);
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  document.removeEventListener("click", handleClickOutside);
  window.removeEventListener("scroll", handleScroll);
});
</script>
