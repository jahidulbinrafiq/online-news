import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Comments from '../Commetns/Comments';
import Post from '../Post/Post';

const PostDetails = () => {
    let {postId}=useParams();
    const[postDetails,setPostDetails]=useState({})
   useEffect(()=>{
       const url=`https://jsonplaceholder.typicode.com/posts/${postId}`;
       fetch(url)
       .then(res=>res.json())
       .then(data=>setPostDetails(data))
   },[])
//    console.log(postDetails)
   const {id,body,title}=postDetails;
    return (
        <div>
            {title}
            <br/>
            {body}
            <br/>
            <Comments/>  
            <a href="../Home/Home">Back home</a>
        </div>
    );
};

export default PostDetails;