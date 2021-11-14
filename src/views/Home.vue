<template>
  <div class="home">
    <section class="hero is-small is-mb-6 is-dark">
    <div class="hero-body has-text-centered">
      <p class="title">Welcome Blog Mania</p>
      <p class="subtitle">The best blog website ever</p>
    </div>
    </section>

<!-- display blog post -->
<section class="section">
  <div class="columns is-multiline">
    <div class="column is-12">
      <h1 class="is-size-2 has-text-centered">Blog Posts</h1>
    </div>
      <div class="colum is-3" v-for="post in posts" :key="post.id">
      <div class="box mb-2 m-2 is-light">
        <h3 class="is-size-4">{{post.title}}</h3>
        <hr>
        <div class="box">
       <p class="is-size-6 has-text-gray">{{post.overview}}</p>
       <router-link :to="{name:'Post_detail',params:{id:post.id}}" class="button is-dark mt-4">View &nbsp;<i class="fas fa-arrow-right"></i></router-link>
      </div>
      </div>
      </div>
  </div>
</section>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from '../../node_modules/axios'

export default {
  name: 'Home',
  data() {
    return {
      posts:[],
      search:[]
    }
  },
  components: {
  },
  computed:{
     SearchPosts:function(){
     return this.posts=this.posts.filter((post) =>{
        return post.title.toLowerCase().match(this.search.toLowerCase()) || 
        post.overview.toLowerCase().match(this.search.toLowerCase())
     });
     }
    },
  methods: {
    getPosts(){
      axios
      .get('/posts')
      .then(response => {
        this.posts=response.data
      })
    }
  },
  mounted(){
    this.getPosts()
  }
}
</script>
