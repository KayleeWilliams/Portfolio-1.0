<template>
  <div class="text-white text-base flex flex-row gap-5">
    <btnTemplate bType="Nav" bDest="About" bText="About Me" @gcGo="pGoEmit"/>
    <btnTemplate bType="Nav" bDest="Skills" bText="My Skills" @gcGo="pGoEmit"/>
    <btnTemplate bType="Nav" bDest="Projects" bText="My Projects" @gcGo="pGoEmit"/>
    <btnTemplate bType="Nav" bDest="Contact" bText="Contact Me" @gcGo="pGoEmit"/>
    <!-- <btnTemplate bType="Nav" bText="My CV"/> -->
  </div>
</template>

<script setup>
export default {
  emits: {
    pGo: null,
  },
  methods: {
    pGoEmit(refName) {
      this.$emit("pGo", refName)
   },
}
};
</script>
