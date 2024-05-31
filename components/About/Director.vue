<template>
  <section class="pt-20 pb-20 bg-white relative -mb-10">
    <div class="container mx-auto">
      <div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <div v-for="director in directors" :key="director.id" class="bg-transparent overflow-hidden text-center">
          <div class="rounded-full overflow-hidden w-32 h-32 mx-auto mb-4 border-4 border-gray-300">
            <img :src="director.image" alt="Directors" class="w-full h-full object-cover" />
          </div>
          <h3 class="text-xl font-semibold">{{ director.name }}</h3>
          <p class="text-gray-500">{{ director.title }}</p>
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
    };
  },
};
</script>
