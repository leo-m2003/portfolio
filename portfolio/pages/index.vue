<script lang="ts" setup>
import { Icon } from "@iconify/vue";

definePageMeta({
  pageTransition: {
    name: 'rotate'
  }
})
</script>

<template>
    <div class="flex flex-col justify-between items-center p-8">
        <Header />
        <h1 class="text-2xl text-white flex flex-col gap-2">Bienvenue sur le portfolio de ... <span class="text-4xl text-yellow font-bold ">Léo Meunier !</span></h1>
        <NuxtLink to="aboutMe">
            <Icon icon="solar:arrow-up-broken" width="72" color="white"/>
        </NuxtLink to="aboutMe">
    </div>
</template>
