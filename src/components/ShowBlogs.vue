<template>
<!-- Here we are using a cutome directive (v-theme) with the argument (column) -->
  <div v-theme:column="'narrow'" id="show-blogs"> 

    <h1>All Blogs</h1>

    <input type="text" v-model="search" placeholder="Search Blogs">

    <div v-for="blog in filteredBlogs" class="single-blog">
      <!-- Using (to-uppercase) Filter -->
      <router-link v-bind:to="'/blog/' + blog.id">
        <h2 v-rainbow>{{blog.title | to-uppercase }}</h2>
      </router-link>
      <article>{{blog.body | snipped }}</article>
    </div>

  </div>
</template>

<script>
export default {
  data(){
    return {
      blogs: [], 
      search: ''
    }
  }, 
  created(){
    this.$http.get('https://vue-blog-e2945.firebaseio.com/posts.json').then(function(data){
      return data.json();
    }).then(function(data){
      var blogsArray = [];
      for(let key in data){
        data[key].id = key;
        blogsArray.push(data[key]);
      }
      this.blogs = blogsArray;
    })
  }, 
  computed: {
    filteredBlogs: function(){
      return this.blogs.filter((blog)=>{
        return blog.title.match(this.search);
      });
    }
  }
}
</script>

<style scoped>
#show-blogs{
  max-width : 800px;
  margin: 0 auto;
}

.single-blog{
  padding: 20px;
  margin: 20px 0;
  box-sizing: border-box;
  background: #eee;
}

a{
  text-decoration: none;
}
</style>