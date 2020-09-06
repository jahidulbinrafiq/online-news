import React, { useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import Images from '../Images/Images';

const Comments = () => {
    let {postId}=useParams();
    const[comments,setComments]=useState([]);
    useEffect(()=>{
        const url=`https://jsonplaceholder.typicode.com/comments?postId=${postId}`;  
        fetch(url)
        .then(res=>res.json())
        .then(data=>{  
            setComments(data)
        })
    },[])

    return (
        <>
         {comments.map(comm=><p key={comm.id}>{comm.email}<br/>{comm.body}  </p>)}
          {comments.length && <Images len={comments.length} ></Images>}
        </>
    );
};

export default Comments;