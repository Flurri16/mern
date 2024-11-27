import { Routes, Route } from "react-router-dom";

import Layout from "./pages/Layout";

import MainPage from "./pages/MainPage";
import AddPostPage from './pages/AddPostPage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import PostPage from './pages/PostPage'


function App() {
  return (
    <div>
      <Layout></Layout>
      <Routes>
      <Route path='/' element={<MainPage/>}/>
        {/* <Route path='posts' element={<PostsPage/>}/> */}
        <Route path=':id' element={<PostPage/>}/>
        <Route path='new' element={<AddPostPage/>}/>
        <Route path='register' element={<RegisterPage/>}/>
        <Route path='login' element={<LoginPage/>}/>
        {/* <Route path=':id/edit' element={<EditPostPage/>}/> */}
      </Routes>
    </div>
  );
}

export default App;
