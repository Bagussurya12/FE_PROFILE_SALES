<template>
  <section id="pine" class="pt-20 pb-32 bg-white mt-5">
    <div class="container mx-auto relative">
      <div class="flex flex-wrap justify-center mb-10">
        <div class="w-full px-4 mb-5 flex flex-col justify-center items-center">
          <img src="../assets/images/pine-residance-logo.svg" alt="Pine Residance Logo" class="max-w-[320px] mb-4" />
          <h1 class="font-semibold text-gray-800 text-4xl font-serif text-center">A Home That Defines Your Lifestyle</h1>
        </div>
      </div>
      <!-- PRODUCT -->
      <div class="flex flex-wrap justify-center relative z-10">
        <div class="w-full md:w-1/2 lg:w-1/3 px-4 mb-10">
          <div class="bg-white rounded-xl shadow-lg overflow-hidden relative transition-transform transform hover:scale-105">
            <img src="../assets/images/virginia-pine.jpg" alt="Virginia-pine" class="product w-full h-64 object-cover transition-opacity duration-300 hover:opacity-80" />
            <!-- TEXT PRODUCT -->
            <div class="p-4 bg-white bg-opacity-90 backdrop-blur-md">
              <div class="text-center py-4 px-6">
                <h3 class="font-bold text-2xl text-gray-900 mb-2 font-serif">Virginia Pine</h3>
                <p class="font-medium font-serif text-base text-gray-900 mb-4">
                  Unit di cluster ke-2 dengan desain fasad modern minimalis ini hanya tinggal beberapa unit tersisa! Jangan sampai kehabisan, dapatkan penawaran terbaiknya!
                </p>
                <a href="#" class="font-medium text-sm bg-Hijau py-2 px-4 rounded-lg hover:bg-teal-900 text-white">Brochure</a>
              </div>
            </div>
          </div>
        </div>
        <!--  -->
        <div class="w-full md:w-1/2 lg:w-1/3 px-4 mb-10">
          <div class="bg-white rounded-xl shadow-lg overflow-hidden relative transition-transform transform hover:scale-105">
            <img src="../assets/images/northern-pine.jpg" alt="Northern-pine" class="product w-full h-64 object-cover transition-opacity duration-300 hover:opacity-80" />
            <!-- TEXT PRODUCT -->
            <div class="p-4 bg-white bg-opacity-90 backdrop-blur-md">
              <div class="text-center py-4 px-6">
                <h3 class="font-bold text-2xl text-gray-900 mb-2 font-serif">Northern Pine</h3>
                <p class="font-medium font-serif text-base text-gray-900 mb-9">Unit di cluster ke-3 Northern Pine ini baru saja membuka blok baru. Dapatkan penawaran terbaiknya sebelum harga naik!</p>
                <a href="#" class="font-medium text-sm bg-Hijau py-2 px-4 rounded-lg hover:bg-teal-900 text-white">Brochure</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Tambahkan gaya tambahan di sini jika diperlukan */
.bg-gray-100 {
  background-color: #f7fafc;
}

.bg-gray-800 {
  background-color: #2d3748;
}

.bg-gray-900 {
  background-color: #1a202c;
}

.text-gray-600 {
  color: #718096;
}

.text-gray-800 {
  color: #2d3748;
}

.text-gray-900 {
  color: #1a202c;
}

.transition-transform {
  transition: transform 0.3s ease-in-out;
}

.transition-opacity {
  transition: opacity 0.3s ease-in-out;
}

.backdrop-blur-md {
  backdrop-filter: blur(10px);
}

/* Tambahkan gaya untuk memastikan gambar memiliki ukuran yang sama */
.product {
  width: 100%; /* Lebar penuh */
  height: 22rem; /* Menetapkan tinggi gambar */
  object-fit: cover; /* Memastikan gambar memotong atau menyesuaikan dengan kontainer */
}
</style>
