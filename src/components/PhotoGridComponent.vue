<!-- PhotoGrid.vue -->
<template>
  <div class="photo-grid">
    <div v-for="(photo, index) in photos" :key="index" class="photo-item">
      <img :src="photo" alt="Photo" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  created() {
    // Automatically require all files in the 'photos' folder
    const photoContextJPG = import.meta.glob('@/assets/drone-photos/*.jpg')
    for (var photo in photoContextJPG) {
      this.photos.push(photo)
    }

    const photoContextJPEG = import.meta.glob('@/assets/drone-photos/*.jpeg')
    for (var photo in photoContextJPEG) {
      this.photos.push(photo)
    }
    const photoContextPNG = import.meta.glob('@/assets/drone-photos/*.png')
    for (var photo in photoContextPNG) {
      this.photos.push(photo)
    }
    console.log(photoContextJPEG, photoContextJPG, photoContextPNG)
  },

  data() {
    return {
      photos: []
    }
  },
  components: {}
})
</script>

<style>
.photo-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 16px;
}

.photo-item {
  max-height: 500px;
  flex: 1 1 calc(33.333% - 16px); /* Adjust the percentage based on your desired column count */
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  justify-content: center;
}

img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
  transition: all 0.1s;
}
/* TODO: Make image selection open a large window
img:hover {
  width: 101%;
  height: 101%;
  cursor: pointer;
  border: solid;
} */
</style>
