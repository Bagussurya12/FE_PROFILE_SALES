<template>
  <section id="news" class="pt-20 pb-20 bg-white">
    <div class="container mx-auto px-6">
      <div class="text-center mb-12">
        <h2 class="text-4xl font-bold text-gray-800">Latest News</h2>
        <p class="text-gray-600 mt-4">Stay updated with the latest news from our blog</p>
      </div>
      <div class="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        <div v-for="post in posts" :key="post.id" class="bg-white rounded-lg overflow-hidden shadow-lg">
          <img :src="post.image" alt="news image" class="w-full h-48 object-cover" />
          <div class="p-6">
            <h3 class="text-xl font-semibold text-gray-800">{{ post.title }}</h3>
            <p class="text-gray-600 mt-2">{{ post.excerpt }}</p>
            <div class="mt-4">
              <!-- Uncomment the following line if you are using Vue Router -->
              <!-- <router-link :to="'/news/' + post.id" class="text-indigo-600 hover:text-indigo-800">Read more</router-link> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      posts: [
        {
          id: 1,
          title: "Exciting News in Our Community",
          excerpt: "Discover the latest events and updates happening in our community...",
          image: "https://via.placeholder.com/600x400",
        },
        {
          id: 2,
          title: "Tech Innovations for 2024",
          excerpt: "Explore the groundbreaking technologies that will shape our future...",
          image: "https://via.placeholder.com/600x400",
        },
        {
          id: 3,
          title: "Health and Wellness Tips",
          excerpt: "Learn how to maintain a healthy lifestyle with these essential tips...",
          image: "https://via.placeholder.com/600x400",
        },
        {
          id: 4,
          title: "Travel Destinations for Summer",
          excerpt: "Plan your next vacation with these top travel destinations...",
          image: "https://via.placeholder.com/600x400",
        },
        {
          id: 5,
          title: "Culinary Delights from Around the World",
          excerpt: "Indulge in a culinary journey with these delicious recipes...",
          image: "https://via.placeholder.com/600x400",
        },
        {
          id: 6,
          title: "Sustainable Living Practices",
          excerpt: "Adopt sustainable practices to live a more eco-friendly lifestyle...",
          image: "https://via.placeholder.com/600x400",
        },
      ],
    };
  },
};
</script>

<style scoped>
#news {
  background-color: white;
}

#news h2 {
  color: #1a202c; /* Darker color for better contrast */
}

#news p {
  color: #718096; /* Slightly lighter color for the subtitle */
}
</style>
