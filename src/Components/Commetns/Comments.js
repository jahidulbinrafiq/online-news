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
        <div>
           {comments.map(comm=><li key={comm.id}>{comm.id}<br/>Name:{comm.name} <br/> Details:{comm.body}</li>)}
           <h4>{comments.length}</h4>
        {comments.length && <Images len={comments.length}></Images>} 
        </div>
    );
};

export default Comments;