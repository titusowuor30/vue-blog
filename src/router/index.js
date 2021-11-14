import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Posts from '../views/Posts.vue'
import AddPost from '../views/AddPost.vue'
import Post from '../views/Post.vue'

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/explore',
        name: 'Posts',
        component: Posts
    },
    {
        path: '/post/detail/:id',
        name: 'Post_detail',
        component: Post
    },
    {
        path: '/addpost',
        name: 'Add',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/AddPost.vue')
    },
    {
        path: '/editposts/:id',
        name: 'Edit',
        component: AddPost
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router