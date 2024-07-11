<template>
  <div class="bg-light h-screen flex justify-center items-center p-12">
    <div
      class="flex flex-col justify-between px-12 py-10 items-center h-full bg-primary rounded-[52px] text-light w-[1400px] box-shadow"
    >
      <div class="flex justify-between w-full items-center">
        <img src="~/assets/img/logo-LM.svg" alt="logo" />
        <p class="font-bold text-3xl">Front-End Developer</p>
      </div>
      <div class="flex w-full justify-between items-center relative">
        <img src="~/assets/img/img-home.png" alt="img-accueil" />
        <div class="flex flex-col gap-12 absolute right-0">
          <h1 class="text-5xl text-end">Bienvenue sur le portfolio de ...</h1>
          <p class="text-secondary font-bold text-6xl text-end">
            Léo Meunier !
          </p>
        </div>
      </div>
      <button>
        <NuxtLink to="/about" class="flex justify-center items-center">
          <Icon
            name="iconamoon:arrow-top-right-6-circle"
            class="h-[100px] w-[100px] -rotate-45"
          />
        </NuxtLink>
      </button>
    </div>
  </div>
</template>
