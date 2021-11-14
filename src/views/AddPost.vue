<template>
    <div class="container">
    <section class="hero is-small is-mb-12 mt-0 is-danger">
    <div class="hero-body has-text-centered">
      <p class="title is-primary">{{currentRouteName}} Posts</p>
    </div>
    </section>
  <form  @submit="onSubmit" class="form">
      <div class="field">
      <label class="label">Title</label>
      <div class="control">
        <input class="input" type="text" placeholder="Post Title" id="title" v-model="title" name="title">
      </div>
      </div>
      <div class="field">
      <label class="label">Overview</label>
      <div class="control">
        <textarea class="textarea" placeholder="Post Overview" id="overview" v-model="overview" name="overview"></textarea>
      </div>
      </div>
      <div class="field">
      <label class="label">Content</label>
      <div class="control">
        <textarea class="textarea" placeholder="Post Content" id="content" v-model="content" name="content"></textarea>
      </div>
    </div>
    <div class="field is-grouped">
      <div class="control">
        <button type="submit" class="button is-link">{{currentRouteName}} Post</button>
      </div>
    </div>
  </form>
</div>
</template>

import axios from '../../node_modules/axios'
import {toast} from 'bulma-toast'
import {useRouter} from 'vue.router'

<script>
import axios from 'axios'
export default {
  name:'AddPost',
  data() {
    return {
      title:'',
      overview:'',
      content:'',
      posts:[],
    }
  },
  computed: {
    currentRouteName() {
        return this.$route.name;
    }
},
  methods: {
  onSubmit(e){
  e.preventDefault()
  console.log("Addpost url=>"+this.$route.name)
    if(this.$route.name === 'Add'){
      const newpost={
       title:this.title,
       overview:this.overview,
       content:this.content
     } 
     axios
     .post('/posts',newpost)
     .then(response =>{
       this.posts=[...this.posts,response.data]
     })
     .catch(error =>{
       console.log(error)
     })
     alert('Post added')
     this.$router.push({'name':'Home'})
    
      this.title = ''
      this.overview = ''
      this.content = ''
    }else{
       const post_id=this.$route.params.id
    axios
    .put(`/posts/${post_id}`,{
      title:this.title,
      overview:this.overview,
      content:this.content,
    })
    .then(()=>{
    alert('Post Edited!')
    })
    .catch(error =>{
      console.log(error)
    })
    this.$router.push({'name':'Posts'}) 
    }
    },
  },
  created() {
   axios
    .get('/posts')
    .then(response =>{
      this.posts=response.data
    })
    .catch(error =>{
      console.log(error)
    }) 
  },
  mounted() {
    const post_id=this.$route.params.id
    axios
    .get(`/posts/${post_id}`)
    .then(response =>{
      console.log(response.data)
      this.title = response.data.title
      this.overview =response.data.overview
      this.content =response.data.content
    })
    .catch(error =>{
      console.log(error)
    })  
  },
}
</script>
