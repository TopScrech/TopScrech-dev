<script setup>
defineProps({
    platform: {
        type: Object,
        required: true
    }
});
</script>

<template>
    <div
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
</template>