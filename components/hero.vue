<template>
    <div class="flex flex-col s:gap-4 md:gap-12 text-white">
        <h1 class="s:text-3xl md:text-6xl">Hi, I am<br><span class="font-bold">Kaylee Williams.</span></h1>
        <p class="s:text-sm s:max-w-xs s:break-words md:max-w-none md:text-2xl">I am a Software Developer ...</p>
        <heronav class="s:invisible md:visible" @pGo="gpGoEmit"/>
    </div>
</template>

<script setup>
export default {
  emits: {
    gpGo: null,
  },
  methods: {
    gpGoEmit(refName) {
      this.$emit("gpGo", refName)

   },
}
};
</script>
