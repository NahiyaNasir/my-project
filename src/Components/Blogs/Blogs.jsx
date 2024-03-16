import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from 'prop-types'

const Blogs = ({handelBookMarks, handelMarkAsRead}) => {
     const [blogs, setBlog]=useState([])
      useEffect(()=>{
        fetch('blogs.json')
        .then(res=> res.json())
        .then(data=>setBlog(data))
      },[])
    return (
        <div className="w-2/3">
            <h1 className=" text-4xl"> Blogs :{blogs.length}</h1>
            {
                blogs.map((blog,id)=><Blog  key={id}
               
                 blog={blog}
                 handelBookMarks={handelBookMarks}    
                 handelMarkAsRead={handelMarkAsRead}
                        >
 
                </Blog>)
            }
        </div>
    );
};
Blogs.propTypes={
handelBookMarks:PropTypes.func,
handelMarkAsRead: PropTypes.func
}

export default Blogs;