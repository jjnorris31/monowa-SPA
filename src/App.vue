<template>
  <div id="app" class="main-container">
    <transition name="component-fade">
    <router-view/>
    </transition>

  </div>
</template>

<style>
#app {
  font-family: Cabin, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
}

.component-fade-enter-active, .component-fade-leave-active {
  transition: opacity .2s ease;
}
.component-fade-enter, .component-fade-leave-to
  /* .component-fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

</style>
