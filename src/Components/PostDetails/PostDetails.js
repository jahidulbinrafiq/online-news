import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Media,Container } from 'react-bootstrap';
import './PostDetails.css';
import Comments from '../Commetns/Comments';

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
   const {body,title}=postDetails;
    return (
        <>
         <Container fluid className="postStyle">
           <Media>
                <Media.Body>
                    <h5>{title}</h5>
                    <hr/>
                    <p>{body} </p>  
                </Media.Body>
            </Media>
            <hr/>
 
            <Comments/>  
         </Container>
        </>
    );
};

export default PostDetails;