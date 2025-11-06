<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light bg-gradient shadow-sm">
    <div class="container-fluid">
        <div class="navbar-brand">
            <img src="/stickman.png" alt="" width="30" height="30" class="d-inline-block align-text-top">
        </div>
        <button id="navbar-toggle" class="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
            <li class="nav-item">
                <router-link :to="{ name: 'home' }" class="nav-link" @click="toggleNavBar()"><i class="bi bi-house"></i>Home</router-link>
            </li>
            <li class="nav-item">
                <router-link :to="{ name: 'accomplishments' }" class="nav-link" @click="toggleNavBar()"><i class="bi bi-trophy"></i>Accomplishments</router-link>
            </li>
            <li class="nav-item">
                <router-link :to="{ name: 'contacts' }" class="nav-link" @click="toggleNavBar()"><i class="bi bi-person"></i>Contacts</router-link>
            </li>
        </ul>
        </div>
    </div>
    </nav>
</template>

<script>
export default {
    data() {
        return {

        }
    },
    methods: {
        toggleNavBar() {
            var toggleButton = document.getElementById('navbar-toggle');
            if (!toggleButton.classList.contains('collapsed')) {
                toggleButton.click();
            }
        },
    }
}
</script>

<style>
a:hover {
    border: 2px solid lightgray;
    border-radius: 5px;
    margin: 0px;
}
a.router-link-active {
    text-decoration: underline;
}
a {
    margin: 2px;
}
</style>