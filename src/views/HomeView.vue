<template>
  <div class="container-sm pt-4">
    <title>Home</title>
    <h1>Home</h1>
    <p>
      Hi there thanks for visiting. I'm an undergraduate student from Ryerson University studying Computer Science.
      In my spare time I work on personal projects, play games, or play sports.
      If you want to know more I will have them listed in my accomplishments page. The page where
      I'm glad to share these with you kind stranger &#129300
    </p>
    <p>
      You can find my email in the contacts page.
    </p>

    <div v-if="dogSource" class="text-center">
      <p><strong>Doggo arrives to greet you!</strong></p>
      <img :src="dogSource" alt="Photo of a dog" id="" class="rounded mx-auto d-block" :style="dogImageStyle"><br>
      <button v-on:click="updateDogSource()" class="btn btn-primary mb-4">Show more</button>
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