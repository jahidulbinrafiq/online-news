import React, { useEffect, useState} from 'react';
import Post from '../Post/Post';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
const Home = () => {
    const [posts,setPosts]=useState([])
    useEffect(()=>{
        fetch (`https://jsonplaceholder.typicode.com/posts`)
        .then(res=>res.json())
        .then(data=>setPosts(data))
    },[])
    
    return (
        <>
            <Header/>
            {/* post component */}
            {posts.map((post,index)=><Post post={post} key={index}/>)}
            <Footer/>     
        </>
    );
};

export default Home;