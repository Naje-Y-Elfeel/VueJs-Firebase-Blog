<template>
  <div id="single-blog">
      <h1>{{blog.title}}</h1>
      <p>Author: {{blog.author}}</p>
      <article>{{blog.body}}</article>
      <p>Categories:</p>
      <ul>
          <li v-for="category in blog.categories">{{category}}</li>
      </ul>

  </div>
</template>

<script>
export default {
    data(){
        return {
            id: this.$route.params.id,
            blog: {}
        }
    }, 
    created(){
        //The request return data.json() promise, so we have to use then in order to use data with it finish loading
        this.$http.get('https://vue-blog-e2945.firebaseio.com/posts/' + this.id + '.json').then(function(data){
            return data.json();
        }).then(function(data){
            this.blog = data;
        });
    }
}
</script>

<style scoped>
#single-blog{
    max-width: 960px;
    margin: 0 auto;
}
</style>