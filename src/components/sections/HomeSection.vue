<script setup>
import GithubIcon from "@/components/icons/GithubIcon.vue";
import LinkedInIcon from "@/components/icons/LinkedInIcon.vue";
import InstagramIcon from "@/components/icons/InstagramIcon.vue";
import TwitterIcon from "@/components/icons/TwitterIcon.vue";
</script>

<template>
  <section class="container pt-16">
    <div class="flex flex-col items-center">
      <div class="">
        <img src="@/assets/imgs/adiaryasuta.jpg" alt="dd"
             class="rounded-full w-40 ring-8 ring-slate-200 dark:ring-slate-700">
      </div>
      <div class="flex flex-col items-center mt-8">
        <h1 class="text-3xl text-slate-800 dark:text-slate-200">{{ $t('name') }}</h1>
        <p v-html="$t('description')" class="font-medium text-sm text-slate-500 text-center leading-relaxed mt-4 md:text-base dark:text-slate-400"></p>

        <div class="flex justify-center space-x-4 mt-4">
          <a
              class="text-slate-600 rounded p-2 hover:text-slate-700 active:text-slate-800 dark:text-slate-500 dark:hover:text-slate-400 dark:active:text-slate-300"
              href="https://github.com/adiiaryasutaa"
              target="_blank"
              rel="noopener noreferrer"
          >
            <github-icon class="w-5 h-5" />
          </a>
          <a
              class="text-slate-600 rounded p-2 hover:text-slate-700 active:text-slate-800 dark:text-slate-500 dark:hover:text-slate-400 dark:active:text-slate-300"
              href="https://www.linkedin.com/in/i-gusti-ngurah-agung-adi-aryasuta-32870723b"
              target="_blank"
              rel="noopener noreferrer"
          >
            <linked-in-icon class="w-5 h-5" />
          </a>
          <a
              class="text-slate-600 rounded p-2 hover:text-slate-700 active:text-slate-800 dark:text-slate-500 dark:hover:text-slate-400 dark:active:text-slate-300"
              href="https://instagram.com/adiiaryasutaa"
              target="_blank"
              rel="noopener noreferrer"
          >
            <instagram-icon class="w-5 h-5" />
          </a>
          <a
              class="text-slate-600 rounded p-2 hover:text-slate-700 active:text-slate-800 dark:text-slate-500 dark:hover:text-slate-400 dark:active:text-slate-300"
              href="https://twitter.com/lolcecep"
              target="_blank"
              rel="noopener noreferrer"
          >
            <twitter-icon class="w-5 h-5" />
          </a>
        </div>

        <router-link to="/about"
                     class="px-4 py-2 text-sm font-medium border border-slate-300 rounded mt-8 hover:bg-slate-100 active:bg-slate-200 focus:ring-2 focus:ring-slate-200 dark:text-slate-300 dark:border-slate-600 dark:hover:bg-slate-800 dark:active:bg-slate-700 dark:focus:ring-slate-700">
          {{ $t('see-more') }}
        </router-link>
      </div>
    </div>
  </section>
</template>