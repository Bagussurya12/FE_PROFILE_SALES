<template>
  <section id="location" class="pt-36 pb-36 mx-10">
    <div class="container mx-auto bg-Dark p-4 rounded-3xl">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <!-- Mengubah grid-cols-1 menjadi grid-cols-2 -->
        <div class="px-4 py-10 mb-5 lg:mb-0">
          <h4 class="text-white font-semibold lg:text-4xl md:text-2xl sm:text-xl mb-2">Why choosing Pine Residence OCBD?🤔</h4>
          <p class="text-white text-lg">
            Pine Residence, located in the OCBD area, is situated in the heart of Bogor with direct access to the BORR toll road, ensuring a high investment value. The strategic advantages of OCBD are
            further enhanced by its surroundings, which offer a variety of facilities including healthcare, shopping, education, and lifestyle amenities.
          </p>
        </div>
        <div class="px-4 my-10 lg:my-0">
          <!-- Menambahkan class lg:my-0 untuk menghapus margin pada mode desktop -->
          <div class="aspect-w-16 aspect-h-12 rounded-3xl overflow-hidden border border-Hijau">
            <!-- Menambahkan warna border-Hijau -->
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.6942305419557!2d106.81151763676411!3d-6.5602276130826835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69c51e8619bdb5%3A0xfb09d8f462f21196!2sOCBD%20BOGOR%20MARKETING%20OFFICE!5e0!3m2!1sid!2sid!4v1716974994224!5m2!1sid!2sid"
              width="700"
              height="500"
            >
            </iframe>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.darken-filter {
  display: block;
  width: 100%;
  height: auto;
  filter: brightness(50%);
}
</style>
