<template>
  <section class="pt-20 pb-20 bg-white relative -mb-10">
    <div class="container mx-auto">
      <div class="text-center mb-12">
        <h2 class="text-4xl font-bold text-Dark">BOARD OF DIRECTORS</h2>
      </div>
      <div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-20">
        <div v-for="director in directors" :key="director.id" class="bg-transparent overflow-hidden text-center">
          <div class="rounded-full overflow-hidden w-40 h-40 mx-auto mb-4 border-4 border-gray-300">
            <img :src="director.image" alt="Directors" class="w-full h-full object-cover" />
          </div>
          <h3 class="text-xl font-semibold">{{ director.name }}</h3>
          <p class="text-gray-500">{{ director.title }}</p>
        </div>
      </div>
      <div class="text-center mb-12 mt-20">
        <h2 class="text-4xl font-bold text-Dark">Olympic Development</h2>
      </div>
      <div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-2 mb-10 mx-auto pt-10 max-w-6xl">
        <div v-for="about in abouts" :key="about.id" class="bg-transparent overflow-hidden flex items-start mb-5">
          <div class="rounded-full overflow-hidden w-20 h-20 mb-4 flex-shrink-0">
            <img :src="about.icon" alt="abouts" class="w-full h-full object-cover" />
          </div>
          <div class="ml-4">
            <h3 class="text-xl font-semibold">{{ about.title }}</h3>
            <p class="text-gray-500 max-w-[450px]">{{ about.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import PakNorman from "@/assets/images/Directors/Pak-NES.jpg";
import IbuImelda from "@/assets/images/Directors/ibu-imelda.jpg";
import PakYannes from "@/assets/images/Directors/Pak-Yannes.jpg";
import PakVHG from "@/assets/images/Directors/Pak-Virthoun.jpg";

import ide from "@/assets/icons/Ide-Icon.svg";
import history from "@/assets/icons/History-Icon.svg";
import vision from "@/assets/icons/Vision-Icon.svg";
import earth from "@/assets/icons/Earth-Icon.svg";

export default {
  data() {
    return {
      directors: [
        {
          id: 1,
          name: "Norman Edward Sebastian",
          title: "Chief Executive Officer",
          image: PakNorman,
        },
        {
          id: 2,
          name: "Imelda Fransisca",
          title: "Vice Chief Executive Officer",
          image: IbuImelda,
        },
        {
          id: 3,
          name: "Yannes Pasaribu",
          title: "Business Development and Engineering Director",
          image: PakYannes,
        },
        {
          id: 4,
          name: "Virthoun Hutagalung",
          title: "Legal, General Affair, Estate Director",
          image: PakVHG,
        },
      ],
      abouts: [
        {
          id: 1,
          icon: vision,
          title: "Vision",
          description:
            "Olympic Development is crafting One Central Business District with a vision to create a fully integrated and comprehensive residential area, poised to become the symbol of future living in the heart of Bogor City.",
        },
        {
          id: 2,
          icon: ide,
          title: "Parent and Design",
          description: "To become a prominent satellite business hub, as well as an attractive tourist and culinary destination, with an integrated residential environment.",
        },
        {
          id: 3,
          icon: history,
          title: "History",
          description: "The master planning and design process for Olympic Development's project began in 2017, establishing it as a well-thought-out and structured endeavor.",
        },
        {
          id: 4,
          icon: earth,
          title: "Integrated Environment",
          description:
            "With prime access to transportation infrastructure, strong demographic growth, and a diverse culinary scene, OCBD combines the harmony of work, recreation, and balanced living, all connected with the surrounding nature.",
        },
      ],
    };
  },
};
</script>
