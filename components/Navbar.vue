<template>
  <header class="bg-Dark fixed top-0 left-0 w-full flex items-center z-50 py-2 font-sans">
    <div class="container mx-auto px-4">
      <div class="flex items-center justify-between relative">
        <div class="flex-shrink-0">
          <!-- Logo -->
          <a href="#">
            <img src="../assets/images/logo.svg" alt="logo" class="max-w-[80px] h-auto mb-2" />
          </a>
        </div>
        <div class="flex items-center lg:hidden">
          <button id="hamburger" name="hamburger" type="button" class="block font-bold">
            <span class="hamburger-line transition duration-300 ease-in-out origin-top-left"></span>
            <span class="hamburger-line transition duration-300 ease-in-out"></span>
            <span class="hamburger-line transition duration-300 ease-in-out origin-bottom-left"></span>
          </button>
        </div>
        <nav id="navbar-menu" class="hidden lg:flex items-center w-full lg:w-auto">
          <ul class="block lg:flex lg:space-x-4">
            <li class="group">
              <a href="#home" class="text-base text-white font-bold py-2 mx-2 lg:mx-4 flex group-hover:text-Hijau">Home</a>
            </li>
            <li class="group">
              <a href="#about" class="text-base text-white font-bold py-2 mx-2 lg:mx-4 flex group-hover:text-Hijau">Contact Us</a>
            </li>
            <li class="group">
              <a href="#portofolio" class="text-base text-white font-bold py-2 mx-2 lg:mx-4 flex group-hover:text-Hijau">Virtual Tour</a>
            </li>
            <li class="group">
              <a href="#location" class="text-base text-white font-bold py-2 mx-2 lg:mx-4 flex group-hover:text-Hijau">Location</a>
            </li>
            <li class="group">
              <a href="#blog" class="text-base text-white font-bold py-2 mx-2 lg:mx-4 flex group-hover:text-Hijau">About Us</a>
            </li>
            <li class="group">
              <a href="#contact" class="text-base text-white font-bold py-2 mx-2 lg:mx-4 flex group-hover:text-Hijau">Gallery</a>
            </li>
            <li class="group">
              <a href="#contact" class="text-base text-white font-bold py-2 mx-2 lg:mx-4 flex group-hover:text-Hijau">News</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  mounted() {
    const hamburger = document.getElementById("hamburger");
    const navbarMenu = document.getElementById("navbar-menu");

    hamburger.addEventListener("click", () => {
      navbarMenu.classList.toggle("hidden");
      hamburger.classList.toggle("hamburger-active");
    });
  },
};
</script>

<style>
.hamburger-line {
  @apply w-[30px] h-[2px] my-1 block bg-Hijau;
}
.hamburger-active > span:nth-child(1) {
  @apply rotate-45;
}
.hamburger-active > span:nth-child(2) {
  @apply scale-0;
}
.hamburger-active > span:nth-child(3) {
  @apply -rotate-45;
}
</style>
