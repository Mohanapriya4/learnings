import {Routes,Route, Link} from 'react-router-dom'
import About from './Components/About';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Home from './Components/Home';
import Missing from './Components/Missing';
import Nav from './Components/Nav';
import NewPost from './Components/NewPost';
import PostPage from './Components/PostPage';
import Post from './Components/Post';


function App() {
  return (
    <div className="App">

      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/postpage">PostPage</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/newpost' element={<NewPost />}/>
        <Route path='/postpage' element={<PostPage />}/>
        <Route path='/postpage/:id' element={<Post />}/>
      </Routes>
      {/* <Header />
      <Nav />
      <Home />
      <NewPost />
      <PostPage />
      <About />
      <Missing />
      <Footer /> */}
    </div>
  );
}

export default App;
