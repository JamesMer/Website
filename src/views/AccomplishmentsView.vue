<script setup>

</script>

<template>
  <div class="container-sm pt-4">
    <title>Accomplishments</title>
    <h1>Accomplishments</h1>
    <p>Welcome to the accomplishments page where I list out my notable achievements.</p>
    <div class="row">
      <div class="col-md-6">
        <h2>3D Multiplayer Unity Game</h2>
        <img src="/game0.png" class="img-thumbnail" alt="3d unity game screenshot">
        <p>
          My biggest passion project to date. As a solo game developer, this project will require a 
          multitude of skills ranging from 3D modeling software with Blender to software development 
          with attention to detail on the architecture utilizing game programming patterns and OOP 
          principles to keep code maintainable and extendable. Due to the nature of the game being 
          multiplayer makes developing this game much more difficult often having to think about 
          network delay, the concept of ownership, RPCs, etc. The networking solution I decided to use 
          is Unity’s Netcode for GameObjects and Steamworks API for Steam’s Peer-to-Peer networking. 
          This project is on my GitHub but in a private repository as I do plan on releasing this project to Steam.
        </p>
      </div>
      <div class="col-md-6">
        <h2>2D Unity Game</h2>
        <img src="/game1.jpg" class="img-thumbnail" alt="2d unity game screenshot">
        <p>
          Currently completed a mini 2D game in Unity with C# as the programming language mainly as a starting point 
          for learning Unity and C#. This is a shoot 'em up similar to games like Space Invaders. It contains neat 
          functionality including player movements, shooting mechanics, and enemies that can shoot (plus lead the target) and move.
        </p>
      </div>
    </div>
    <div class="row">
      <div class="col-md-6">
        <h2>wxWidgets</h2>
        <img src="/game2.jpg" class="img-thumbnail" alt="graphical user interface application">
        <p>
          This one is a GUI application programmed in C++ using wxWidgets library.
          The purpose of this project is to create a simple application to help me determine the tempo or BPM (Beats Per Minute) of a song.
          Since I make music as a hobby, having the ability to pinpoint the tempo of a genre I want to create helps me in creating music.
          Though I have created GUIs in Java, I wanted to see what it's like in C++. I say this one is tricky to get started.
        </p>
      </div>
      <div class="col-md-6">
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
