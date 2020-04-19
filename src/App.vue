<template>
  <div>
    <app-header></app-header>
    <router-view></router-view>
  </div>
</template>

<script>
//import AddBlog from './components/AddBlog';       No need for this
//import ShowBlogs from './components/ShowBlogs';   No need for this
import Header from './components/Header';

export default {
  components:{
//    'add-blog': AddBlog,      No need for this
//    'show-blogs': ShowBlogs,  No need for this
    'app-header': Header,
  },
  data () {
    return {

    }
  }
}
</script>

<style>

</style>