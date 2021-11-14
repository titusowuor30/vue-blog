<template>
    <div class="container">
    <section class="hero is-small is-mb-12 mt-0 is-link">
    <div class="hero-body has-text-centered">
      <p class="title">Explore Posts</p>
    </div>
    </section>
<div class="demo hero">
   <div class="field mt-6">
            <p class="control is-expanded has-icons-right">
                <input class="input" type="text" v-model="search" placeholder="Search posts by title,overview,,,"/>
                <span class="icon is-small is-right"><i class="fas fa-search"></i></span>
            </p>
        </div>
  <br>
  <table class="table is-responsive">
    <thead>
      <tr>
        <th>#</th>
        <th>TITLE</th>
        <th>OVERVIEW</th>
        <th>CONTENT</th>
        <th>
            <router-link to="/addpost" class="button is-info">Add Post</router-link>
            </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="post in SearchPosts" :key="post.id">
        <td>#{{post.id}}</td>
        <td>{{post.title}}</td>
        <td>{{post.overview}}</td>
         <td>{{post.content}}</td>
         <td>
             <div class="colums">
              <router-link  :to="{ name: 'Edit', params:{id:post.id} }" class="button is-small is-primary mr-6 mb-2">
                 <span class="icon"><i class="fas fa-edit is-primary"></i></span>
             </router-link>
             <router-link @click="deletePost(post.id)" to="" class="button is-small is-danger">
                 <span class="icon"><i class="fas fa-trash-alt danger"></i></span>
             </router-link>
             </div>
         </td>
      </tr>
    </tbody>
  </table>

</div>
    </div>
</template>

import axios from '../../node_modules/axios'

<script>
import axios from 'axios'
export default {
    data() {
        return {
          posts:[],
          search:'',  
        }
    },
    computed:{
     SearchPosts(){
     return this.posts=this.posts.filter((post) =>{
        return post.title.toLowerCase().match(this.search.toLowerCase()) || 
        post.overview.toLowerCase().match(this.search.toLowerCase())
     });
     }
    },
   mounted() {
       axios
       .get('/posts')
       .then(response =>{
           this.posts=response.data
       })
       .catch(error =>{
           console.log(error)
       })
   },
   methods: {
       deletePost(id){
           if(confirm('Are you sure?')){
                axios.delete(`/posts/${id}`)
             .then(response => {
                 console.log();
             })
             .catch(function (error) {
                console.log(error.response)
             })
            window.location.reload();
           }
       }
   },
}
</script>