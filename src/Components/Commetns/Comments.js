import React, { useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import Images from '../Images/Images';
import './Comments.css';
import {Button,Badge } from 'react-bootstrap';
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
        <div>
        <Button variant="primary">
    Comments <Badge variant="light">{comments.length}</Badge>
            <span className="sr-only">unread messages</span>
            </Button>
        </div>
        <br/>
         <div className='display'>
             <div>
                {comments.length && <Images len={comments.length} ></Images>}
             </div>
             <div className="styleComment">
             {comments.map(comm=><p key={comm.id}>{comm.email}<br/>{comm.body}  </p>)}
             </div>
         </div>
        </>
    );
};

export default Comments;