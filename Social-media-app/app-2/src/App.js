import {Routes,Route, Link, Navigate, useNavigate} from 'react-router-dom'
import About from './Components/About';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Home from './Components/Home';
import Missing from './Components/Missing';
import Nav from './Components/Nav';
import NewPost from './Components/NewPost';
import PostPage from './Components/PostPage';
import EditPost from './Components/EditPost';
import { DataProvider } from './context/DataContext';
function App() {
 
 return (
    <div className="App">
      <DataProvider>
      <Header 
      title={"Social Media App"}
      />
      <Nav />
     <Routes>
          <Route path='/' element={
            <Home />
            }
          />
       <Route path='post'>
          <Route index element={
            <NewPost />}
          />
          <Route path=':id' element={
            <PostPage 
            />}
          />
       </Route>
       <Route path='/edit/:id' element={
            <EditPost />}
        />
       {/* <PostPage /> */}
       <Route path='about' 
          element={<About />}
       />
       <Route path='*' element={<Missing />} />
    </Routes>
    <Footer />
    </DataProvider>
    </div>
  );
  

    
}

export default App;
