<script setup>

</script>

<template>
  <div class="container-sm pt-4">
    <title>Accomplishments</title>
    <h1>Accomplishments</h1>
    <p>Welcome to the accomplishments page where I list out my notable achievements.</p>
    <div class="row">
      <div class="col-md-4">
        <h2>Unity Game</h2>
        <img src="/game1.jpg" class="img-thumbnail" alt="game screenshot">
        <p>
          I'm currently developing a 2D game in Unity with C# as their current programming language.
          I plan to make it a shoot 'em up similar to games like Space Invaders.
          It's still a work in progress but I have managed to get most of the functionality finished including player movements, shooting mechanics, and enemies that can shoot (plus lead the target) and move
        </p>
      </div>
      <div class="col-md-4">
        <h2>wxWidgets</h2>
        <img src="/game2.jpg" class="img-thumbnail" alt="graphical user interface application">
        <p>
          This one is a GUI application programmed in C++ using wxWidgets library.
          The purpose of this project is to create a simple application to help me determine the tempo or BPM (Beats Per Minute) of a song.
          Since I make music as a hobby, having the ability to pinpoint the tempo of a genre I want to create helps me in creating music.
          Though I have created GUIs in Java, I wanted to see what it's like in C++. I say this one is tricky to get started.
        </p>
      </div>
      <div class="col-md-4">
        <h2>Website</h2>
        <img src="/firebase.svg" class="img-thumbnail" alt="graphical user interface application">
        <p>
          This website.
          I learned a few front-end and back-end technologies from courses involving web development at Ryerson.
          What I got to learn from this project is Google's Firebase including how to use the console, setting up the environment, and deploying it on their server.
          This website is static so it doesn't include any database.
          It uses CSS, HTML, JavaScript, Bootstrap 5, Vue, Pinia, Axios, and Vue Router.
          At the start of the project, I wanted to create something that looks simple and organized while also being mobile friendly.
          With the combination of Bootstrap, CSS, and JavaScript allows the webpage to adapt to different screen sizes.
        </p>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-6">
        <h2>Tennis</h2>
        <img src="/tennisC.jpg" class="img-thumbnail" alt="class photo">
        <p>
          Tennis is pretty cool.
          During my time in 4th year of secondary school I played tennis singles and managed to get into semi-finals.
          Sadly, never won throughout my 4 years in highschool.
          Nevertheless, this is a great achievement.
          Now I just play with friends and family at my local park.
        </p>
      </div>
      <div class="col-sm-6">
        <h2>Mountain Biking</h2>
        <div class="text-center bg-light">
          <iframe height='454' width='300' frameborder='0' allowtransparency='true' scrolling='no' src='https://www.strava.com/athletes/44474142/latest-rides/39b5dd152aff12f2dca6812b880240c7b012ecf0'></iframe>
        </div>
        <p>
          Mountain biking is pretty fun.
          Jumping, dropping, going down steep downhill, urban riding, and the feeling of when you almost crash but you manage to control it is the best about mountain biking.
          I don't own a road bike since I am not a fan of biking on the road.
          Anyway, here are my recent rides.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  methods: {

  }
}
</script>

<style>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.2s ease-out;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

</style>
