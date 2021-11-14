<template>
  <div id="wrapper">
    <nav class="navbar is-dark">
      <div class="navbar-brand">
        <router-link to="/" class="navbar-item">
        <h1 style="font-size:36px;"><strong>MYBLOG</strong></h1>
    </router-link>
      </div>
      <a class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbar-menu" @click="showMobileMenu = !showMobileMenu">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
         <span aria-hidden="true"></span>
       </a>
          <div class="navbar-menu" id="navbar-menu" :class="{'is-active':showMobileMenu}">
         <div class="navbar-end">
          <router-link to="/addpost" class="navbar-item">New</router-link>
         <router-link to="/explore" class="navbar-item">Explore</router-link>
         <div class="navbar-item">
           <div class="buttons">
             <router-link to="/log-in" class="button is-link">
             <span class="icon"><i class="fas fa-sign-in-alt"></i></span>
             </router-link>
             <router-link to="/sign-in" class="button is-danger">
            <span class="icon"><i class="fas fa-sign-out-alt"></i></span>
             </router-link>
           </div>
         </div>
         </div>
       </div>
    </nav>
    <section class="section">
  <router-view/>
</section>
    <footer class="footer">
     <p class="has-text-centered is-italic">Copyright (c) ME 2021</p>
   </footer>
  </div>
</template>
<script>
export default {
  data() {
    return {
      showMobileMenu:false,
    }
  },
}
</script>
<style lang="scss">
@import '../node_modules/bulma'
</style>
