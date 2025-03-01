import './App.css'
import Header from './components/Header/Header'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import { useState } from 'react';

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  
  const handleBookmark = (blog) => {
    console.log('bookmark adding soon', blog);
  }

  return (
    <>
      <Header />
      <header className='md:flex max-w-7xl mx-auto'>
        <Blogs handleBookmark={handleBookmark}/>
        <Bookmarks />
      </header>
    </>
  )
}

export default App
