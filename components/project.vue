<template>
  <div class="flex flex-col gap-4 bg-nightrider rounded-2xl shadow-lg p-8 w-80 text-white font-normal">
    <div class="flex flex-row justify-between items-center s:text-xs md:text-base">
      <p>{{ pDate }}</p>
      <div class="text-slateblue">
        <a v-show="pGitHub" v-bind:href="pGitHub"> <i class="fa-brands fa-github pr-2 s:w-6 s:h-6 md:w-8 md:h-8 hover:text-lavendergrey" /></a>
        <a v-show="pExternal" v-bind:href="pExternal"> <i class="fa-solid fa-arrow-up-right-from-square s:w-6 s:h-6 md:w-8 md:h-8 hover:text-lavendergrey" /></a>
        <!-- NuxtLink for internal -->
        <NuxtLink v-show="pInternal" to="">  <i class="fa-solid fa-arrow-up-right-from-square s:w-6 s:h-6 md:w-8 md:h-8 hover:text-lavendergrey" /></NuxtLink> 
      </div>
    </div>

    <p class="s:text-base md:text-2xl font-semibold">{{ pTitle }}</p>
    <p class="s:text-sm md:text-xl">{{ pDescription }}</p>
    <p class="s:text-xs md:text-base">{{ pLanguages }}</p>
  </div>
</template>

<script setup>
export default {
  props: {
    pDate: String,
    pTitle: String,
    pDescription: String,
    pLanguages: String,
    pGitHub: String,
    pInternal: String,
    pExternal: String,
  },
};
</script>
