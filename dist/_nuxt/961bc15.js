(window.webpackJsonp=window.webpackJsonp||[]).push([[11,2,4,5,6,7,8,9,10],{247:function(t,e,l){"use strict";l.r(e);var r={emits:{pGo:null},methods:{pGoEmit:function(t){this.$emit("pGo",t)}}},n=l(42),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"text-white text-base flex flex-row gap-5"},[l("btnTemplate",{attrs:{bType:"Nav",bDest:"About",bText:"About Me"},on:{gcGo:t.pGoEmit}}),t._v(" "),l("btnTemplate",{attrs:{bType:"Nav",bDest:"Skills",bText:"My Skills"},on:{gcGo:t.pGoEmit}}),t._v(" "),l("btnTemplate",{attrs:{bType:"Nav",bDest:"Projects",bText:"My Projects"},on:{gcGo:t.pGoEmit}}),t._v(" "),l("btnTemplate",{attrs:{bType:"Nav",bDest:"Contact",bText:"Contact Me"},on:{gcGo:t.pGoEmit}})],1)}),[],!1,null,null,null);e.default=component.exports},248:function(t,e,l){"use strict";l.r(e);var r={props:{pDate:String,pTitle:String,pDescription:String,pLanguages:String,pGitHub:String,pInternal:String,pExternal:String}},n=l(42),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"flex flex-col gap-4 bg-nightrider rounded-2xl shadow-lg p-8 w-80 text-white font-normal"},[l("div",{staticClass:"flex flex-row justify-between items-center s:text-xs md:text-base"},[l("p",[t._v(t._s(t.pDate))]),t._v(" "),l("div",{staticClass:"text-slateblue"},[l("a",{directives:[{name:"show",rawName:"v-show",value:t.pGitHub,expression:"pGitHub"}],attrs:{href:t.pGitHub}},[l("i",{staticClass:"fa-brands fa-github pr-2 s:w-6 s:h-6 md:w-8 md:h-8 hover:text-lavendergrey"})]),t._v(" "),l("a",{directives:[{name:"show",rawName:"v-show",value:t.pExternal,expression:"pExternal"}],attrs:{href:t.pExternal}},[l("i",{staticClass:"fa-solid fa-arrow-up-right-from-square s:w-6 s:h-6 md:w-8 md:h-8 hover:text-lavendergrey"})]),t._v(" "),l("NuxtLink",{directives:[{name:"show",rawName:"v-show",value:t.pInternal,expression:"pInternal"}],attrs:{to:""}},[l("i",{staticClass:"fa-solid fa-arrow-up-right-from-square s:w-6 s:h-6 md:w-8 md:h-8 hover:text-lavendergrey"})])],1)]),t._v(" "),l("p",{staticClass:"s:text-base md:text-2xl font-semibold"},[t._v(t._s(t.pTitle))]),t._v(" "),l("p",{staticClass:"s:text-sm md:text-xl"},[t._v(t._s(t.pDescription))]),t._v(" "),l("p",{staticClass:"s:text-xs md:text-base"},[t._v(t._s(t.pLanguages))])])}),[],!1,null,null,null);e.default=component.exports},249:function(t,e,l){"use strict";l.r(e);var r={emits:{gpGo:null},methods:{gpGoEmit:function(t){this.$emit("gpGo",t)}}},n=l(42),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"flex flex-col s:gap-4 md:gap-12 text-white"},[t._m(0),t._v(" "),l("p",{staticClass:"s:text-sm s:max-w-xs s:break-words md:max-w-none md:text-2xl"},[t._v("I am a software developer who also enjoys frontend and backened development.")]),t._v(" "),l("heronav",{staticClass:"s:invisible md:visible",on:{pGo:t.gpGoEmit}})],1)}),[function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("h1",{staticClass:"s:text-3xl md:text-6xl"},[t._v("Hi, I am"),l("br"),l("span",{staticClass:"font-bold"},[t._v("Kaylee Williams.")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{Heronav:l(247).default})},250:function(t,e,l){"use strict";l.r(e);var r={props:{show:Boolean},methods:{showMore:function(t){0==this.show?this.show=!0:this.show=!1}}},n=l(42),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"flex flex-col s:text-2xl s:items-start md:text-4xl s:gap-8 md:gap-16 md:items-center"},[l("p",{staticClass:"font-bold"},[t._v("My Projects")]),t._v(" "),l("div",{staticClass:"flex flex-row s:justify-start mb:justify-center s:gap-5 md:gap-10 flex-wrap"},[l("project",{attrs:{pDate:"30/03/2022",pTitle:"League Player Tracker",pDescription:"A Discord bot designed to track multiple players to help improve efficency within teams.",pLanguages:"Python, Discord, RiotAPI & MongoDB",pGitHub:"",pInternal:"",pExternal:""}}),t._v(" "),l("project",{attrs:{pDate:"15/05/2022",pTitle:"Portfolio Websote",pDescription:"A website to display projects I work on.",pLanguages:"Vue.js, Nuxt.js & Tailwind CSS",pGitHub:"https://github.com/KayleeWilliams/portfolio",pInternal:"",pExternal:""}})],1),t._v(" "),l("btnTemplate",{directives:[{name:"show",rawName:"v-show",value:0==t.show,expression:"show == false"}],attrs:{bType:"Show",bText:"Show More",bUrl:"#"},on:{buttonClick:t.showMore}}),t._v(" "),l("btnTemplate",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],attrs:{bType:"Show",bText:"Show Less",bUrl:"#"},on:{buttonClick:t.showMore}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Project:l(248).default})},251:function(t,e,l){"use strict";l.r(e);var r=l(42),component=Object(r.a)({},(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"flex flex-col gap-2 items-center w-0"},[l("div",{staticClass:"border-solid border border-white w-px h-12"}),t._v(" "),l("a",{attrs:{href:"#"}},[l("i",{staticClass:"fa-brands fa-twitter w-6 h-6 text-slateblue hover:text-lavendergrey"})]),t._v(" "),l("a",{attrs:{href:"#"}},[l("i",{staticClass:"fa-brands fa-instagram w-6 h-6 text-slateblue hover:text-lavendergrey"})]),t._v(" "),l("a",{attrs:{href:"https://www.linkedin.com/in/kaylee-williams-1559251bb/"}},[l("i",{staticClass:"fa-brands fa-linkedin-in w-6 h-6 text-slateblue hover:text-lavendergrey"})]),t._v(" "),l("a",{attrs:{href:"https://github.com/KayleeWilliams"}},[l("i",{staticClass:"fa-brands fa-github w-6 h-6 text-slateblue hover:text-lavendergrey"})])])}],!1,null,null,null);e.default=component.exports},252:function(t,e,l){"use strict";l.r(e);var r=l(42),component=Object(r.a)({},(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"flex flex-col s:gap-4 md:gap-8"},[l("p",{staticClass:"s:text-2xl md:text-4xl font-bold"},[t._v("About Me")]),t._v(" "),l("p",{staticClass:"s:text-sm s:max-w-xs md:text-2xl md:max-w-2xl"},[t._v("\n    Hi, my name is Kaylee. I am from the UK and have programming since I\n    started when I was 11. Currently I am a studying Computer Science at\n    university and will be graduating in 2023. During my free time, I like to\n    play games as well as manage Esport teams. \n  ")]),t._v(" "),l("btnTemplate",{attrs:{bText:"My CV"}})],1)}),[],!1,null,null,null);e.default=component.exports},253:function(t,e,l){"use strict";l.r(e);var r=l(42),component=Object(r.a)({},(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"flex flex-col gap-8 md:items-center"},[l("p",{staticClass:"s:text-2xl md:text-4xl font-bold"},[t._v(" My Skills ")]),t._v(" "),l("p",{staticClass:"s:text-sm s:max-w-xs md:text-2xl md:max-w-none"},[t._v(" The programming languages, frameworks & tools I use are")]),t._v(" "),l("div",{staticClass:"flex flex-row s:items-start s:gap-5 md:items-center md:gap-10"},[l("i",{staticClass:"fa-brands fa-python s:w-8 s:h-8 md:w-12 md:h-12"}),t._v(" "),l("i",{staticClass:"fa-brands fa-html5 s:w-8 s:h-8 md:w-12 md:h-12"}),t._v(" "),l("i",{staticClass:"fa-brands fa-css3 s:w-8 s:h-8 md:w-12 md:h-12"}),t._v(" "),l("i",{staticClass:"fa-brands fa-vuejs s:w-8 s:h-8 md:w-12 md:h-12"}),t._v(" "),l("i",{staticClass:"fa-brands fa-figma s:w-8 s:h-8 md:w-12 md:h-12"})])])}],!1,null,null,null);e.default=component.exports},254:function(t,e,l){"use strict";l.r(e);var r=l(42),component=Object(r.a)({},(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"flex flex-col s:items-start md:items-center s:gap-4 md:gap-16"},[l("p",{staticClass:"s:text-2xl md:text-4xl font-bold"},[t._v(" Contact Me! ")]),t._v(" "),t._m(0),t._v(" "),l("btnTemplate",{staticClass:"s:pt-4 md:pt-0",attrs:{bType:"Other",bURL:"mailto:kayleew795@gmail.com",bText:"Let's Chat!"}})],1)}),[function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("p",{staticClass:"s:text-sm s:max-w-xs md:text-2xl md:max-w-none"},[t._v(" I am currently looking for oppertunities."),l("br"),t._v("Please feel free to reach out for a chat. 😃 ")])}],!1,null,null,null);e.default=component.exports},255:function(t,e,l){"use strict";l.r(e);var r={name:"IndexPage",methods:{scrollTo:function(t){console.log(t);var e=this.$refs[t].offsetTop;window.scrollTo({top:e,left:0,behavior:"smooth"})}}},n=l(42),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"bg-fixed w-full",staticStyle:{"background-image":"url(https://cdn.discordapp.com/attachments/585237451770167337/973570495947604019/Desktop_-_3.png)"}},[l("div",{staticClass:"relative break-words font-sans text-white bg-gunpowder opacity-90 flex flex-row"},[l("socialbar",{staticClass:"w-0 s:invisible md:visible s:p-0 md:pl-8 xl:pl-16 fixed top-0"}),t._v(" "),l("div",{staticClass:"mx-auto flex flex-col s:gap-y-16 s:m-4 s:mt-16 sm:m-16 md:gap-y-32 xl:gap-y-96 xl:m-32 xl:mt-40 xl:w-5/6"},[l("hero",{on:{gpGo:t.scrollTo}}),t._v(" "),l("div",{ref:"About"},[l("about")],1),t._v(" "),l("div",{ref:"Skills"},[l("skills")],1),t._v(" "),l("div",{ref:"Projects"},[l("projects")],1),t._v(" "),l("div",{ref:"Contact",staticClass:"s:mb-32 md:mb-96 xl:mb-64"},[l("contact")],1)],1)],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Socialbar:l(251).default,Hero:l(249).default,About:l(252).default,Skills:l(253).default,Projects:l(250).default,Contact:l(254).default})}}]);