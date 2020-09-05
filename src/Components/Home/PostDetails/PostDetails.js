import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

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
        </div>
    );
};

export default PostDetails;