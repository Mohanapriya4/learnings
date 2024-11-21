import React from 'react'
import { Link } from 'react-router-dom'

const PostPage = () => {
  return (
    <main>
        <h1>PostPage</h1>
        <li><Link to="/postpage/1">Post 1</Link></li>
          <li><Link to="/postpage/2">Post 2</Link></li>
          <li><Link to="/postpage/3">Post 3</Link></li>
    </main>
  )
}

export default PostPage