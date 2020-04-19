<template>
  <div id="add-blog">

    <h3>Add New Blog Post</h3>

    <form v-if="!submitted">
      <label>Blog Title:</label>
      <input type="text" v-model.lazy="blog.title" required>
      
      <label>Content</label>
      <textarea v-model.lazy="blog.body" name="" id="" cols="50" rows="10"></textarea>
     
      <div id="check-boxes">
        <label>Web Development</label>
        <input type="checkbox" value="Web Development" v-model="blog.categories">
        
        <label>Content Marketing</label>
        <input type="checkbox" value="Content Marketing" v-model="blog.categories">
        
        <label>Mobile Application Development</label>
        <input type="checkbox" value="Mobile Application Development" v-model="blog.categories">
        
        <label>Copywriting</label>
        <input type="checkbox" value="Copywriting" v-model="blog.categories">
      </div>

      <label>Author:</label>
      <select v-model="blog.author">
        <option v-for="author in authors">{{ author }}</option>
      </select>

      <button v-on:click.prevent="post">Add Blog</button>
    </form>

    <div v-if="submitted">
      <h3>Thanks for Adding Your Post</h3>
    </div>

    <div id="preview">
      <h4>Preview Before Submitting</h4>
      <p>Blog Title:</p>
      <p>{{ blog.title }}</p>
      <p>Blog Content:</p>
      <p>{{ blog.body }}</p>
      <p>Blog Categories:</p>
      <ul>
        <li v-for="category in blog.categories">{{category}}</li>
      </ul>
      <p>Author: {{ blog.author }}</p>
    </div>

  </div>
</template>

<script>
export default {
  data(){
    return {
      blog: {
        title: '',
        body: '',
        categories: [],
        author: ""
      },
      authors: ['Naje Elfeel', 'Abud Degin', 'The Net Worior'], 
      submitted: false
    }
  },
  methods: {
    post: function(){
      this.$http.post('https://vue-blog-e2945.firebaseio.com/posts.json', this.blog).then(function(data)
      {
         console.log(data);
        this.submitted = true;
      });
    }
  }
}
</script>

<style scoped>
#add-blog{
  margin: 20px auto;
  max-width: 500px;
}

label{
  display: block;
  margin: 20px 0 10px;
}

input[type="text"], textarea{
  display: block;
  width: 100%;
  padding: 8px;
}

#preview{
  padding: 10px;
  border: 1px dotted #ccc;
  margin: 30px 0;
}

h3{
  margin-top: 10px;
}

#check-boxes input{
  display: inline-block;
  margin-right: 10px;
}

#check-boxes label {
  display: inline-block;
}
</style>