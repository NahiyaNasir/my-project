
import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmark from './Components/Bookmarks/Bookmark'
import Header from './Components/Header/Header'

function App() {
  
 const [bookmarks, setBookMarks]=useState([])

 const [readingTime, setReadingTime]=useState(0)
  const handelBookMarks=(blog)=>{
       // console.log(blog)
        const newBook=[... bookmarks, blog]
        setBookMarks(newBook)
  }
   const handelMarkAsRead=(time)=>{
     setReadingTime(readingTime+time)
     console.log(time)
   }
  return (
    <>
      
     <div className=' mx-auto container'>
    <Header></Header>
      <div className=' md:flex'>
        <Blogs  handelBookMarks={handelBookMarks} handelMarkAsRead={handelMarkAsRead}></Blogs>
       <Bookmark readingTime={readingTime}     bookmarks={bookmarks}></Bookmark>
      </div>
     </div>
     
    </>
  )
}

export default App
