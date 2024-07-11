<script setup lang="ts">
const dataExperience = [
  {
    title: "(Développeur web/Front-End)... en cours d’acquisistion",
    arrow: true,
    arrowType: "dashed",
  },
  {
    title: "Alternance de 3ème année en développement web (1 an)",
    subtitle: "Nexton Agency - Saint Augustin",
    arrow: true,
    arrowType: "default",
  },
  {
    title: "Stage de fin de 2ème année en développement web (3 mois)",
    subtitle: "Nexton Agency - Saint Augustin",
    arrow: true,
    arrowType: "default",
  },
  {
    title: "BUT Métiers du Multimédia et de l’Internet",
    subtitle: "IUT de Limousin - Limoges",
    arrow: true,
    arrowType: "default",
  },
  {
    title: "BAC Général - Mathématiques / Physiques-Chimie - Mention Bien",
    subtitle: "Lycée Paul Eluard - Saint Junien",
    arrow: false,
  }
];

const isOpenModalFront = ref(false);
const isOpenModalBack = ref(false);

function toggleModal(modal: string) {
  if (modal === "front") {
    isOpenModalFront.value = !isOpenModalFront.value;
  } else {
    isOpenModalBack.value = !isOpenModalBack.value;
  }

}
</script>

<template>
  <div class="bg-light h-screen p-12 flex justify-center items-center">
    <div class="bg-card">
      <LayoutNav :path="getPath()" />
      <div
        class="h-full bg-red-500 2xl:bg-light w-full rounded-[42px] text-primary p-8 flex flex-col"
      >
        <div class="flex font-bold items-center pb-3">
          <h1 class="text-4xl pb-6">Curriculum vitæ</h1>
        </div>
        <div class="grid grid-cols-4 grid-rows-6 gap-6 flex-grow">
          <div class="col-span-3 row-span-4 grid grid-col-1 grid-rows-3 gap-6">
            <Card class="px-8 py-6" color="blue">
              <div class="flex flex-col justify-between h-full">
                <h3 class="text-light text-3xl font-bold">Bienvenue !</h3>
                <p class="text-light text-xl">
                  Je te laisse découvrir mes différentes compétences ainsi qu’un
                  petite présentation de moi-même. Bonne lecture !!
                </p>
              </div>
            </Card>
            <Card class="row-span-2 px-8 py-6">
              <div class="flex flex-col h-full justify-between">
                <h3 class="font-bold text-2xl">Qui suis-je ?</h3>
                <p class="leading-8 text-xl relative">
                  <a
                    href="https://nexton-consulting.com/"
                    class="absolute right-5 -top-20"
                    ><img src="~/assets/img/bubble.png" alt="bubble-nexton"
                  /></a>
                  <strong>Étudiant</strong> en
                  <strong>développement web</strong>, et actuellement en
                  <strong>alternance</strong> chez <strong>Nexton</strong>,
                  j’allie théorie et pratique pour acquérir une expérience
                  solide. Je suis passionné par la
                  <strong>création d'expériences utilisateur</strong>
                  exceptionnelles et doté d'une capacité d'adaptation rapide, je
                  suis capable de travailler efficacement en
                  <strong>équipe</strong> tout en étant
                  <strong>autonome</strong> sur des projets. Mon objectif est
                  d'apporter des <strong>solutions innovantes</strong> et
                  <strong>fonctionnelles</strong> pour répondre aux
                  <strong>besoins des utilisateurs</strong>.
                </p>
              </div>
            </Card>
          </div>
          <Card class="row-span-6 relative px-4 py-3">
            <h2
              class="absolute -top-10 w-full flex justify-center left-0 text-xl font-bold"
            >
              Parcours/Expérience
            </h2>
            <div class="h-full flex flex-col justify-between">
              <div v-for="item in dataExperience">
                <ExperienceItem :item="item" />
              </div>
            </div>
          </Card>
          <Card class="row-span-2 p-4 relative">
            <div class="flex flex-col justify-between h-full">
              <h3 class="w-full text-center text-2xl font-bold">Front-End Skills</h3>
              <div class="w-full flex flex-col items-center justify-between h-full pt-4 pb-2">
                <div class="flex gap-16">
                  <img src="~/../assets/img/skills/html5.png" alt="logo-skill" class="max-h-[50px]"/>
                  <img src="~/../assets/img/skills/css.png" alt="logo-skill" class="max-h-[50px]"/>
                </div>
                <img src="~/../assets/img/skills/javascript.png" alt="logo-skill" class="max-h-[50px]"/>
              </div>
              <button @click="toggleModal('front')" class="self-end h-[24px] hover:rotate-180 duration-300 transition ease-in-out">
                <Icon
                  name="subway:round-arrow-1"
                  class="h-[24px] w-[24px] text-primary"
                />
              </button>
            </div>
            <Card :class="[isOpenModalFront ? 'absolute' : 'hidden' , 'row-span-2 p-4 h-full w-full top-0 left-0']">
              <div class="flex flex-col justify-between h-full">
                <h3 class="w-full text-center text-2xl font-bold">Frameworks Front</h3>
                <div class="w-full flex flex-col items-center justify-between h-full py-4">
                  <div class="grid grid-cols-3 gap-6 h-full">
                    <img src="~/../assets/img/skills/next.png" alt="logo-skill" class="max-h-[50px]"/>
                    <img src="~/../assets/img/skills/nuxt.png" alt="logo-skill" class="max-h-[50px]"/>
                    <img src="~/../assets/img/skills/vue.png" alt="logo-skill" class="max-h-[50px]"/>
                    <img src="~/../assets/img/skills/tailwind.png" alt="logo-skill" class="max-h-[50px]"/>
                    <img src="~/../assets/img/skills/sass.png" alt="logo-skill" class="max-h-[50px]"/>
                    <img src="~/../assets/img/skills/react.png" alt="logo-skill" class="max-h-[50px]"/>
                  </div>
                </div>
                <button @click="toggleModal('front')" class="self-end h-[24px] hover:rotate-180 duration-300 transition ease-in-out">
                  <Icon
                    name="subway:round-arrow-1"
                    class="h-[24px] w-[24px] text-primary"
                  />
                </button>
              </div>
            </Card>
          </Card>
          <Card class="row-span-2 p-4 relative">
            <div class="flex flex-col justify-between h-full">
              <h3 class="w-full text-center text-2xl font-bold">Back-End Skills</h3>
              <div class="w-full flex flex-col items-center justify-between h-full py-4">
                <div class="flex gap-12">
                  <img src="~/../assets/img/skills/php.png" alt="logo-skill" class="max-h-[50px]"/>
                  <img src="~/../assets/img/skills/mysql.png" alt="logo-skill" class="max-h-[50px]"/>
                </div>
                <img src="~/../assets/img/skills/mongo.png" alt="logo-skill" class="max-h-[50px]"/>
              </div>
              <button @click="toggleModal('back')" class="self-end h-[24px] hover:rotate-180 duration-300 transition ease-in-out">
                <Icon
                  name="subway:round-arrow-1"
                  class="h-[24px] w-[24px] text-primary"
                />
              </button>
            </div>
            <Card :class="[isOpenModalBack ? 'absolute' : 'hidden' , 'row-span-2 p-4 h-full w-full top-0 left-0']">
              <div class="flex flex-col justify-between h-full">
                <h3 class="w-full text-center text-2xl font-bold">Frameworks Front</h3>
                <div class="w-full flex items-center justify-center h-full py-4">
                  <img src="~/../assets/img/skills/symfony.png" alt="">
                </div>
                <button @click="toggleModal('back')" class="self-end h-[24px] hover:rotate-180 duration-300 transition ease-in-out">
                  <Icon
                    name="subway:round-arrow-1"
                    class="h-[24px] w-[24px] text-primary"
                  />
                </button>
              </div>
            </Card>
          </Card>
          <Card class="row-span-2 p-4">
            <div class="flex flex-col justify-between h-full">
              <h3 class="w-full text-center text-2xl font-bold">Other Skills</h3>
              <div class="w-full flex flex-col items-center gap-4">
                <div class="flex gap-16">
                  <img src="~/../assets/img/skills/adobe.png" alt="logo-skill" class="max-h-[50px]"/>
                  <img src="~/../assets/img/skills/figma.png" alt="logo-skill" class="max-h-[50px]"/>
                </div>
                <img src="~/../assets/img/skills/git.png" alt="logo-skill" class="max-h-[50px]"/>
              </div>
              <span></span>
            </div>
          </Card>
        </div>
      </div>
    </div>
  </div>
</template>
