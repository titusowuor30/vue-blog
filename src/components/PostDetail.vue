<template>
<section class="section box">
  <h1 class="title has-text-centered">Post Details</h1>
  <hr>
<div class="hero is-9">
  <div class="hero-body is-medium  is-dark">
     <div class="container">
  <div class="is-dark is-pulled-left">
<!-- display blog post -->
    <div class="is-size-4">
      <h3 class="title"><strong>{{post.title}}</strong></h3>
    </div>
        <br>
         <p class="title is-size-6 has-text-gray">{{post.overview}}</p>
         <p class="subtitle is-size-6 has-text-gray">{{post.content}}</p>
         <hr>
        <div class="field is-grouped">
          <div class="control mr-6">
           <router-link :to="{name:'Home'}" class="button is-link mt-4">
            <span class="icon">
              <i class="fas fa-arrow-left button is-link">&nbsp;Back</i> 
            </span>
           </router-link>
          </div>
      <div class="control ml-6">
           <router-link :to="{name:'Edit',params:{id:post.id}}" class="button is-success mt-4">
            <span class="icon">
              <i class="fas fa-pen button is-success">&nbsp;Edit</i> 
            </span>
           </router-link>
      </div>
     </div>
</div>
</div>
  </div>
</div>
</section>
</template>

<script>
export default {
    name:'PostDetail',
   props:{
       post:{}
   }, 
  mounted() {
    console.log(this.post)
  },
}
</script>