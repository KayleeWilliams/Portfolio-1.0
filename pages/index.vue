<template>
  <div
    class="bg-fixed w-full"
    style="
      background-image: url(https://cdn.discordapp.com/attachments/585237451770167337/973570495947604019/Desktop_-_3.png);
    "
  >
    <div
      class="relative break-words font-sans text-white bg-gunpowder opacity-90 flex flex-row"
    >
      <socialbar class="w-0 s:invisible md:visible s:p-0 md:pl-8 xl:pl-16 fixed top-0" />
      <div class="mx-auto flex flex-col s:gap-y-16 s:m-4 s:mt-16 sm:m-16 md:gap-y-32 xl:gap-y-96 xl:m-32 xl:mt-40 xl:w-5/6">
        <hero @gpGo="scrollTo" class="" />
        <div ref="About">
          <about />
        </div>
        <div ref="Skills">
          <skills />
        </div>
        <div ref="Projects">
          <projects />
        </div>
        <div ref="Contact" class="s:mb-32 md:mb-96 xl:mb-64">
          <contact />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "IndexPage",

  methods: {
    scrollTo(refName) {
      console.log(refName);
      // var element = this.$refs[refName];
      // var top = element.offsetTop;

      // window.scrollTo(0, top);

      const top = this.$refs[refName].offsetTop;
      window.scrollTo({
        top: top,
        left: 0,
        behavior: "smooth",
      });
    },
  },
};
</script>
