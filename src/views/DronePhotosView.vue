<template>
  <div class="content">
    <h1>Drone Photos</h1>
    <p>
      Here is a collection of some of my drone photography. Feel free to use them (non-commercially)
      but please site my name and this website!
    </p>
    <PhotoGridComponent></PhotoGridComponent>
  </div>
</template>
<script lang="ts">
import PhotoGridComponent from '@/components/PhotoGridComponent.vue';
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'DronePhotosView',
  components: {
    PhotoGridComponent
  }
})
</script>

<style scoped>
/* Add your view-specific styles here */
</style>
