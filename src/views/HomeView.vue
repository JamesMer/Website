<template>
  <div class="container-sm pt-4">
    <title>Home</title>
    <h1>Home</h1>
    <p>
      Hi there thanks for visiting. I graduated from Toronto Metropolitan University (formerly Ryerson University) in Computer Science with Co-op program.
      In my spare time I work on personal projects, play games or sports.
      If you want to know more I will have them listed in my accomplishments page
    </p>
    <p>
      You can find my email in the contacts page.
    </p>

    <div class="text-center">
      <p><strong>Dog API (dog.ceo)</strong></p>
      <img v-if="dogSource" :src="dogSource" alt="Photo of a dog" id="" class="rounded mx-auto d-block" :style="dogImageStyle"><br>
      <button v-on:click="updateDogSource()" class="btn btn-primary mb-4" :disabled="!dogSource">Cycle Images</button>
    </div>
  </div>
</template>

<script>
import axios from "axios"
import { useMainStore } from "@/stores/MainStore"
import { mapState, mapWritableState } from "pinia"
export default {
  data() {
    return {
      dogImageStyle: "max-height:" + (window.innerHeight*0.50) + "px;max-width:80%",
    }
  },
  methods: {
    updateDogSource() {
      this.dogSource = "";
      axios.get("https://dog.ceo/api/breeds/image/random")
        .then((response) => {
          this.dogSource = response.data.message;
        });
    },
    initDogSource() {
      if (!this.dogSource) {
        this.updateDogSource();
      }
    },
  },
  computed: {
    ...mapState(useMainStore, ['dogSource']),
    ...mapWritableState(useMainStore, ['dogSource']),
  },
  mounted() {
    this.initDogSource();
  },
}
</script>

<style>

</style>