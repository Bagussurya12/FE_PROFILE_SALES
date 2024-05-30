<template>
  <section id="heros" class="bg-sky-950">
    <div class="container mx-auto">
      <div class="flex flex-wrap items-center">
        <!-- Tambahkan class items-center untuk membuat konten berada di tengah -->
        <div class="w-full md:w-1/2 self-center px-4">
          <!-- Hapus class self-center pada parent kiri -->
          <h1 class="text-base font-semibold text-Hijau md:text-xl lg:text-xl">
            Hi 🖐, I am
            <span class="block font-bold text-slate-900 text-4xl mt-1 lg:text-5xl">Bagus Surya Indrajati </span>
          </h1>
          <h2 class="font-medium text-slate-500 text-lg mb-10 mt-1 lg:text-2xl">Software Engineer</h2>
        </div>
        <div class="w-full lg:w-1/2 relative bg-Hijau h-full flex justify-center">
          <!-- Menggunakan class flex dan justify-center untuk membuat konten berada di tengah secara horizontal -->
          <div class="relative">
            <!-- Menambahkan margin dan padding 0 pada gambar -->
            <img src="../assets/images/Yoga.png" alt="The Club" class="max-w-full relative z-10 p-0 m-0" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "HeroSection",
};
</script>

<style scoped>
.brightness-increase {
  filter: brightness(120%);
}
</style>
