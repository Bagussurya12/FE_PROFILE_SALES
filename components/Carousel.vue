<template>
  <section class="pb-16 bg-white px-20">
    <div class="container mx-auto">
      <div class="w-full text-center">
        <div class="relative w-full overflow-hidden">
          <div class="flex transition-transform duration-700" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
            <div v-for="(image, index) in images" :key="index" class="min-w-full relative">
              <img :src="image" alt="" class="w-full h-[500px] object-cover rounded-xl" />
              <div class="absolute top-0 left-0 w-full h-full bg-black opacity-50 rounded-xl"></div>
            </div>
          </div>
          <button @click="prev" class="absolute top-1/2 left-4 transform -translate-y-1/2 bg-transparent hover:bg-Dark text-white font-bold px-4 py-2 rounded-full lg:text-6xl md:text-4xl sm:text-2xl">
            &#8592;
          </button>
          <button
            @click="next"
            class="absolute top-1/2 right-4 transform -translate-y-1/2 bg-transparent hover:bg-Dark text-white font-bold px-4 py-2 rounded-full lg:text-6xl md:text-4xl sm:text-2xl"
          >
            &#8594;
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import satu from "@/assets/images/Carousel/1.jpg";
import dua from "@/assets/images/Carousel/2.jpg";
import tiga from "@/assets/images/Carousel/3.png";
import empat from "@/assets/images/Carousel/4.jpg";
import lima from "@/assets/images/Carousel/5.jpg";
import enam from "@/assets/images/Carousel/6.jpg";

export default {
  data() {
    return {
      currentIndex: 0,
      images: [satu, dua, tiga, empat, lima, enam],
    };
  },
  methods: {
    next() {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    },
    prev() {
      this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
    },
  },
};
</script>

<style scoped>
/* Add any additional styling if necessary */
</style>
