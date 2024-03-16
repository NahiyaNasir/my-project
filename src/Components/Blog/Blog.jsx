import PropTypes from 'prop-types'
import { FaBookmark } from "react-icons/fa";
const Blog = ({blog,handelBookMarks ,handelMarkAsRead}) => {
   // console.log(blog)
    const{ title , cover, author,author_img,reading_time_minutes,posted_date,hashtags}=blog
    return (
        <div>
            <img src={cover} alt={`cover picture of the ${title}`} />
            <div className=' flex justify-between'>
              <div className=' flex gap-8 mt-6'>
               <img src={author_img}  className='w-14 h-14  ' alt="" />
               <div>
                <h3 className='text-2xl'> {author}</h3>
                <p>{[posted_date]}</p>
               </div>
              </div>
              <div>
                <span>{reading_time_minutes} min</span>
                <button onClick={()=>handelBookMarks(blog)}><FaBookmark></FaBookmark></button>
              </div>
            </div>
           <h2 className=''>{title}</h2>
           <p>{
            hashtags.map((hash, idx)=><span key={idx}><a href="">#{ hash}</a></span>)}
           </p>
           <button onClick={()=>handelMarkAsRead(reading_time_minutes)} className=' underline text-purple-600'> Mark AS Read</button>
        </div>
    );
};
Blog.propTypes={
    blog:PropTypes.object.isRequired,
    handelBookMarks:PropTypes.func,
    handelMarkAsRead:PropTypes.func
}

export default Blog;