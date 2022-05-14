<template>
  <div class="flex flex-col s:text-2xl s:items-start md:text-4xl s:gap-8 md:gap-16 md:items-center">
    <p class="font-bold">My Projects</p>
    <div class="flex flex-row s:justify-start mb:justify-center s:gap-5 md:gap-10 flex-wrap">
      <project
        pDate="30/03/2022"
        pTitle="League Player Tracker"
        pDescription="A Discord bot designed to track multiple players to help improve efficency within teams."
        pLanguages="Python, Discord, RiotAPI & MongoDB"
        pGitHub=""
        pInternal=""
        pExternal=""
      />

      <project
        pDate="15/05/2022"
        pTitle="Portfolio Websote"
        pDescription="A website to display projects I work on."
        pLanguages="Vue.js, Nuxt.js & Tailwind CSS"
        pGitHub="https://github.com/KayleeWilliams/portfolio"
        pInternal=""
        pExternal=""
      />

      <!-- <project
        pDate="15/05/2022"
        pTitle="Portfolio Websote"
        pDescription="A website to display projects I work on."
        pLanguages="Vue.js, Nuxt.js & Tailwind CSS"
        pGitHub="https://github.com/KayleeWilliams"
        pInternal=""
        pExternal=""
      /> -->

      <!-- v-show="show" : for projects after this point -->
      
      <!-- <project
        v-show="show"
        pDate="01/01/2022"
        pTitle="Placeholder"
        pDescription="The bee movie was a good movie."
        pLanguages="League is fun"
        pGitHub="https://github.com/KayleeWilliams"
        pInternal=""
        pExternal="https://google.co.uk/"
      /> -->
    </div>

    <btnTemplate bType="Show" v-show="show == false" bText="Show More" bUrl="#" @buttonClick="showMore" />
    <btnTemplate bType="Show" v-show="show" bText="Show Less" bUrl="#" @buttonClick="showMore" />

  </div>
</template>

<script setup>
export default {
  props: {
    show: Boolean,
  },
  methods: {
    showMore(event) {
      if (this.show == false) {
        this.show = true;
      } else {
        this.show = false;
      }
    },
  },
};
</script>
