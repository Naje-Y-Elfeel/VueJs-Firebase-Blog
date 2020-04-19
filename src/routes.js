import showBlogs from './components/showBlogs'
import addBlog from './components/AddBlog'
import singleBlog from './components/singleBlog'

export default [

    {path: '/', component: showBlogs},

    {path: '/add', component: addBlog}, 

    {path: '/blog/:id', component: singleBlog}
    
]