<template>
  <div class="post">
    <PostDetail :post="post" />
  </div>
</template>

<script>
// @ is an alias to /src
import axios from '../../node_modules/axios'
import PostDetail from '@/components/PostDetail'

export default {
  name: 'Post',
 data() {
   return {
     post:[]
   }
 },
  components: {
    PostDetail,
  },
created() {
    const post_id=this.$route.params.id    
     axios
       .get(`/posts/${post_id}`)
       .then(response =>{
           this.post=response.data
           console.log(response.data)
       })
       .catch(error =>{
           console.log(error)
       })  
  }
}
</script>


