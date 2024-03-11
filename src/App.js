import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header'
import Home from './Pages/Home';
import NewPost from './Pages/NewPost';
import PostPage from './Pages/PostPage';
import About from './Pages/About';
import Missing from './Pages/Missing';
import EditPost from './Pages/EditPost';
import Post from './Components/Post/Post';
import { useEffect, useState } from 'react';
import { format } from 'date-fns';
import api from "./api/post";

function App() {
  // --------------------------------------------------------Variable Declaration---------------------------------------------------------------------

  const navigate = useNavigate()
  
  const [posts, setPosts] = useState([])
  const [search, setSearch] =useState('')
  const [postBody, setPostBody] = useState('')
  const [postTitle, setPostTitle] = useState('')
  const [editBody, setEditBody] = useState('')
  const [editTitle, setEditTitle] = useState('')
  const [searchResult, setSearchResult] = useState([])

  // --------------------------------------------------------useEffect---------------------------------------------------------------------

  useEffect(() => {
    const fetchPost = async() =>{
      try{
        const result = await api.get('/posts')
        setPosts(result.data)
      }catch(err){
        if(err.response){
          console.log(err.response.data)
          console.log(err.response.status)
          console.log(err.response.headers)
        }else{
          console.log(`Error : ${err.message}`)
        }
      }
    }
    fetchPost();
  },[])

  // --------------------------------------------------------useEffect---------------------------------------------------------------------

  useEffect(() => {
    const filterPost = posts.filter((post) => 
    ((post.title).toLowerCase()).includes(search.toLowerCase()) ||
    ((post.body).toLowerCase()).includes(search.toLowerCase()) ||
    ((post.datetime).toLowerCase()).includes(search.toLowerCase())
    )
    setSearchResult(filterPost.reverse())
  },[posts,search])

  // --------------------------------------------------------handleSubmit---------------------------------------------------------------------

  const handleSubmit = async(e) => {
    const id = posts.length ? String(Number(posts[posts.length - 1].id) + Number(1)) :  String(1);
    const datetime = format(new Date(), 'MMMM dd, yyyy pp')
    const newPost = {id, title:postTitle, datetime, body:postBody}
    const response = await api.post('/posts', newPost)
    const allPost = [...posts,newPost]
    try{
      if (postBody && postTitle){
        setPosts(allPost)
        navigate('/')
      }
    }catch(err){
      if(err.response){
        console.log(err.response.data)
        console.log(err.response.status)
        console.log(err.response.headers)
      }else{
        console.log(`Error : ${err.message}`)
      }
    }
    
    setPostTitle('')
    setPostBody('')
    // navigate('/')
  }

  // --------------------------------------------------------handleEdit---------------------------------------------------------------------

  const handleEdit = async(id) =>{
    const datetime = format(new Date(), 'MMMM dd, yyyy pp')
    const updatedPost = {id, title:editTitle, datetime, body:editBody}
    try{
      const response = await api.put(`/posts/${id}`,updatedPost)
      setPosts(posts.map(post => post.id === id ? {...response.data}:post))
      setEditBody('')
      setEditTitle('')
      navigate('/')
    }catch(err){
      console.log(`Error : ${err.message}`)
    }
  }

  // --------------------------------------------------------handleDelete---------------------------------------------------------------------

  const handleDelete = async(id) => {
    const postList = posts.filter((post) => (post.id !== id))
    try{
      await api.delete(`/posts/${id}`)
      setPosts(postList)
      navigate('/')
    }catch(err){
      if(err.response){
        console.log(err.response.data)
        console.log(err.response.status)
        console.log(err.response.headers)
      }else{
        console.log(`Error : ${err.message}`)
      }
    }
      
  }

  // --------------------------------------------------------return---------------------------------------------------------------------

  return (
    <div>
      <Header 
      title='Post App'
      search = {search}
      setSearch = {setSearch}
      />

      <Routes>

        <Route path='/' element={<Home posts={searchResult} />} />

        <Route path='/newpost' element={<NewPost 
        postBody = {postBody}
        setPostBody = {setPostBody}
        postTitle = {postTitle}
        setPostTitle = {setPostTitle}
        handleSubmit={handleSubmit}
        />} />

        <Route path='/newpost/:id' element={<NewPost 
        handleEdit = {handleEdit}
        />} />

        <Route path='/about' element={<About />} />

        <Route path='*' element={<Missing />} />

        <Route path='/post/:id' element={<PostPage 
        posts={posts} 
        handleDelete={handleDelete}
        />} />

        <Route path='/editpost/:id' element={<EditPost 
        posts={posts} 
        editTitle = {editTitle}
        editBody = {editBody}
        setEditBody = {setEditBody}
        setEditTitle = {setEditTitle}
        handleEdit={handleEdit}
        />} />

        <Route path='/postpage/:id' element={<Post />} />

      </Routes>

      <Footer />
    </div>
  );
}

export default App;
