import "./App.css";
import Header from "./components/Header/Header";
import Blogs from "./components/Blogs/Blogs";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import { useState } from "react";

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const handleBookmark = (blog) => {
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  };

  const handleMarkAsRead = (blogId, time) => {
    setReadingTime(readingTime + time);
    const newBookmarks = bookmarks.filter(bookmark => bookmark.id !== blogId);
    setBookmarks(newBookmarks);
  };

  return (
    <>
      <Header />
      <div className="md:flex max-w-7xl mx-auto">
        <Blogs handleBookmark={handleBookmark} handleMarkAsRead={handleMarkAsRead} />
        <Bookmarks bookmarks={bookmarks} readingTime={readingTime} />
      </div>
    </>
  );
}

export default App;
