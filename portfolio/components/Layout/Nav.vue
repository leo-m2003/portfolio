<script setup lang="ts">
const { path } = defineProps({
    path: {
        type: String,
        default: "/",
    },
})
</script>

<template>
  <div class="flex flex-col justify-between items-center h-full py-4">
    <img src="~/assets/img/logo-LM.svg" alt="logo" class="max-w-[100px]" />
    <nav>
      <ul class="flex flex-col gap-14">
        <li class="relative">
          <span
            :class="[ path === 'about' ? 'w-[160px] opacity-100' : 'w-0 opacity-0' , 'bg-secondary hover:w-[160px] h-[80px] absolute -right-2 -top-1/3 rounded-2xl  transition-all ease-linear  hover:opacity-100 z-10 flex justify-end items-center pr-2']"
          >
            <NuxtLink to="/about" class="block h-[48px]">
              <Icon
                name="pepicons-pop:cv"
                class="h-[48px] w-[48px] text-primary"
              />
            </NuxtLink>
          </span>
          <div class="h-[48px]">
            <Icon name="pepicons-pop:cv" class="h-[48px] w-[48px]" />
          </div>
        </li>
        <li class="relative">
          <span
          :class="[ path === 'contact' ? 'w-[160px] opacity-100' : 'w-0 opacity-0' , 'bg-secondary hover:w-[160px] h-[80px] absolute -right-2 -top-1/3 rounded-2xl  transition-all ease-linear  hover:opacity-100 z-10 flex justify-end items-center pr-2']"
          >
            <NuxtLink to="/contact" class="block h-[48px]">
              <Icon
                name="gravity-ui:envelope"
                class="h-[48px] w-[48px] text-primary"
              />
            </NuxtLink>
          </span>
          <div class="h-[48px]">
            <Icon name="gravity-ui:envelope" class="h-[48px] w-[48px]" />
          </div>
        </li>
        <li class="relative">
          <span
          :class="[ path === 'portfolio' ? 'w-[160px] opacity-100' : 'w-0 opacity-0' , 'bg-secondary hover:w-[160px] h-[80px] absolute -right-2 -top-1/3 rounded-2xl  transition-all ease-linear  hover:opacity-100 z-10 flex justify-end items-center pr-2']"
          >
            <NuxtLink to="/portfolio" class="block h-[48px]">
              <Icon
                name="octicon:briefcase-16"
                class="h-[48px] w-[48px] text-primary"
              />
            </NuxtLink>
          </span>
          <div class="h-[48px]">
            <Icon name="octicon:briefcase-16" class="h-[48px] w-[48px]" />
          </div>
        </li>
      </ul>
    </nav>
    <NuxtLink to="/">
      <Icon name="pepicons-pop:leave" class="h-[48px] w-[48px]" />
    </NuxtLink>
  </div>
</template>
