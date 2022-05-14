<template>
  <div>
    <a
      class="text-base select-none bg-slateblue hover:bg-lavendergrey rounded-md shadow-md p-5 w-40"
      v-show="bType == 'Nav'"
      v-bind:href="bURL"
      v-on:click="$emit('gcGo', bDest)"
    >
      {{ bText }}
    </a>

    <a
      class="text-base select-none bg-slateblue hover:bg-lavendergrey rounded-md shadow-md p-5 w-40"
      v-show="bType == 'Show'"
      v-bind:href="bURL"
      v-on:click="$emit('buttonClick')"
    >
      {{ bText }}
    </a>

    <a
      class="text-base select-none bg-slateblue hover:bg-lavendergrey rounded-md shadow-md p-5 w-40"
      v-show="bType == 'Other'"
      v-bind:href="bURL"
    >
      {{ bText }}
    </a>
  </div>
</template>

<script setup>
export default {
  props: {
    bType: String,
    bText: String,
    bURL: String,
    bDest: String,
  },
};
</script>
